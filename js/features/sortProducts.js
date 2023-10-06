const $ = document

const sortProductsInShopBtn = $.querySelector('.btn-sort-products-shop')
const sortProductsInShopItems = $.querySelectorAll('.item-sort-products-shop')

sortProductsInShopItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        sortProductsInShopBtn.textContent = event.target.id

        sortProductsInShopItems.forEach(item => {
            item.classList.remove('active')
        })
        event.target.classList.add('active')
    })
})