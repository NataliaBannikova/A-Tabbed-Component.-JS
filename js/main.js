const tabby = document.querySelector('.tabby')
const tabs = tabby.querySelectorAll('.tab')
const tabContents = tabby.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        const clickedTab = tab.dataset.theme
        tabs.forEach(t => t.classList.remove('is-selected'))
        tab.classList.add('is-selected')  
        
        tabContents.forEach(c => {
            const tabContent = c.dataset.theme
            c.classList.remove('is-selected')
            if(clickedTab == tabContent) {
                c.classList.add('is-selected')
            }  
        }) 
    })
})



