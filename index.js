//document.getElementById("count").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    let add = count + " - "
    count = 0
    countEl.textContent = count
    saveEl.textContent += add
}