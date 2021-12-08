const spin = document.getElementById('spin')
const again = document.getElementById('again')
const takeawayName = document.querySelector('.name')
const img = document.getElementById('img')

const takeaways = ['Dominos', 'KFC', 'PapaJohns', 'SubWay', "McDonald's"]

function getTakeaways() {
    position = Math.trunc(Math.random()*takeaways.length)

    takeawayName.textContent = takeaways[position];
    spin.classList.add('hidden')
    again.classList.remove('hidden')

    img.src=`img/${takeaways[position]}.png`
}

spin.addEventListener('click', getTakeaways)
again.addEventListener('click', getTakeaways)