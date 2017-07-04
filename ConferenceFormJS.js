
    //removes automatic selection when user clicks on time label
  $(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");


  $(document).ready(function() {
    
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
    // Use any selector
    $("head").append(s);

    //Changes 'choice left' words
  /*$(".fieldcontainer .fieldtype-3-0 .rowright label:not([title]) .class123-labelinfo").text(function () {
    return $(this).text().replace("choices left", "slots left").replace("choice left", "slot left");
  });*/
  $(".fieldcontainer .fieldtype-3-0 .rowright label[title]:not([title='']) .class123-labelinfo").text(function () {
      return $(this).text().replace("0 choices left", "No more seats available");
  });
  

});

