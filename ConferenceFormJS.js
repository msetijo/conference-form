/*var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/

  
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
  $(document).ready(function() {

  alert("ready");
//$(".fieldtype-3-0 .class123-radio .label-text .label-cont .class123-labelinfo").text("slots left");

});

