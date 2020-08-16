//navigation open/close
$('.burger').click(function(){
  $('.btns').toggleClass("hide");
});

//disable extended opening hours
  $('#styled-checkbox-nonstop').click(function(){
    $('.day').toggleClass("disable");
  });

//add fuel
  $("#add-fuel").click(function () {
    $("#fuel-container").append('<section class="fuel-row"> <div class="fuel-column"> <h6>Název</h6> <select class="custom-select" id="inputGroupSelect01"> <option>Vyberte...</option> <option>Nafta</option> <option>Nafta zimní</option> <option>Nafta adi</option> <option>Nafta</option> <option>Nafta</option> <option>Nafta aditiva</option> <option>Nafta Bio</option> <option>Nafta Syntetic</option> <option>Natural 95</option> <option>Natural 95 adi</option> <option>Natural 98</option> <option>Natural 98 adi</option> <option>Natural 100+</option> <option>Ethanol 85</option> <option>LPG</option> <option>CNG</option> <option>LNG</option> <option>H2</option> <option>AdBlue</option> <option>Elektřina</option> </select> </div> <div class="fuel-column"> <h6>Číslo</h6> <input class="form-control form-control-lg" type="tel" placeholder=""> </div> <div class="delete-column"> <h6>Smazat</h6> <div class="delete-img" id="delete-fuel"></div> </div> </section>');
  });

//add service
$("#add-service").click(function () {
  $("#services-wrapper").append(' <section class="service" id="service"><div class="column-left"><div class="forms-top"><div class="form-one"><h6>Druh služby</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div><div class="form-two"><h6>ID</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div></div><div class="service-photos"><form action="/file-upload" class="dropzone"></form> <form action="/file-upload" class="dropzone"></form> <form action="/file-upload" class="dropzone"></form> </div> </div> <div class="column-right"> <h6>Popis služby</h6> <ul class="nav nav-tabs" id="myTab" role="tablist"> <li class="nav-item"> <a style="border: none; color: #1C314D;" class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Čeština</a> </li> <li class="nav-item"> <a style="border: none; color: #1C314D;" class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Slovenština</a> </li> <li class="nav-item"> <a style="border: none; color: #1C314D;" class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Angličtina</a> </li> <li class="nav-item"> <a style="border: none; color: #1C314D;" class="nav-item nav-link" id="nav-deutsch-tab" data-toggle="tab" href="#nav-deutsch" role="tab" aria-controls="nav-deutsch" aria-selected="false">Němčina</a> </li> </ul> <div class="tab-content" id="myTabContent"> <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div class="info input-group-prepend"> <textarea class="form-control" placeholder="Vyplňte..."></textarea> </div></div> <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><div class="info input-group-prepend"> <textarea class="form-control" placeholder="Tu vyplňte..."></textarea> </div></div> <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div class="info input-group-prepend"> <textarea class="form-control" placeholder="Fill in here..."></textarea> </div></div> <div class="tab-pane fade" id="nav-deutsch" role="tabpanel" aria-labelledby="nav-contact-tab"> <div class="info input-group-prepend"> <textarea class="form-control" placeholder="Hier ausfüllen"></textarea> </div> </div> </div> </div> <div class="delete-column"> <div class="delete-img" id="delete-service"></div> </div> </section>');
});

//remove service
$("body").on("click", ".delete-img", function() {
  $(this).closest('section').css("display", "none");
});

//pause remove
$('#pause-checkbox-one').click(function() {
  $('.pause-input-one').toggleClass("disable")
  $("#pondeli").toggleClass("smaller");
})
$('#pause-checkbox-two').click(function() {
  $('.pause-input-two').toggleClass("disable")
  $("#utery").toggleClass("smaller");
})
$('#pause-checkbox-three').click(function() {
  $('.pause-input-three').toggleClass("disable")
  $("#streda").toggleClass("smaller");
})
$('#pause-checkbox-four').click(function() {
  $('.pause-input-four').toggleClass("disable")
  $("#ctvrtek").toggleClass("smaller");
})
$('#pause-checkbox-five').click(function() {
  $('.pause-input-five').toggleClass("disable")
  $("#patek").toggleClass("smaller");
})
$('#pause-checkbox-six').click(function() {
  $('.pause-input-six').toggleClass("disable")
  $("#sobota").toggleClass("smaller");
})
$('#pause-checkbox-seven').click(function() {
  $('.pause-input-seven').toggleClass("disable")
  $("#nedele").toggleClass("smaller");
})

//method click entire element	
$(document).ready(function() {
  $(".method").click(function() {
      var checkBoxes = $(this).find("input");
      checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  });                 
});