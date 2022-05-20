const linkInput = document.getElementById('link')
const taskInput = document.getElementById('task')
const btn = document.getElementById('submit')


async function getAnswer() {
    let link = "https://zno-comment-proxy.herokuapp.com/" + linkInput.value
    let task = taskInput.value

    let htmlContent = await fetch(link)
    let r = await htmlContent.text()

    let el = document.createElement('html')
    el.innerHTML = r

    let id = "q" + task

    let explanation = el.querySelector("div #" + id).querySelector("div .explanation")
    console.log(explanation)
}

btn.addEventListener('click', getAnswer)