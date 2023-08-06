
export function popup() {
    const imgView = document.querySelectorAll('[data-view] img')

    const popupLinks = document.querySelectorAll('.popup-link')
    const popupLinkClose = document.querySelectorAll('.popup__close')
    const body = document.body
    const lockPadding = document.querySelectorAll('.lock-padding')
    const wrapper = document.querySelector('.wrapper')

    let unlock = true
    let timeOut = 800

    if (imgView.length > 0){
        imgView.forEach((img) =>{
            img.addEventListener('click', (e) =>{
                const popupImg = document.getElementById('popup-img')
                popupOpen(popupImg)
                popupImg.querySelector('.popup__img').src = img.getAttribute('src')

            })
        })
    }

    if (popupLinks.length > 0) {
        popupLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                let linkHref = link.getAttribute('href').replace('#', '')
                let currentName = document.getElementById(linkHref)
                popupOpen(currentName)
            })
        })
    }

    if (popupLinkClose.length > 0) {
        popupLinkClose.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                popupClose(link.closest('.popup'))
            })
        })
    }

    function popupOpen(currentName) {
        if (currentName && unlock) {
            let popupActive = document.querySelector('.popup.open')

            if (popupActive) {
                popupClose(popupActive, false)
            } else {
                bodyLock()
            }

            currentName.classList.add('open')
            currentName.addEventListener('click', (e) => {
                if (!e.target.closest('.popup__content'))
                    popupClose(e.target.closest('.popup'))
            })

        }
    }

    function popupClose(popupActive, double = true) {
        if (unlock) {
            popupActive.classList.remove('open')

            if (double) {
                bodyUnLock()
            }
        }
    }

    function bodyLock() {
        let lockPaddingValue = (window.innerWidth - wrapper.offsetWidth) + 'px'

        if (lockPadding.length > 0) {
            lockPadding.forEach((lock) => {
                lock.style.paddingRight = lockPaddingValue
            })

        }
        body.style.paddingRight = lockPaddingValue
        body.classList.add('lock')

        unlock = false
        setTimeout(() =>{
            unlock = true
        }, timeOut)
    }

    function bodyUnLock() {
        setTimeout(() =>{
            if (lockPadding.length > 0){
                lockPadding.forEach((lock) =>{
                    lock.style.paddingRight = '0'
                })
            }

            if (body.classList.contains('lock-02')){
                body.classList.add('lock')
            } else {
                body.classList.remove('lock')
            }
            body.style.paddingRight = '0'

        }, timeOut)

        unlock = false
        setTimeout(() =>{
            unlock = true
        }, timeOut)
        
    }
}
