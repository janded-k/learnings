 const accordion = document.getElementsByClassName('content-container')

 for(i = 0; i < accordion.length; i++) {
     accordion[i].addEventListener('click', function(){
         this.classList.toggle('active');
     })
 };


 sessionStorage.setItem('Need', 'Freedom')
console.log( sessionStorage.getItem('Need'))
sessionStorage.removeItem('Need')

document.cookie = "name=kyle"