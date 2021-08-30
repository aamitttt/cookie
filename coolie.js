
function set()
{
    let key =document.getElementById("ki").value;
    let val =document.getElementById("vi").value;
    

        
 document.cookie = key + "=" + val;

 
      
    
}

function delet() {
    let name =document.getElementById("di").value; 
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function get() {
    let cname =document.getElementById("ki2").value;
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.write(c.substring(name.length, c.length));
      }
    }
    document.write("");
  }