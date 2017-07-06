//removes automatic selection when user clicks on time label
$(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");

$(document).ready(function() {

  /*$(".fieldcontainer .fieldtype-3-0 .rowright label:not([title]) .class123-labelinfo").text(function () {
      return $(this).text().replace("choices left", "slots left").replace("choice left", "slot left");
  });*/
    
  //Changes 'choice left' words
  $(".fieldcontainer .fieldtype-3-0 .clear-choices").text(function() {
    return $(this).text().replace("x", "Clear");
  });
  $(".fieldcontainer .fieldtype-3-0 .rowright label[title]:not([title='']) .class123-labelinfo").text(function() {
    return $(this).text().replace("0 choices left", "No more seats available");
  });
  $("#row11 .tooltip").css("display", "none");
  
  function showTooltip(rowNum,idName){
  	$("\""rowNum" "idName".tooltip\"").css("display", "block");
  }
  function hideTooltip(rowNum,idName){
  	$("\""rowNum" "idName".tooltip\"").css("display", "none");
  }
  
  $("#row10.fieldtype-3-0 label[for='id123-control29381265_0']").hover(function() {
    showTooltip("#row11","#wcd");
  }, function() {
    hideTooltip("#row11","#wcd");
  });

});
