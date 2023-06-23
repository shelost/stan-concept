function Class(id) {
    return document.getElementsByClassName(id)
}

function Id(id) {
    return document.getElementById(id)
}

for (let i = 0; i < Class('product').length; i++){

    console.log('js')
    let pill = Class('product')[i]
    pill.onclick = () => {
        Id('popup').classList.add('active')
    }

    Id('click').onclick = () => {
        Id('popup').classList.remove('active')
    }
}