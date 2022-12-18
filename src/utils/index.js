export const formatTime = (time) => {
    const floor = Math.floor(time);
    let min = Math.floor(floor / 60);
    let sec = floor % 60;

    return `0${min}:${sec < 10 ? `0${sec}` : sec}`;
};

export const getRandom = (length) => {
    return Math.floor(Math.random() * length);
};

export const getRandomId = () => {
    return Math.floor(Math.random() * 10e10).toString(16);
};
