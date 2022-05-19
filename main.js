const linkInput = document.getElementById('link')
const taskInput = document.getElementById('task')
const btn = document.getElementById('submit')


async function getAnswer() {
    let link = linkInput.value
    let task = taskInput.value

    let htmlContent = await fetch(link)
    let r = await htmlContent.text()
    console.log(r)
}

btn.addEventListener('click', getAnswer)