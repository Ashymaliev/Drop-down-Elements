const toggles = document.querySelectorAll('.fag-toggle')

toggles.forEach(toggle =>{
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})