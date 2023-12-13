export const ShowRightAnimate = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8 },
};

export const ShowLeftAnimate = {
    initial: { x: -120, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8 },
};
export const ShowLeftDelayAnimate = (delay) => ({
    initial: { x: -120, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: delay },
});

export const ShowDownAnimate = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
};

export const ShowUpAnimate = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
};
export const ShowComponent = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.4 },
};
export const ShowScale = {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
    transition: { duration: 0.4 },
};
export const ShowRotate360 = {
    initial: { rotate: 300, scale: 0.5 },
    whileInView: { rotate: 360, scale: 1 },
    transition: { duration: 0.4 },
};
export const ShowSpecialAnimate90 = {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    transition: { duration: 0.8 },
};
