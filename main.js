const linkInput = document.getElementById('link')
const taskInput = document.getElementById('task')
const btn = document.getElementById('submit')
const iframe = document.getElementById("iframe")


async function getAnswer() {
    let link = "https://zno-comment-proxy.herokuapp.com/" + linkInput.value
    let task = taskInput.value

    let htmlContent = await fetch(link)
    let r = await htmlContent.text()

    let el = document.createElement('html')
    el.innerHTML = r

    let id = "q" + task

    let explanation = el.querySelector("div #" + id).querySelector("div .explanation")
    let images = explanation.querySelectorAll("img")
    for (const image of images) {
        let oldSrc = image.getAttribute("src")
        let newSrc = "https://zno.osvita.ua" + oldSrc
        image.setAttribute("src", newSrc)
    }
    explanation.setAttribute("style", '')

    let script = document.createElement("script")
    script.setAttribute("src", 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-svg.js')
    script.defer = true
    explanation.appendChild(script)

    iframe.setAttribute("srcdoc", explanation)

}

btn.addEventListener('click', getAnswer)