export const ShowRightAnimate = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    viewport: { once: true },
};

export const ShowLeftAnimate = {
    initial: { x: -120, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1 },
    viewport: { once: true },
};

export const ShowDownAnimate = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1 },
    viewport: { once: true },
};

export const ShowUpAnimate = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1 },
    viewport: { once: true },
};
export const ShowComponent = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
    viewport: { once: true },
};
export const ShowScale = {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
    transition: { duration: 0.3 },
    viewport: { once: true },
};
export const ShowRotate = {
    initial: { rotate: 300, scale: 0.5 },
    animate: { rotate: 360, scale: 1 },
};
