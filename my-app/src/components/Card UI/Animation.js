export const ShowRightAnimate = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
};

export const ShowLeftAnimate = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
};

export const ShowDownAnimate = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
};

export const ShowUpAnimate = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
};
export const ShowComponent = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
};
