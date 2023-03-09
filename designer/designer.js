
let OPTIONS = {
    theme: ['Brock', 'Kels', 'Minima','Moderno'],
    font: ['Inter', 'Plus Jakarta Sans', 'Rubik', 'Baskerville', 'Optima'],
    primary: '#6355ff',
    secondary: '#F9FFFF',
    border: [false, true],
    shadow: [false, true],
    header: ['large', 'compact', 'text'],
    round: ['square', 'round', 'pill'],
    card: ['large', 'compact', 'stretch'],
    grid: ['large', 'compact', 'carousel'],

}


let OPTION = {
    theme: null,
    font: 1,
    primary: '#6355ff',
    secondary: '#F9FFFF',
    border: 1,
    shadow: 2,
    header: 1,
    round: 1,
    card: 3,
    grid: 1,
}


let T =
{
    Brock: {
        font: 3,
        primary: '#000000',
        secondary: '#FFCE00',
        border: 2,
        shadow: 2,
        header: 3,
        round: 1,
        card: 3,
        grid: 1,
    },
    Kels: {
        font: 4,
        primary: '#000000',
        secondary: '#F1E4E6',
        border: 1,
        shadow: 1,
        header: 1,
        round: 1,
        card: 3,
        grid: 1,
    },
    Minima: {
        font: 1,
        primary: '#6355FF',
        secondary: '#FFFFFF',
        border: 1,
        shadow: 2,
        header: 1,
        round: 3,
        card: 2,
        grid: 1,
    },
    Moderno: {
        font: 1,
        primary: '#000000',
        secondary: '#FFFFFF',
        border: 1,
        shadow: 2,
        header: 2,
        round: 1,
        card: 1,
        grid: 1,
    }
}


function createControls() {

    let div = ``


    for (const k in OPTIONS) {
        let v = OPTIONS[k]

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


            div +=
                `

                <div id = 'c-${k}' class = 'control'>

                    <h2> ${k} </h2>
                    <div class = 'row'>
                `

            for (let i = 0; i < v.length; i++){
                let opt = v[i]

                let active = OPTION[k] == i+1? 'active' : ''

                div += `
                <div id = 'c-${k}-${i+1}' class = 'option option-${k} ${active}'> ${opt} </div>`
            }

            div +=  ` </div> </div> `
        }
    }



    Id('controls').innerHTML = div
    applyOptions()

}

createControls()


function applyOptions() {


    for (const k in OPTION) {
        let v = OPTION[k]
        let l = OPTIONS[k]

        let name = l[v - 1]
    }


    // Font
    Id('store').style.setProperty('--theme-font', OPTIONS.font[OPTION.font - 1])


    // Header
    for (let i = 0; i < OPTIONS.header.length; i++){
        let other = OPTIONS.header[i]
        Id('header').classList.remove(other)
    }
    Id('header').classList.add(OPTIONS.header[OPTION.header - 1])

    // Shadow
    if (OPTION.shadow == 2) {
        Id('store').classList.add('shadow')
    } else {
        Id('store').classList.remove('shadow')
    }

    // Border
    if (OPTION.border == 2) {
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


    /*
    primary: '#6355ff',
    secondary: '#F9FFFF',
    border: [false, true],
    shadow: [false, true],
    header: ['large', 'compact', 'text'],
    round: ['square', 'round', 'pill'],
    card: ['large', 'compact', 'stretch'],
    grid: ['large', 'compact', 'carousel'],
    */
}





function filterColor(hex) {

    let [h,s,l] = hexToHSL(hex)

    return `hsl(${h},${s}%,${l-3}%)`
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


    // Controls

    for (let i = 0; i < Class('option').length; i++) {

        let opt = Class('option')[i]

        opt.onclick = () => {
            let prop = opt.id.split('-')[1]
            let val = JSON.parse(opt.id.split('-')[2])
            OPTION[prop] = val

            if (opt.classList.contains('option-theme')) {

                if (OPTION.theme != null) {
                    let theme_id = OPTION.theme-1
                    let Theme = T[OPTIONS.theme[theme_id]]


                    for (const k in Theme) {
                        OPTION[k] = Theme[k]
                    }
                    //OPTION.theme = theme_id

                    Id('input-primary').value = OPTION.primary
                    Id('input-secondary').value = OPTION.secondary
                }

            } else {

                OPTION.theme = null


            }


            createControls()
        }


    }


    window.requestAnimationFrame(DesignerLoop)
}
window.requestAnimationFrame(DesignerLoop)