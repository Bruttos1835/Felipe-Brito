var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
     item.classList.remove('ativo')

     )

     this.classList.add('ativo')

}

menuItem.forEach((item)=>
item.addEventListener('click', selectlink)
)

//expandir o menu


var btnexp = document.querySelector('#btn-exp')
var menuside = document.querySelector('.menu-lateral')


btnexp.addEventListener('click', function(){
    menuside.classList.toggle('expandir')
})