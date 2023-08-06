export function initPreload() {
    const body = document.body
    const preload = document.querySelector('.preloader')

    body.classList.add('lock')

    window.onload = () => {
        setTimeout(() => {
            preload.classList.add('hide')
            body.classList.remove('lock')
        }, 0)
    }
}