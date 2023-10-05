const loaderPage = document.querySelector('.loader')

window.addEventListener('load', () => {
    loaderPage.classList.add('hidden-loader')
    document.body.classList.remove('hidden-content')
})