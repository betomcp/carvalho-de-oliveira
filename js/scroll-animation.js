document.getElementById('square-1').style.top = '20rem'

let controll =  0

document.addEventListener('scroll', ()=>{
    let getTopText = document.getElementById('square-1').style.top.substring(0, 2)

    let topN = parseFloat(getTopText)

    
    if(topN <= 23){
        console.log(topN)
        topN = topN + 0.5   
        document.getElementById('square-1').style.top = `${topN}rem`
    }
})