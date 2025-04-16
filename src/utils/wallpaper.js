export function convertColor(property) {
    if (property.value) {
        return `rgb(${property.value.split(' ').map(c => Math.ceil(c * 255))})`
    }
    return undefined;
}