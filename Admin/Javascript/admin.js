var hidden = true;
var enabled =true;
function unHide(id,btn){
    var menu = document.getElementById(id);
    if(hidden==true){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
    hidden = !hidden;
}
function disable(username){
    if(enabled==true){
       if(confirm('Are you sure you want to disable this user?')==true){
           //disable
           var johnStatus = document.getElementById(username+"_Status");
           johnStatus.innerHTML="Disabled";
       }
    }
    else{
        if(confirm('Are you sure you want to enable this user?')==true){
            //disable
            var johnStatus = document.getElementById(username+"_Status");
            johnStatus.innerHTML="Enabled";
        }
    }
    enabled=!enabled;
}