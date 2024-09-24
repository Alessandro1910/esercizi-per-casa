const $buttons = document.querySelectorAll('.tab__header-btn');

$buttons.forEach(($button) => {
    $button.addEventListener('click', (event) => {
        document.querySelector('.btn__active').classList.remove('btn__active')
        event.target.classList.add('btn__active')

        const boxId = `#box-${event.target.id}`;
        document.querySelector('.tab__open').classList.remove('tab__open')
        document.querySelector(boxId).classList.add('tab__open')
    })
})

