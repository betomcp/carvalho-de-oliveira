const square = document.querySelector('.square-2')

const cards = document.querySelectorAll('.card')

const footerCards = document.querySelectorAll('.card_blur')


document.addEventListener('scroll', () =>{
    const windowTop = window.pageYOffset 

    if(windowTop > 190){
        square.classList.add('downSquare')
    }else{
        square.classList.remove('downSquare')
    }

    cards.forEach((e) =>{
        if((windowTop - 50)  + (window.innerHeight*3) / 4 > e.offsetTop){
            e.classList.remove('hidenCard')
        }else{
            e.classList.add('hidenCard')
        }
    })

    // footerCards.forEach((e) =>{
    //     if((windowTop - 50)  + (window.innerHeight*3) / 4 > e.offsetTop){
    //         e.classList.remove('card_blur_animation')
    //     }else{
    //         e.classList.add('card_blur_animation')
    //     }
    // })

    if((windowTop)  + (window.innerHeight*3) / 4 > footerCards[0].offsetTop){
            footerCards[0].classList.remove('card_blur_animation_1')
            footerCards[1].classList.remove('card_blur_animation_2')
        }else{
            footerCards[0].classList.add('card_blur_animation_1')
            footerCards[1].classList.add('card_blur_animation_2')
        }

    
})