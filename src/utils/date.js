function fillZero(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

export function getDate(date = new Date(), sep = '-') {
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${fullYear}${sep}${fillZero(month)}${sep}${fillZero(day)}`;
}

export function getTime(date = new Date(), sep = ':') {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${fillZero(hour)}${sep}${fillZero(minute)}${sep}${fillZero(second)}`;
}