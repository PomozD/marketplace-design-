const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('move-text__animation');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
);

export default {
    mounted(el) {
        el.classList.add('before__move-text__animation');
        animatedScrollObserver.observe(el);
    }
}