
export function initForm() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const formParent = document.querySelector('.form')
    const form = document.querySelector('.form__form')
    const formInputs = document.querySelectorAll('.form__input')
    const formCol = document.querySelector('.form__col')
    const formQer = document.querySelectorAll('.req')
    const triggers = document.querySelectorAll('.form-trigger')
    const formShadow = document.querySelector('.form__shadow')
    const formTitle = document.querySelector('.form__title')
    const body = document.body
    const wrapper = document.querySelector('.wrapper')
    const formBtn = document.querySelector('.form__btn')
    let lockPadding = (window.innerWidth - wrapper.offsetWidth) + 'px'

    const email = document.getElementById('form-email')
    const tel = document.getElementById('form-tel')

    let message = {
        errorEmail: 'Неверный email',
        errorPhone: 'Неверный телефон',
        loading: 'Загрузка...',
        errorSend: 'Ошибка',
        exelent: 'Заявка отправлена',
    }
    const clearInput = (inputs) => {
        inputs.forEach((input) => {
            input.value = ''
        })
    }
    // maskedinput jQerry
    $(function ($) {
        $('.visit__number').mask("+7 (999) 999-99-99");
    });
    //

    if (triggers.length > 0) {
        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault()
                const triggerId = trigger.getAttribute('href').replace('#', '')
                const triggerForm = document.getElementById(triggerId)
                triggerForm.classList.add('show')
                triggerForm.style.paddingRight = lockPadding
                body.classList.add('lock')
                body.style.paddingRight = lockPadding

                if (trigger.classList.contains('form-trigger-send')) {
                    tel.value = document.querySelector('.visit__number').value
                }

            })
        })
    }
    formShadow.addEventListener('click', (e) => {
        clearInput(formInputs)
        if (formParent.classList.contains('show')) {
            formParent.classList.remove('show')
            body.classList.remove('lock')
            body.style.paddingRight = '0'
            triggerForm.style.paddingRight = '0'
        }
    })


    form.addEventListener('submit', (e) => {


        e.preventDefault()
        const formData = new FormData(form)


        const valideEmail = (email) => {
            let regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            return regEmail.test(String(email).toLowerCase())
        }
        const validTel = (tel) => {
            let regTel = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
            return regTel.test(String(tel))
        }
        const formInputFilter = Array.from(formInputs).filter((item) => item.value === '')
        formQer.forEach((req) => {
            const reqInput = req.querySelector('.form__input')


            if (reqInput.value === '') {
                req.classList.add('error')
            } else {
                req.classList.remove('error')
            }

        })
        if (formInputFilter.length !== 0) {
            return false
        }
        if (!valideEmail(email.value)) {
            email.parentNode.classList.add('error')
            document.querySelector('.email-error').classList.add('active')
            return false

        } else {
            email.parentNode.classList.remove('error')
            document.querySelector('.email-error').classList.remove('active')
        }
        if (!validTel(tel.value)) {
            tel.parentNode.classList.add('error')
            document.querySelector('.tel-error').classList.add('active')
            return false

        } else {
            tel.parentNode.classList.remove('error')
            document.querySelector('.tel-error').classList.remove('active')
        }





        postData(url, formData)
            .then(() => {
                formBtn.classList.add('active')
                formParent.classList.add('submit')
                formTitle.innerHTML = message.exelent
                formCol.classList.add('stock')
            })
            .catch(() => {
                formBtn.innerHTML = message.errorSend

            })
            .finally(() => {
                clearInput(formInputs)
            })

    })

    const postData = async (url, data) => {
        formBtn.innerHTML = message.loading
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text()
    }
}