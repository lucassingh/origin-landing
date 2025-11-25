
export const smoothScrollTo = (sectionId: string, attempt = 1) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetPosition = element.offsetTop - 80;
    const currentPosition = window.pageYOffset;

    if (Math.abs(currentPosition - targetPosition) < 5) return;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    setTimeout(() => {
        const newPosition = window.pageYOffset;
        const distanceFromTarget = Math.abs(newPosition - targetPosition);

        if (distanceFromTarget > 10 && attempt < 3) {
            smoothScrollTo(sectionId, attempt + 1);
        }
    }, 600);
};