
// style="--animation-order: ${counter};"


let counter = 1
let unsplash = 1

for (let i = 0; i < SECTIONS.length; i++){

    let s = SECTIONS[i]

    let section =
    `
    <div class = 'section' id = 'section-${s.id}'>

        <div class = 'section-header'>

            <h2 class = 'section-title anim'> ${s.title} <h2>
        </div>

        <div class = 'cards ${s.layout}'>

    `

    for (let j = 0; j < PRODUCTS.length; j++){
        let p = PRODUCTS[j]

        if (s.products.includes(p.id)) {

            if (!p.img) {

                p.img = `https://source.unsplash.com/random/?color&${unsplash}`

                unsplash++
            }

            let card =
            `

            <div id = 'product-${p.id}' class = 'card ${p.type}'>

                <div class = 'thumbnail anim' style = 'background-image: url(${p.img})'>
                </div>

                <div class = 'expo'>

                    <h3 class = 'anim'> ${p.title} </h3>

                    <p class = 'anim' > ${p.description} </p>

                    <div class = 'price-row anim'>

                        <h2 class = 'price'> $${p.price} </h2>

                    </div>

                </div>

            </div>
            `

            section += card
        }

    }

    section +=

    `

        </div>
    </div>
    `

    Id('sections').innerHTML = Id('sections').innerHTML + section


}

console.log(SECTIONS)

console.log('yo')


/*
for (let i = 22; i < Tag("*").length; i++){

    let t = Tag('*')[i]

    console.log(t)

    //t.style.setProperty('--animation-order', counter)

    console.log(t.style)
    counter++


    t.style.animationName = 'float-in';
    t.style.animationDuration = '1000ms';
    t.style.animationDelay = 'calc(var(--animation-order) * 100ms)';
    t.style.animationFillMode = 'both';
    t.style.animationTimingFunction = 'ease-in-out';
}
*/


for (let i = 0; i < Class('anim').length; i++){

    let t = Class('anim')[i]

    t.style.setProperty('--animation-order', counter)
    t.style.transition = '0.2s ease';
    t.style.animationName = 'float-in';
    t.style.animationDuration = '700ms';
    t.style.animationDelay = 'calc(var(--animation-order) * 30ms)';
    t.style.animationFillMode = 'both';
    t.style.animationTimingFunction = 'ease-in-out';

    counter++
}




let slider = 1

let slide =

    `



            <div class = 'slide-header'>

                <div class = 'url'>
                    <h3> /product-session </h3>
                </div>

                <div class = 'bars'>
                    <div class = 'bar one'> </div>
                    <div class = 'bar two'> </div>
                </div>

            </div>

            <div id = 'checkout' class = 'screen checkout'>

                <div class = 'banner' style = 'background-image: url(https://source.unsplash.com/random/?nature&${slider})'>

                </div>

                <div class = 'expo'>
                    <h1> 1:1 Session </h1>
                    <h2> $49 </h2>
                </div>

                <div class = 'description'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Facilisis volutpat est velit egestas dui id. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus.
                        Id diam maecenas ultricies mi eget.
                    </p>
                    <p>

                        Bibendum est ultricies integer quis. Duis ut diam quam nulla porttitor massa id neque.
                        Euismod nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus.
                        Eros in cursus turpis massa tincidunt dui. Pretium aenean pharetra magna ac placerat vestibulum.
                        Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Mauris pharetra et ultrices neque ornare aenean euismod elementum.
                        Ut sem viverra aliquet eget sit amet tellus cras. Sed adipiscing diam donec adipiscing tristique risus.
                        Bibendum enim facilisis gravida neque convallis a cras. Ut sem viverra aliquet eget sit amet.
                        Gravida rutrum quisque non tellus orci ac. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.

                    </p>
                </div>

                <div class = 'forms'>
                    <input placeholder = 'Name'>
                    <input placeholder = 'Email' type = 'email'>
                    <input placeholder = 'Phone Number' type = 'email'>
                </div>

                <butto class = 'cta'>
                    Purchase ->
                </button>
            </div>


`



let frame =

    `



            <div class = 'slide-header frame-header'>

                <div class = 'url'>
                    <h3> stan.store </h3>
                </div>

                <div class = 'bars'>
                    <div class = 'bar one'> </div>
                    <div class = 'bar two'> </div>
                </div>

            </div>

            <iframe src = 'https://heewon.site/'>

`




Id('plus').onclick = () => {

    let node = document.createElement('div')
    node.classList.add('slide')

    node.innerHTML = slide

    let div = Id('slides')

    Id('slides').appendChild(node)

    Id('main').scrollTo({
        top: 0,
        left: 100000,
        behavior: 'smooth'
    })


    console.log(div.scrollLeft)

    slider++

}



let loop = () => {



    for (let i = 0; i < Class('bars').length; i++){
        let b = Class('bars')[i]

        b.onclick = () => {
            if (b.classList.contains('active')) {
                let slide = b.parentElement.parentElement

                console.log(slide)


                slide.style.animation = 'remove 1s ease'

                setTimeout(() => {
                    slide.remove()
                }, 500);
            }
            b.classList.toggle('active')
        }
    }


    for (let i = 0; i < Class('card').length; i++) {

        let c = Class('card')[i]


        c.onclick = () => {

            let node = document.createElement('div')
            node.classList.add('slide')

            if (c.classList.contains('url')) {
                node.innerHTML = frame
            } else {
                node.innerHTML = slide
            }


            let div = Id('slides')

            Id('slides').appendChild(node)

            Id('main').scrollTo({
                top: 0,
                left: 100000,
                behavior: 'smooth'
            })


            console.log(div.scrollLeft)

            slider++
        }

    }








    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)