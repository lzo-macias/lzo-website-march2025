export function createCursorGlow() {
    const glowDiv = document.createElement('div');
    glowDiv.className = 'cursor-glow';
    document.body.appendChild(glowDiv);

    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        glowDiv.style.setProperty('--x', `${x}px`);
        glowDiv.style.setProperty('--y', `${y}px`);
    });
}