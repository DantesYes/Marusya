export function initMaterial() {
    const cols = document.querySelectorAll('.material__column')
    cols.forEach((col) => {
        const types = col.querySelectorAll('.material__type')
        const imgs = col.querySelectorAll('.material__minimg img')
        types.forEach((elem, index) => {
            elem.addEventListener('click', (e) => {
                setTimeout(() => {
                    elem.classList.add('active')
                    
                    imgs[index].classList.add('active')
                }, 0)
                types.forEach((type) => {
                    type.classList.remove('active')
                })
                imgs.forEach((img) => {
                    img.classList.remove('active')
                })
            })

        })
    })
}