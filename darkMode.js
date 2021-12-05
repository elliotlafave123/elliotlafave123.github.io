// dark mode slider 
const toggle = document.querySelector('.toggle')
const slider = document.getElementById('checkboxSlider')
const root = document.querySelector(':root')

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        console.log('Dark Mode')

        root.style.setProperty('--color-primary','rgb(255, 119, 48)')
    }   else {
        console.log('Light Mode')

        root.style.setProperty('--color-primary','#7048E8')
    }
})