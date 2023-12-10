// navigation event
const menuButton = document.querySelector('[data-id = menu-btn]')
const mobileMenu = document.querySelector('[data-id = mobile-menu]')

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
})

window.addEventListener('resize', (e) => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 768) {
        mobileMenu.classList.remove('open')
    }
})

//form event
const shortenerForm = document.querySelector('[data-id = shortener]');
const linkInput = document.querySelector('[data-id = link-input]');
const errorMessage = document.querySelector('[data-id = error-message]')

shortenerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // form validation
    if (linkInput.value === '') {
        linkInput.classList.add('error');
        errorMessage.style.display = 'block'
        return
    } else {
        linkInput.classList.remove('error');
        errorMessage.style.display = 'none'
    }

    clearInput()
})

function clearInput() {
    setTimeout(() => {
        linkInput.value = ""
    }, 2000)
    console.log('fetching new link... sit back while we work')
}