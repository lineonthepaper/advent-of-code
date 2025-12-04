export function formatReadable(folderName) {
    let str = folderName.split(/(\d)/).join(" ");
    return str[0].toUpperCase() + str.slice(1);
}

export function formatPath(readableText) {
    return readableText.toLowerCase().replaceAll(' ', '');
}