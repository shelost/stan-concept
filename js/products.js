

function Unsplash() {

    let arr = []

    for (let i = 0; i < 10; i++){
        fetch("https://source.unsplash.com/random/1920x1080/?wallpaper").then(data => {
            arr.push(data.url)
        });
    }

    setTimeout(() => {


    }, 1000);

}

Unsplash()


let PRODUCTS = [
    {
        id: 1,
        title: '1:1 Session',
        type: 'calendar',
        description: 'Let’s meet up! I’m available on Mondays and Thursdays.',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: null,
        url: '#',
        button: 'Get Started'
    },
    {
        id: 2,
        title: '1:1 Session',
        description: 'Let’s meet up! I’m available on Mondays and Thursdays.',
        type: 'calendar',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: null,
        url: '#',
        button: 'Get Started'
    },
    {
        id: 3,
        title: '1:1 Session',
        description: 'Let’s meet up! I’m available on Mondays and Thursdays.',
        type: 'calendar',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: '',
        url: '#',
        button: 'Get Started'
    },
    {
        id: 3,
        title: '1:1 Session',
        description: 'Let’s meet up! I’m available on Mondays and Thursdays.',
        type: 'calendar',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: '',
        url: '#',
        button: 'Get Started'
    },

    {
        id: 4,
        title: 'Listen to my podcast',
        description: 'Go and click on this link',
        type: 'url',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: '',
        url: '#',
        button: 'Get Started'
    },
    {
        id: 5,
        title: 'Listen to my podcast',
        description: 'Go and click on this link',
        type: 'url',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: '',
        url: '#',
        button: 'Get Started'
    },
    {
        id: 6,
        title: 'Listen to my podcast',
        description: 'Go and click on this link',
        type: 'url',
        price: 49,
        discount: 29,
        rating: 5.0,
        img: '',
        url: '#',
        button: 'Get Started'
    }
]

let SECTIONS = [

    {
        id: 1,
        title: 'Featured Products 📈',
        products: [1, 2, 3],
        layout: 'cards'
    },
    {
        id: 2,
        title: 'Products',
        products: [1,2,3],
        layout: 'grid'
    },
    {
        id: 2,
        title: 'Links 🔗',
        products: [4,5,6],
        layout: 'stack'
    }
]

