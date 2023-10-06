const $ = document

const selectColor = $.querySelectorAll('.select-color .color')

selectColor.forEach(color => {
    color.addEventListener('click', event => {
        selectColor.forEach(color => color.classList.remove('selected-color'))
        color.classList.remove('selected-color')
        event.target.classList.add('selected-color')
    })
})