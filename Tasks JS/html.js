const path = "/users/download/index.js"

const isHTML = path => {
    const reguiredExt = ".html";
    const pathExt = path.slice(-5);

    if (pathExt == reguiredExt) {
        return true
    } else {
        return false
    }
}

console.log(isHTML(path));