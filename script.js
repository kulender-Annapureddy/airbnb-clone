// for menu box 
function showform(){
    var menubox = document.getElementById("menubox");

    if(menubox.style.display === "none") {
        menubox.style.display ="block";
    } else {
        menubox.style.display = "none";
    }
}

//for login and signup
function showpage(){
    var signpage =document.getElementById("signpage");

    if(signpage.style.display === "none") {
        signpage.style.display = "block";
    } else {
        signpage.style.display = "none";
    }
}
 // for filter
 function filterpage() {
    var fltpeg =document.getElementById("fltpeg");

    if(fltpeg.style.display === "none") {
        fltpeg.style.display = "block";
    } else {
        fltpeg.style.display = "none";
    }
 }
