const toggle = document.querySelector('.toggle')
const slider = document.getElementById('checkboxSlider')
const root = document.documentElement

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        console.log('Light Mode')

        root.style.setProperty('--bg-color',' hsl(0, 0%, 100%)')
        root.style.setProperty('--card-bg-color',' hsl(227, 47%, 96%)')
        root.style.setProperty('--top-bg-pattern-color','hsl(227, 47%, 96%)')
        root.style.setProperty('--text-color','hsl(228, 12%, 44%)')
        root.style.setProperty('--text-color-white','hsl(230, 17%, 14%)')
    }   else {
        console.log('Dark Mode')
        root.style.setProperty('--bg-color','hsl(230, 17%, 14%)')
        root.style.setProperty('--card-bg-color','hsl(228, 28%, 20%)')
        root.style.setProperty('--top-bg-pattern-color','hsl(232, 19%, 15%)')
        root.style.setProperty('--text-color','hsl(228, 34%, 66%)')
        root.style.setProperty('--text-color-white','hsl(0, 0%, 100%)')
    }
})