const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('load-content__animation');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
);

export default {
    mounted(el) {
        el.classList.add('before__load-content__animation');
        animatedScrollObserver.observe(el);
    }
}