$(document).ready(function(){
    function showModal() {
        $('#myForm').show();
        $('html body').css('overflow','auto');
    }

    function closeModal() {
        $('#myForm').hide()
        }
 
    setTimeout(showModal,3000)
    
        $('.btn-cancel').click(function(){
            closeModal();
        })
    });

  let cvalue =  document.getElementById("kok")
  let cvalue1 =  document.getElementById("kok1")
  let cvalue2 =  document.getElementById("kok2")
  let cvalue3 =  document.getElementById("kok3")
  let cvalue4 =  document.getElementById("kok4")
  let cvalue5 =  document.getElementById("kok5")
  let script = document.getElementById("name")
 
  function setCookie(){
    localStorage.setItem("key", cvalue.value)
    localStorage.setItem("key1", cvalue1.value)
    localStorage.setItem("key2", cvalue2.value)
    localStorage.setItem("key3", cvalue3.value)
    localStorage.setItem("key4", cvalue4.value)
    localStorage.setItem("key5", cvalue5.value)
    console.log(cvalue1.value)
    console.log(cvalue4.value)
  }

  function getCookie(){
  let Vo =  localStorage.getItem("key")
  let V1 =  localStorage.getItem("key1")
  let V2 =  localStorage.getItem("key2")
  let V3 =  localStorage.getItem("key3")
  let V4 =  localStorage.getItem("key4")
  let V5 =  localStorage.getItem("key5")

  if((Vo != "")&&(V1 != "")&&(V2 != "")&&(V3 != "")&&(V4 != "")&&(V5 != ""))
  {
    script.removeAttribute('src')
  }
  }

  // function checkCookie(){
  //   if((Var != "")&&(V1 != "")&&(V2 != "")&&(V3 != "")&&(V4 != "")&&(V5 != ""))
  //   {
  //     script.removeAttribute('src')
  //   }
   
  // }
  // function setCookie(cname, cvalue, exdays) {
  //   const d = new Date();
  //   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  //   let expires = "expires="+d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }
  
  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let ca = document.cookie.split(';');
  //   for(let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }
  
  // function checkCookie() {
  //   let user = getCookie("username");
  //   if (user != "") {
  //     script.removeAttribute('src')
      
  //   } else {
  //    script.setAttribute('src', 'https://code.jquery.com/jquery-3.6.3.min.js')
  //     if (user != "" && user != null) {
  //       setCookie("username", user, 365);
  //     }
  //   }
  // } 
 
 