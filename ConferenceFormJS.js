//removes automatic selection when user clicks on time label
$(".fieldcontainer .fieldtype-3-0 .rowleft label").removeAttr("for");
$(".fieldcontainer .fieldtype-3-0 .rowup label").removeAttr("for");

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
  
    /* DAY 1 09:45-10:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381265_0'] ")
  .after("<div class='thumbnail' id='security'><h3>Keynote & Big Picture on Security and DevOps</h3><h4>Ari Jouppila / Andreas Ljunggren</h4>Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381265_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381265_1'] ")
  .after("<div class='thumbnail' id='brand'><h3>Keynote & Brand</h3><h4>Ari Jouppila / Rolando Ramirez</h4> Updates on Brand Design Work 2.0. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381265_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381265_2'] ")
  .after("<div class='thumbnail' id='xaasFund'><h3>Keynote & XaaS Fundamentals</h3><h4>Ari Jouppila / Andreas Havdrup</h4> This session will cover the fundamentals and characteristics of as-a-service, and in what business settings that as-a-service will work. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381265_2'] .class123-labelinfo").text(" XaaS Track");

  /* DAY 1 10:45-11:45 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381412_0'] ")
  .after("<div class='thumbnail' id='devsecops'><h3>DevSecOps</h3><h4>Stephane Dault</h4> Explore how Security automation is enabling DevSecOps. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381412_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381412_1'] ")
  .after("<div class='thumbnail' id='industrialDesign'><h3>Industrial Design</h3><h4>Andreas Säfström & team</h4> Updates on hardware design and related industrial work. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381412_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381412_2'] ")
  .after("<div class='thumbnail' id='gtm'><h3>Go-to-Market</h3><h4>Andy Stacy</h4> This speech will provide an overview and discussion of XaaS commercial structure and its implications on sales and contracting.  <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381412_2'] .class123-labelinfo").text(" XaaS Track");

  /* DAY 1 13:00-14:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381481_0'] ")
  .after("<div class='thumbnail' id='gfWCD'><h3>DevOps Strategy</h3><h4>Jonas Wigander / Torsten Dinsing</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381481_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381481_1'] ")
  .after("<div class='thumbnail' id='designExploration'><h3>Design Exploration</h3><h4>Didier Chincholle / Tosh Sano / Silky Sethi</h4> Updates on hardware design and related industrial work. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381481_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381481_2'] ")
  .after("<div class='thumbnail' id='cnaas'><h3>CNaaS / ENMaaS</h3><h4>Dag Johansson I / Neil Garnett</h4> Follow the ENM and Core Network journeys in transforming to the as-a-Service business and delivery model. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381481_2'] .class123-labelinfo").text(" XaaS Track");

  /* DAY 1 15:00-16:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381510_0'] ")
  .after("<div class='thumbnail' id='devopsCustomers'><h3>DevOps and Our Customers</h3><h4>Fernando Garcia-Sanz / Steve Carter / Roland Knight</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381510_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381510_1'] ")
  .after("<div class='thumbnail' id='userFocus'><h3>User Focus</h3><h4>Andreas Johansson / Virag Benke / Aoife McTague</h4> User-centered design experiences from our teams. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381510_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381510_2'] ")
  .after("<div class='thumbnail' id='tools'><h3>Tooling & Portals</h3><h4>Simon Robillard & Team</h4> We will present the common tools landscape that all Ericsson XaaS solutions can benefit from, and how they can accelerate a successful go-to-market. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381510_2'] .class123-labelinfo").text(" XaaS Track");

  
  /********************* DAY 2 ********************/
  
  
  /* DAY 2 09:15-10:15 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381606_0'] ")
  .after("<div class='thumbnail' id='devopsCulture'><h3>Culture and DevOps</h3><h4>Riku Vastelo / Gustavo Tanoni</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381606_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381606_1'] ")
  .after("<div class='thumbnail' id='wow1'><h3>Ways of Working</h3><h4>Misi Racz / Ivy Li</h4> UX tools and methods we used at Ericsson. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381606_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381606_2'] ")
  .after("<div class='thumbnail' id=''><h3>From NOC to SOC</h3><h4>Morgan L</h4> The presentation will focus on how we build what can be seen as one of the first XaaS service operations in a Global Service Centers. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381606_2'] .class123-labelinfo").text(" XaaS Track");

  /* DAY 2 10:45-11:45 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381634_0'] ")
  .after("<div class='thumbnail' id='devopsUx'><h3>UX and DevOps</h3><h4>Andreas Johansson / Mohammed Issa</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381634_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381634_1'] ")
  .after("<div class='thumbnail' id='wow2'><h3>Ways of Working</h3><h4>Nils-Erik Gustafsson / Xiaoping Li</h4> UX tools and methods we used at Ericsson. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381634_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381634_2'] ")
  .after("<div class='thumbnail' id='serviceability'><h3>Serviceability</h3><h4>Didem Pariltay</h4> What do we need to consider when we are designing a SaaS solution? What does SaaS - Serviceability mean? <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381634_2'] .class123-labelinfo").text(" XaaS Track");

  /* DAY 2 13:00-14:30 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29381729_0'] ")
  .after("<div class='thumbnail' id='devopsPractice'><h3>DevOps with Swisscom</h3><h4>Nils Henstrom</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381729_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29381729_1'] ")
  .after("<div class='thumbnail' id='prodRelated1'><h3>Products Related</h3><h4>Onur Kurt / Ranjani Balakrishnan / Patrik Algotsson</h4> UX design on Ericsson products. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381729_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29381729_2'] ")
  .after("<div class='thumbnail' id='cloud'><h3>Cloud Infrastructure</h3><h4>Martin Frojd</h4> An overview of the different product work that has lead up to the XaaS platform, and what the key requirements and success criteria we see for the platform being built. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29381729_2'] .class123-labelinfo").text(" XaaS Track");

  /* DAY 2 15:00-16:00 Tooltip */
  $(".fieldtype-3-0 label[for='id123-control29482222_0'] ")
  .after("<div class='thumbnail' id='devopsAction'><h3>DevOps in Action & Keynote</h3><h4>Per Petterson / Steve Carter / Darlene Wilson</h4> Fusce laoreet est nec ipsum mattis, elementum posuere felis faucibus. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29482222_0'] .class123-labelinfo").text(" DevOps Track");
  $(".fieldtype-3-0 label[for='id123-control29482222_1'] ")
  .after("<div class='thumbnail' id='prodRelated2'><h3>Products Related & Keynote</h3><h4>Shivatheja Venkata / Britt-Marie Lindberg / Didier Chincholle</h4> UX design on Ericsson products. <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29482222_1'] .class123-labelinfo").text(" UX Track");
  $(".fieldtype-3-0 label[for='id123-control29482222_2'] ")
  .after("<div class='thumbnail' id='dcp'><h3>DCP / AI & Keynote</h3><h4>Beauford Atwater / Ioannis Fikouras / Jason Hoffman A</h4> Follow the DCP and Adaptive Inventory journeys in transforming to the as-a-Service business and delivery model.  <div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Read More</a></div></div>");
  $(".fieldtype-3-0 label[for='id123-control29482222_2'] .class123-labelinfo").text(" XaaS Track");
  
  $('.clear-choices').click(function() {
		$(this).parent().parent().parent().parent().removeClass("focus");
	});
	
$("input:radio:checked").each(function() {
	$('#' + $(this).parent().parent().parent().parent().parent().attr("id") + ' .clear-choices').css("display", "inline");  
});

  $('.class123-threecol').hover(function() {
      //console.log($(e.target));
      //console.log(".fieldtype-3-0 label[for='"+$(this).attr("for")+"'] + .checkboxSeperator .tooltip");
      
      if(!($(this).attr('title'))){
        
        $('.thumbnail').on('mouseover',function(){
            $(this).css({
                "visibility": "visible"
            });
        });
        $('.thumbnail').on('mouseout',function(){
            $(this).css({
                "visibility": "hidden"
            });
        });
      }
  });
  
  $('#row4').after("<div class='dayLink'><div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx' target='_blank'>Day 1 Schedule</a></div>");
  $('#row14').after("<div class='dayLink'><div class='link'><a href='https://ericsson.sharepoint.com/sites/customer_experience/cxproconference/SitePages/program.aspx?day=wednesday' target='_blank'>Day 2 Schedule</a></div>");
  
   $('#fieldcontainer25').after("<div class='message'>A confirmation email will be sent to you.</div>");

  /*$(document).on('mouseover', 'span', function(e) {
    console.log($(e.target).attr('class'));
  }, function() {
    
  });*/

});
