export function convertColor(propertie) {
    if (propertie.value) {
        return `rgb(${propertie.value.split(' ').map(c => Math.ceil(c * 255))})`
    }
    return undefined;
}