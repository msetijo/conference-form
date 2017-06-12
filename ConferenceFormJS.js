

var script = document.createElement('script');
script.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


  $(document).ready(function() {

    //Changes 'choice left' words
  $(".fieldcontainer .fieldtype-3-0 .rowright label:not([title]) .class123-labelinfo").text(function () {
    return $(this).text().replace("choices left", "slots left").replace("choice left", "slot left");
  });
  $(".fieldcontainer .fieldtype-3-0 .rowright label[title]:not([title='']) .class123-labelinfo").text(function () {
      return $(this).text().replace("0 choices left", "session is full");
  });
  
    //removes automatic selection when user clicks on time label
  $(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");

  $( function() {
    $( document ).tooltip();
  } );
});

