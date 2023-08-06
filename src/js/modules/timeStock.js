export function time() {

    const stocks = document.querySelectorAll('.stock')
    


    if (stocks.length > 0) {
        stocks.forEach((stock) => {


            setInterval(() => {
                const hour = stock.querySelector('.hour span')
                const minuts = stock.querySelector('.minutes span')
                const second = stock.querySelector('.second span')

                second.innerHTML--
                if (second.innerHTML <= 0) {
                    second.innerHTML = 60
                    minuts.innerHTML--

                    if (minuts.innerHTML <= 0) {
                        minuts.innerHTML = 60
                        hour.innerHTML--
                    }
                }
                if (hour.innerHTML <= 0) {
                    hour.parentNode.style.display = 'none'
                }

            }, 1000)
        })
    }
}