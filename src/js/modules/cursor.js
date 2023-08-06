export function initCursor(){
    const galleryItems = document.querySelectorAll('.work__item')

    galleryItems.forEach((item) => {
        const circle = item.querySelector('.circle')

        item.addEventListener('mouseover', (e) => {
            circle.classList.add('active')
            circle.style.left = (e.pageX - item.offsetLeft) + 'px'
            circle.style.top = (e.clientY - item.getBoundingClientRect().top) + 'px'
        })
        item.addEventListener('mouseout', (e) => {
            circle.classList.remove('active')
            circle.style.left = (e.pageX - item.offsetLeft) + 'px'
            circle.style.top = (e.clientY - item.getBoundingClientRect().top) + 'px'
            
        })

        
    })
}