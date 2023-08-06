export function initAccordion() {
    const accordions = document.querySelectorAll('.accordion')

    accordions.forEach((acc) => {
        acc.addEventListener('click', (e) => {
           
           
            if (acc.classList.contains('active')){
                acc.classList.remove('active')
            } else {
                accordions.forEach((acc) => {
                    acc.classList.remove('active')
                })
                acc.classList.toggle('active')
            }
        })
    })
}