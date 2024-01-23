open=document.querySelector('.open')

nav = document.getElementById('nav-side')
console.log(nav)

open.addEventListener('click', function nav_open() {
    document.getElementById('nav-side').style.display = 'block';
    document.getElementById('op').style.opacity='0.5'
  

})

function nav_close() {
    document.getElementById('nav-side').style.display = 'none';
    document.getElementById('op').style.opacity='1'
}