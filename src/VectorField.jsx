import { useEffect, useRef } from 'react';

export default function VectorField() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    mouse: { x: -9999, y: -9999 },
    arrows: [],
    trail: [],
    animId: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;

    const SPACING = 42;
    const ARROW_LEN = 11;
    const INFLUENCE_RADIUS = 170;
    const DEFORM_STRENGTH = 34;
    const DAMPING = 0.09;

    function buildGrid() {
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      const arrows = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = c * SPACING + SPACING / 2;
          const by = r * SPACING + SPACING / 2;
          // base angle: gentle curl field (like a diffeomorphism)
          const nx = (bx / canvas.width) * 2 - 1;
          const ny = (by / canvas.height) * 2 - 1;
          const baseAngle = Math.atan2(ny * 0.3 + nx * 0.1, nx * 0.3 - ny * 0.1);
          arrows.push({
            bx, by,
            angle: baseAngle,
            targetAngle: baseAngle,
            baseAngle,
          });
        }
      }
      return arrows;
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      state.arrows = buildGrid();
    }

    function drawArrow(ctx, x, y, angle, alpha) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x2 = x + cos * ARROW_LEN;
      const y2 = y + sin * ARROW_LEN;
      const x1 = x - cos * (ARROW_LEN * 0.4);
      const y1 = y - sin * (ARROW_LEN * 0.4);

      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // arrowhead
      const hx = x2 - cos * 4;
      const hy = y2 - sin * 4;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(hx - sin * 2.5, hy + cos * 2.5);
      ctx.lineTo(hx + sin * 2.5, hy - cos * 2.5);
      ctx.closePath();
      ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = state.trail;

      if (trail.length > 1) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < trail.length; i += 1) {
          const prev = trail[i - 1];
          const point = trail[i];
          const lifeRatio = point.life / point.maxLife;

          ctx.strokeStyle = `rgba(53, 225, 234, ${0.32 * lifeRatio})`;
          ctx.fillStyle = `rgba(53, 225, 234, ${0.18 * lifeRatio})`;
          ctx.lineWidth = 1.2 + lifeRatio * 2.4;

          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.1 + lifeRatio * 1.7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.strokeStyle = 'rgba(12, 18, 30, 0.3)';
      ctx.fillStyle = 'rgba(12, 18, 30, 0.3)';
      ctx.lineWidth = 1;

      const mx = state.mouse.x;
      const my = state.mouse.y;

      for (const a of state.arrows) {
        const dx = a.bx - mx;
        const dy = a.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Spatial gradient: darker and more visible on the sides
        const nx = (a.bx / canvas.width) * 2 - 1;
        const ny = (a.by / canvas.height) * 2 - 1;
        const edgeDist = Math.max(Math.abs(nx), Math.abs(ny));
        const edgeGradient = 0.88 + edgeDist * 0.12;

        if (dist < INFLUENCE_RADIUS) {
          const t = 1 - dist / INFLUENCE_RADIUS;
          const push = t * t * DEFORM_STRENGTH;
          const pushAngle = Math.atan2(dy, dx);
          a.targetAngle = pushAngle + (a.baseAngle - pushAngle) * (1 - t * 0.7);
          a.px = a.bx + Math.cos(pushAngle) * push * 0.6;
          a.py = a.by + Math.sin(pushAngle) * push * 0.6;
        } else {
          a.targetAngle = a.baseAngle;
          a.px = a.bx;
          a.py = a.by;
        }

        // smooth lerp
        a.angle += (a.targetAngle - a.angle) * DAMPING * 3;
        if (!a.px) a.px = a.bx;
        if (!a.py) a.py = a.by;
        a.rx = (a.rx || a.bx) + ((a.px || a.bx) - (a.rx || a.bx)) * DAMPING;
        a.ry = (a.ry || a.by) + ((a.py || a.by) - (a.ry || a.by)) * DAMPING;

        const alpha = (0.4 + (dist < INFLUENCE_RADIUS ? (1 - dist / INFLUENCE_RADIUS) * 0.1 : 0)) * edgeGradient;
        drawArrow(ctx, a.rx, a.ry, a.angle, alpha);
      }

      state.trail = state.trail
        .map(point => ({ ...point, life: point.life - 1 }))
        .filter(point => point.life > 0);

      state.animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      state.mouse.x = e.clientX;
      state.mouse.y = e.clientY;
      const last = state.trail[state.trail.length - 1];
      if (!last || Math.hypot(last.x - e.clientX, last.y - e.clientY) > 4) {
        state.trail.push({ x: e.clientX, y: e.clientY, life: 26, maxLife: 26 });
        if (state.trail.length > 36) {
          state.trail.shift();
        }
      }
    }

    function onMouseLeave() {
      state.mouse.x = -9999;
      state.mouse.y = -9999;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(state.animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="vector-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
