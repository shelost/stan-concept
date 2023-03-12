window.onkeyup = e => {

    if (e.key == 'Enter') {

        addBlock(Id('input').value)
    }
}

function addBlock(text) {


    let div = document.createElement('div')
    div.classList.add('dialog')
    div.innerHTML =
        `
        <div class = 'flex'>
            <div class = 'avatar'> </div>
            <p> ${text} <p>
        </div>
        `

    Id('area').appendChild(div)
    Id('default').style.display = 'none'
    Id('input').value = ''

    respond()

    Id('main').scrollTo({
        top: 100000,
        left: 0,
        behavior: 'smooth'
    })
}

function respond() {


    let div = document.createElement('div')
    div.classList.add('dialog')
    div.classList.add('stanley')
    div.innerHTML =
        `
        <div class = 'flex'>
            <div class = 'avatar'> </div>
            <p>
                Sure, adding a product to your Stan Store is pretty straightforward. Here are the steps:
                <br>
                <br> 1. Log in to your Stan account and click on the "Store" tab
                <br> 2. Click on the "+ Add Product" button located in the top right corner
                <br> 3. Fill out the product details, such as product name, description, price, product image, etc.
                <br> 4. If your product is a digital download, click "Add Files" to upload your digital product (make sure to include a preview link or a free sample to entice your customers)
                <br> 5. Choose the categories and tags that best describe your product, as this will help your product appear in relevant search results on Stan.
                <br> 6. Once you're done, click "Add Product" to publish.
                <br> <br>
                And that's it! Your product will now be live on your Stan store and ready for customers to purchase.
            <p>
        </div>
        <div class = 'row'>

            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53302 2.64961C7.88183 1.87387 8.86506 1.6297 9.53626 2.15215L10.3687 2.80009C10.6882 3.04877 10.875 3.43096 10.875 3.83581V6.55532H14.4404C15.7608 6.55532 16.7412 7.77888 16.4532 9.06756L15.2485 14.4595C15.0379 15.402 14.2015 16.0722 13.2357 16.0722H5.8125C5.50184 16.0722 5.25 15.8204 5.25 15.5097V8.00842C5.25 7.82285 5.28935 7.6394 5.36545 7.47016L7.53302 2.64961ZM8.84524 3.03991C8.74936 2.96528 8.6089 3.00016 8.55906 3.11098L6.39149 7.93152C6.38062 7.9557 6.375 7.98191 6.375 8.00842V14.9472H13.2357C13.6747 14.9472 14.0549 14.6426 14.1506 14.2141L15.3553 8.82225C15.4862 8.23649 15.0406 7.68032 14.4404 7.68032H10.3125C10.0018 7.68032 9.75 7.42848 9.75 7.11782V3.83581C9.75 3.77798 9.72331 3.72338 9.67767 3.68785L8.84524 3.03991Z" fill="#6355FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.59766C2.25 7.87278 2.83763 7.28516 3.5625 7.28516H6.375V16.0723H3.5625C2.83763 16.0723 2.25 15.4847 2.25 14.7598V8.59766ZM3.5625 8.41016C3.45895 8.41016 3.375 8.4941 3.375 8.59766V14.7598C3.375 14.8634 3.45895 14.9473 3.5625 14.9473H5.25V8.41016H3.5625Z" fill="#6355FF"/>
            </svg>

            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.842 15.3504C10.4932 16.1261 9.50994 16.3703 8.83874 15.8479L8.00632 15.1999C7.68684 14.9512 7.5 14.569 7.5 14.1642L7.5 11.4447H3.93463C2.61418 11.4447 1.63383 10.2211 1.92176 8.93244L3.12647 3.54055C3.33707 2.59799 4.17354 1.92778 5.13934 1.92778L12.5625 1.92778C12.8732 1.92778 13.125 2.17962 13.125 2.49028L13.125 9.99158C13.125 10.1771 13.0857 10.3606 13.0096 10.5298L10.842 15.3504ZM9.52976 14.9601C9.62564 15.0347 9.76611 14.9998 9.81594 14.889L11.9835 10.0685C11.9944 10.0443 12 10.0181 12 9.99158L12 3.05278L5.13934 3.05278C4.70034 3.05278 4.32013 3.35742 4.2244 3.78586L3.01969 9.17775C2.88881 9.76351 3.33442 10.3197 3.93463 10.3197H8.0625C8.37316 10.3197 8.625 10.5715 8.625 10.8822V14.1642C8.625 14.222 8.65169 14.2766 8.69733 14.3121L9.52976 14.9601Z" fill="#6355FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.125 9.40234C16.125 10.1272 15.5374 10.7148 14.8125 10.7148H12V1.92768H14.8125C15.5374 1.92768 16.125 2.51531 16.125 3.24018V9.40234ZM14.8125 9.58984C14.9161 9.58984 15 9.5059 15 9.40234V3.24018C15 3.13663 14.9161 3.05268 14.8125 3.05268H13.125V9.58984H14.8125Z" fill="#6355FF"/>
            </svg>

        </div>
        `

    Id('loading').style.opacity = 1
    Id('loading').style.height = '200px'

    if (Id('link')) {
        Id('link').remove()
    }


    let link = document.createElement('p')
    link.id = 'link'
    link.innerHTML =  `I want to talk to a real person instead`

    setTimeout(() => {
        Id('loading').style.opacity = 0
        Id('loading').style.height = 0
        Id('area').appendChild(div)
        Id('area').appendChild(link)
        Id('main').scrollTo({
            top: 100000,
            left: 0,
            behavior: 'smooth'
        })
    }, 3000)

}


for (let i = 0; i < Class('question').length; i++){
    let q = Class('question')[i]

    q.onclick = () => {

        addBlock(trim2(q.firstElementChild.innerHTML))
    }
}