
  $(document).ready(function() {

  $(".fieldcontainer .fieldtype-3-0 .rowright label:not([title]) .class123-labelinfo").text(function () {
    return $(this).text().replace("choices left", "slots left").replace("choice left", "slot left");
  });
  $(".fieldcontainer .fieldtype-3-0 .rowright label[title]:not([title='']) .class123-labelinfo").text(function () {
      return $(this).text().replace("0 choices left", "session is full");
  });
  
  $(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");

});

