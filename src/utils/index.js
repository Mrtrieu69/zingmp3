export const formatTime = (time) => {
    const floor = Math.floor(time);
    let min = Math.floor(floor / 60);
    let sec = floor % 60;

    return `0${min}:${sec < 10 ? `0${sec}` : sec}`;
};
