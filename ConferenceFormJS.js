//removes automatic selection when user clicks on time label
$(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");

$(document).ready(function() {

  /*$(".fieldcontainer .fieldtype-3-0 .rowright label:not([title]) .class123-labelinfo").text(function () {
      return $(this).text().replace("choices left", "slots left").replace("choice left", "slot left");
  });*/
   
   $("#id123-control30730799").attr("placeholder", "+12 345-567-8901");
   $("#id123-control29200357").attr("placeholder", "example@ericsson.com");
  
  $(".fieldcontainer .fieldtype-3-0 .clear-choices").text(function() {
    return $(this).text().replace("x", "Clear");
  });

  //Changes 'choices left' words
  $(".fieldcontainer .fieldtype-3-0 .rowright label[title]:not([title='']) .class123-labelinfo").text(function() {
    return $(this).text().replace("0 choices left", "No more seats available");
  });
  
  function showTooltip(rowNum,forName,idName){
  	$(rowNum+" label[for='"+forName+"'] + "+idName+".tooltip").css("display", "block");
  }
  function hideTooltip(rowNum,forName,idName){
  	$(rowNum+" label[for='"+forName+"'] + "+idName+".tooltip").css("display", "none");
  }
  
  /* DAY 1 09:45-10:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381265_0'] ")
  .after("<div class='tooltip' id='wcd'><span class='tooltip-text'><h3>WCD & GF / DevOps</h3><h4>Jonas Wigander & Torsten Dinsing</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381265_1'] ")
  .after("<div class='tooltip' id='brand'><span class='tooltip-text'><h3>Brand</h3><h4>Rolando Ramirez</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381265_2'] ")
  .after("<div class='tooltip' id='xaasFund'><span class='tooltip-text'><h3>XaaS Fundamentals</h3><h4>Andreas Havdrup</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  /* DAY 1 10:45-11:45 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381412_0'] ")
  .after("<div class='tooltip' id='services'><span class='tooltip-text'><h3>Services View</h3><h4>Speaker Name</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381412_1'] ")
  .after("<div class='tooltip' id='industrialDesign'><span class='tooltip-text'><h3>Industrial Design</h3><h4>Andreas Safstrom & team</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381412_2'] ")
  .after("<div class='tooltip' id='gtm'><span class='tooltip-text'><h3>GTM</h3><h4>Andy Stacy</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  /* DAY 1 13:00-14:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381481_0'] ")
  .after("<div class='tooltip' id='services'><span class='tooltip-text'><h3>TMO / Mana Co-Create</h3><h4>Fernando Garcia-Sanz</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381481_1'] ")
  .after("<div class='tooltip' id='designExploration'><span class='tooltip-text'><h3>Design Exploration</h3><h4>Various Speakers</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381481_2'] ")
  .after("<div class='tooltip' id='cnaas'><span class='tooltip-text'><h3>CNaaS / ENMaaS</h3><h4>Dag Johansson I / Folke Anger</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  /* DAY 1 15:00-16:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381510_0'] ")
  .after("<div class='tooltip' id='stateDevOps'><span class='tooltip-text'><h3>State of DevOps</h3><h4>Michael Olson</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381510_1'] ")
  .after("<div class='tooltip' id='userFocus'><span class='tooltip-text'><h3>User Focus</h3><h4>Various Speakers</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381510_2'] ")
  .after("<div class='tooltip' id='portal'><span class='tooltip-text'><h3>Portal Demo</h3><h4>Speaker Name</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  
  /********************* DAY 2 ********************/
  
  
  /* DAY 2 09:15-10:15 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381606_0'] ")
  .after("<div class='tooltip' id='devsecops'><span class='tooltip-text'><h3>DevSecOps</h3><h4>Stephane Dault</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381606_1'] ")
  .after("<div class='tooltip' id='wow1'><span class='tooltip-text'><h3>Ways of Working</h3><h4>Various Speakers</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381606_2'] ")
  .after("<div class='tooltip' id='mediaFirst'><span class='tooltip-text'><h3>Media First</h3><h4>Mark Hydar</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  /* DAY 2 10:45-11:45 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381634_0'] ")
  .after("<div class='tooltip' id='serviceability'><span class='tooltip-text'><h3>Serviceability</h3><h4>Didem Pariltay</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381634_1'] ")
  .after("<div class='tooltip' id='wow2'><span class='tooltip-text'><h3>Ways of Working</h3><h4>Various Speakers</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381634_2'] ")
  .after("<div class='tooltip' id='toolingPortals'><span class='tooltip-text'><h3>Tooling & Portals</h3><h4>Speaker Name</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  /* DAY 2 13:00-14:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381729_0'] ")
  .after("<div class='tooltip' id='internalStateDevOps'><span class='tooltip-text'><h3>Internal State of DevOps</h3><h4>Mark Hydar</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381729_1'] ")
  .after("<div class='tooltip' id='prodRelated1'><span class='tooltip-text'><h3>Products Related</h3><h4>Various Speakers</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29381729_2'] ")
  .after("<div class='tooltip' id='cloud'><span class='tooltip-text'><h3>Cloud Infrastructure</h3><h4>Martin Frojd</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");

  /* DAY 2 15:00-16:00 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29482222_0'] ")
  .after("<div class='tooltip' id='enm'><span class='tooltip-text'><h3>ENM / Swisscom</h3><h4>Speaker Name</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29482222_1'] ")
  .after("<div class='tooltip' id='prodRelated2'><span class='tooltip-text'><h3>Products Related</h3><h4>Various Speakers</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  $(".fieldtype-3-0 label[for='id123-control29482222_2'] ")
  .after("<div class='tooltip' id='dcp'><span class='tooltip-text'><h3>DCP / Adaptive Inventory</h3><h4>Beauford Atwater / Ioannis Fikouras</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <a href='#'>Read More</a></span></div>");
  
  
  
  $('.class123-label').hover(function() {
      //console.log($(e.target));
      //console.log(".fieldtype-3-0 label[for='"+$(this).attr("for")+"'] + .checkboxSeperator .tooltip");
      
      if(!($(this).attr('title'))){
        $(".fieldtype-3-0 label[for='"+$(this).attr('for')+"'] + .tooltip .tooltip-text").css({
                                                                                                "visibility":"visible",
                                                                                              });
        $('.tooltip .tooltip-text').on('mouseover',function(){
            $(this).css({
                "visibility": "visible"
            });
        });
        $('.tooltip .tooltip-text').on('mouseout',function(){
            $(this).css({
                "visibility": "hidden"
            });
        });
      }
  }, function() {
      $(".fieldtype-3-0 label[for='"+$(this).attr('for')+"'] + .tooltip .tooltip-text").css("visibility","hidden");
  });

  /*$(document).on('mouseover', 'span', function(e) {
    console.log($(e.target).attr('class'));
  }, function() {
    
  });*/

});
