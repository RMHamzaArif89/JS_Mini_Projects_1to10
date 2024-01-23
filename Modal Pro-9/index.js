open = document.querySelector('.open');
close = document.querySelector('.close');
con = document.querySelector('.con')
//modal = document.querySelector('.modal')


open.addEventListener('click', function func() {
document.querySelector('.con').classList.add('con-btn')
document.querySelector('.modal').classList.remove('modal-btn')

})


close.addEventListener('click', function func() {
 document.querySelector('.modal').classList.add('modal-btn')
    document.querySelector('.con').classList.remove('con-btn')
    
})