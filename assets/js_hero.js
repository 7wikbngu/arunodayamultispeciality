(() => {
    const scene = document.querySelector('.hero3d__scene');
    const img = document.querySelector('.hero3d__img');
    const overlay = document.querySelector('.hero3d__overlay');
    const content = document.querySelector('.hero3d__content');
    if (!scene || !img || !overlay || !content) return;

    let raf = null;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    const update = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      const rotX = -currentY * 6; // tilt up/down
      const rotY = currentX * 6;  // tilt left/right

      scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

      // Parallax on Z and XY
      img.style.transform = `translateZ(-40px) translateX(${currentX * 10}px) translateY(${currentY * 10}px)`;
      overlay.style.transform = `translateZ(20px) translateX(${currentX * 6}px) translateY(${currentY * 6}px)`;
      content.style.transform = `translateZ(60px) translateX(${currentX * 12}px) translateY(${currentY * 12}px)`;

      raf = requestAnimationFrame(update);
    };

    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2; // widen range
      targetY = y * 2;
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onLeave = () => {
      targetX = 0; targetY = 0;
    };

    scene.addEventListener('pointermove', onMove);
    scene.addEventListener('pointerleave', onLeave);
  })();
