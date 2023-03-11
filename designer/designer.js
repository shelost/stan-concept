
let OPTIONS = {
    theme: [
        'Classic',  // 1
        'Brock',    // 2
        'Kels',     // 3
        'Tyla',     // 4
        'Minima',   // 5
        'Moderno',  // 6
        'Stone',    // 7
        'Eclipse', // 8
        'Nightview', // 9
        'Material', // 10
        'Trish',     // 11
        'Spotlight'
    ],
    font: [
        /*  1  */ 'Inter',
        /*  2  */ 'Plus Jakarta Sans',
        /*  3  */ 'Rubik',
        /*  4  */ 'Baskerville',
        /*  5  */ 'Optima',
        /*  6  */ 'Argent CF'
    ],
    primary: '#6355ff',
    secondary: '#F9FFFF',
    border: [false, true],
    shadow: [false, true],
    header: ['large', 'compact', 'text', 'banner', 'spotlight'],
    round: ['square', 'round', 'pill'],
    card: ['large', 'compact', 'stretch'],
    grid: ['large', 'compact'],

}

let OPTION = {
    theme: null,
    font: 1,
    primary: '#6355ff',
    secondary: '#F9FFFF',
    border: true,
    shadow: false,
    header: 4,
    round: 1,
    card: 3,
    grid: 1,
}


function getUrlQueries(){

    let obj = {}
    let strings = window.location.search.split('?')

    for (let i = 0; i < strings.length; i++){

        let str = strings[i]

        if (str.length > 2) {
            let key = str.split('=')[0]
            let val = str.split('=')[1]

            obj[key] = val
        }
    }

    return obj
}






function createControls() {

    let div = ``

    for (const k in OPTIONS) {
        let v = OPTIONS[k]

        // Color
        if (v[0] == '#') {
            div +=
            `
            <div class = 'branding'>
                <div id = 'c-${k}' class = 'control'>

                <h2> ${k} </h2>

                <div class = 'row'>
                    <input id = 'input-${k}' value = ${OPTION[k]}>
                    <div id = 'color-${k}' class = 'color'> </div>
                </div>
            </div>

            `
        }

        if (Array.isArray(v)) {

            // Toggle
            if (v[0] == true | v[0] == false) {
                let active = OPTION[k] ? 'active' : ''
                div +=
                `
                <div id = 'c-${k}' class = 'control'>
                    <h2> ${k} </h2>
                    <div class = 'row'>
                        <div id = 'c-${k}-toggle' class = 'toggle option option-${k} ${active}'>
                            <div class = 'nub'></div>
                        </div>
                    </div>
                </div>
                `

            // Theme
            } else if (k == 'theme') {

                div +=
                `
                <div id = 'c-${k}' class = 'control'>
                    <div class = 'row'>
                `

                for (let i = 0; i < v.length; i++){
                    let opt = v[i]

                    let active = OPTION[k] == i+1? 'active' : ''
                    let Theme = T[opt]

                    div += `
                    <div id = 'c-${k}-${i + 1}' class = 'option option-${k} ${active}'
                    style =
                    '
                    font-family: ${OPTIONS.font[Theme.font-1]}, sans-serif;
                    '
                    >
                    ${opt}
                     </div>`
                }

                div +=  ` </div> </div> `

            } else {

                div +=
                `
                <div id = 'c-${k}' class = 'control'>

                    <h2> ${k} </h2>
                    <div class = 'row'>
                `
                for (let i = 0; i < v.length; i++){
                    let opt = v[i]

                    let active = OPTION[k] == i + 1 ? 'active' : ''

                    //  <img src = 'assets/${k}-${opt}.svg'>

                    div += `
                    <div id = 'c-${k}-${i + 1}' class = 'option option-${k} ${active}'>

                        <h2> ${opt} </h2>

                    </div>
                    `
                }

                div +=  ` </div> </div> `
            }
        }
    }

    Id('controls').innerHTML = div
    applyOptions()
}



function applyOptions() {

    // Font
    Id('store').style.setProperty('--theme-font', OPTIONS.font[OPTION.font - 1])


    // Header
    for (let i = 0; i < OPTIONS.header.length; i++){
        let other = OPTIONS.header[i]
        Id('store').classList.remove(other)
    }
    Id('store').classList.add(OPTIONS.header[OPTION.header - 1])

    // Shadow
    if (OPTION.shadow) {
        Id('store').classList.add('shadow')
    } else {
        Id('store').classList.remove('shadow')
    }

    // Border
    if (OPTION.border) {
        Id('store').classList.add('border')
    } else {
        Id('store').classList.remove('border')
    }

    // Roundness
    for (let i = 0; i < Class('product').length; i++){
        let div = Class('product')[i]

        for (let i = 0; i < OPTIONS.round.length; i++){
            let other = OPTIONS.round[i]
            div.classList.remove(other)
        }

        div.classList.add(OPTIONS.round[OPTION.round - 1])
    }

    // Card Type
    for (let i = 0; i < Class('product-cards').length; i++){
        let div = Class('product-cards')[i]

        for (let i = 0; i < OPTIONS.card.length; i++){
            let other = OPTIONS.card[i]
            div.classList.remove(other)
        }

        div.classList.add(OPTIONS.card[OPTION.card - 1])
    }

    // Grid Type
    for (let i = 0; i < Class('product-grid').length; i++){
        let div = Class('product-grid')[i]

        for (let i = 0; i < OPTIONS.grid.length; i++){
            let other = OPTIONS.grid[i]
            div.classList.remove(other)
        }

        div.classList.add(OPTIONS.grid[OPTION.grid - 1])
    }
}

function encode(obj) {

    if (!obj.meta) {
        return
    }

    let str = ``

    for (let k in obj) {
        let v = obj[k]
        console.log(v)
        str += `${v}-`
    }

 /*
 Brock: {
        font: 3,
        primary: '#000000',
        secondary: '#FFCE00',
        border: true,
        shadow: true,
        header: 3,
        round: 1,
        card: 3,
        grid: 1,
        meta: {
            pfp: 'assets/kels.jpeg',
            name: 'Brock Johnson',
            bio: 'Hello!'
        }
    },
 */
}

encode(T.Brock)

function toTitleCase(str) {

    let txt = str.toLowerCase()
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

function filterColor(hex) {

    let [h,s,l] = hexToHSL(hex)
    return `hsl(${h},${s}%,${l-3}%)`
}



/// ACTION AREA ///


let META = true
let Queries = getUrlQueries()

createControls()

if (Queries.theme) {
    OPTION.theme = OPTIONS.theme.indexOf(toTitleCase(Queries.theme))+1

    let Theme = T[toTitleCase(Queries.theme)]

    for (const k in Theme) {
        OPTION[k] = Theme[k]
    }


    if (Theme.meta && META) {
        Id('pfp').style.backgroundImage = `url(${Theme.meta.pfp})`
        Id('name').innerHTML = Theme.meta.name
    } else {
        Id('pfp').style.backgroundImage = `url(assets/baby.png)`
        Id('name').innerHTML = 'Heewon Ahn'
    }

    Id('input-primary').value = OPTION.primary
    Id('input-secondary').value = OPTION.secondary

    createControls()
}

let slider_count = 0

function changeColor(color) {

    let slider = document.createElement('div')
    slider.id = `slider-${slider_count}`
    slider_count++

    slider.style =
    `
        width: 5vw;
        height: 5vw;
        position: fixed;
        background: ${color};
        bottom: 40vh;
        left: 20vw;
        animation: slider 2s ease;
        border-radius: 50%;
        //filter: blur(1px);
        z-index: -1;
    `

    /*
    slider.style =
    `
        width: 100vw;
        height: 100vh;
        position: fixed;
        background: ${color};
        top: 100vh;
        left: 0;
        animation: slide-up .6s ease;
        //filter: blur(1px);
        z-index: -1;
    `*/

    Id('main').appendChild(slider)

    setTimeout(() => {
        Id('main').style.background = color
    }, 600);

    setTimeout(() => {
        slider.remove()
    }, 2000);

    console.log(slider)
}


let DesignerLoop = () => {


    // Colors

    let primary = Id('input-primary').value
    let secondary = Id('input-secondary').value

    OPTION.primary = primary
    OPTION.secondary = secondary

    Id('store').style.setProperty('--theme-primary-color', primary)
    Id('store').style.setProperty('--theme-secondary-color', secondary)
    Id('store').style.setProperty('--theme-tertiary-color', filterColor(secondary))

    Id('store').style.setProperty('--light', hexToHSL(secondary)[2])

    Id('color-primary').style.background = primary
    Id('color-secondary').style.background = secondary

  //  Id('main').style.background = secondary

    Id('input-secondary').oninput = () => {
        let val = Id('input-secondary').value
        if (val.length == 7 && val[0] == '#') {
            changeColor(val)
        }
    }

    // Controls

    for (let i = 0; i < Class('option').length; i++) {

        let opt = Class('option')[i]

        opt.onclick = () => {



            let prop = opt.id.split('-')[1]

            // Toggle
            if (opt.classList.contains('toggle')) {

                OPTION[prop] = !OPTION[prop]
                opt.classList.toggle('active')

                // Radio Button
            } else {

                let val = JSON.parse(opt.id.split('-')[2])
                OPTION[prop] = val

                for (let i = 0; i < Class(`option-${prop}`).length; i++) {
                    let div = Class(`option-${prop}`)[i]
                    div.classList.remove('active')

                }
                opt.classList.add('active')

                // Apply Theme
                if (opt.classList.contains('option-theme')) {



                    if (OPTION.theme != null) {
                        let theme_id = OPTION.theme - 1
                        let Theme = T[OPTIONS.theme[theme_id]]

                        // Copy all styles from theme
                        for (const k in Theme) {
                            OPTION[k] = Theme[k]
                        }

                        changeColor(Theme.secondary)


                        if (Theme.meta && META) {
                            Id('pfp').style.backgroundImage = `url(${Theme.meta.pfp})`
                            Id('name').innerHTML = Theme.meta.name
                        } else {
                            Id('pfp').style.backgroundImage = `url(assets/baby.png)`
                            Id('name').innerHTML = 'Heewon Ahn'
                        }

                        Id('input-primary').value = OPTION.primary
                        Id('input-secondary').value = OPTION.secondary

                        createControls()

                    } else {
                        OPTION.theme = null
                    }
                }
            }


            applyOptions()
        }
    }

    window.requestAnimationFrame(DesignerLoop)
}
window.requestAnimationFrame(DesignerLoop)