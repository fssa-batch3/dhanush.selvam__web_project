const toggleButton = document.getElementsByClassName('toggle-button')[0]
const link_container = document.getElementsByClassName('link_container')[0]

toggleButton.addEventListener('click', () => {
    link_container.classlist.toggle('active')
})