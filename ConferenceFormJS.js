
    //removes automatic selection when user clicks on time label
  $(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");


  $(document).ready(function() {
    
    //Changes 'choice left' words
    /*$(".fieldcontainer .fieldtype-3-0 .rowright label:not([title]) .class123-labelinfo").text(function () {
        return $(this).text().replace("choices left", "slots left").replace("choice left", "slot left");
    });*/
    $(".fieldcontainer .fieldtype-3-0 .clear-choices").text(function () {
        return $(this).text().replace("x", "Clear");
    });
    $(".fieldcontainer .fieldtype-3-0 .rowright label[title]:not([title='']) .class123-labelinfo").text(function () {
        return $(this).text().replace("0 choices left", "No more seats available");
    });
    $("#row10.fieldtype-3-0 label[for="id123-control29381265_1"]").hover( function() {
        $("#row11 #brand.tooltip").css("display", "block");
    });
});

