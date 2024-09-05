function menuShow(){
    let menuToggle = document.querySelector('.mobile_menu');
    if(menuToggle.classList.contains('open')){
        menuToggle.classList.remove('open');
    }else{
        menuToggle.classList.add('open')
    }
}