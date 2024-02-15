const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const menus = document.querySelectorAll('.toggle_list')


const toggleMenu = () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
  menus.forEach(menu => menu.classList.toggle('active'))
}


menuToggle.addEventListener('click', toggleMenu)
menus.forEach(menu => menu.addEventListener('click', toggleMenu))