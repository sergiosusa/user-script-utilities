function getCurrentUrl() {
    return window.location.href;
}

/** Page **/

function realoadPageAfter(miliseconds) {
    return setInterval(realoadPage(), miliseconds);
}

function realoadPage() {
    window.location.reload();
}

function closePageAfter(miliseconds) {
    return setInterval(closePage, miliseconds);
}

function closePage() {
    window.close();
}

/** DOM Manipulation **/

function insertNodeAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function insertNodeBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
