const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 15)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
