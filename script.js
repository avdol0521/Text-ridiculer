const textarea = document.getElementById("input");
const outputarea = document.getElementById("output")
let newText = "";

const ridicule = (string) => {
    return string.split('').map((char, index) => {
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
const call = () => {
    let str = textarea.value;
    newText = ridicule(str);
    outputarea.innerHTML = newText;
}
const copy = () => {
    navigator.clipboard.writeText(newText).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
textarea.addEventListener('input', call);