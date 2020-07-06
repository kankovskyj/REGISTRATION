//nav active/inactive toggle
$('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
      $(mainParent).addClass('active');
      $("#active-state").text("Aktivní");
    } else {
      $(mainParent).removeClass('active');
      $("#active-state").text("Neaktivní");
    }
  });
//disable extended opening hours
  $('#styled-checkbox-nonstop').click(function(){
    $('.day').toggleClass("disable");
  });

//add fuel
  $("#add-fuel").click(function () {
    $("#fuel-container").append('<section class="fuel-row"><div class="fuel-column"><h6>Název</h6><select class="form-control form-control-lg"><option>Vyberte...</option><option>Diesel</option><option>Benzin</option></select></div><div class="fuel-column"><h6>Číslo</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div><div class="delete-column"><h6>Smazat</h6><div class="delete-img" id="delete-fuel"></div></div></section>');
  });

//add service
 $("#add-service").click(function () {
  $("#services-wrapper").append('<section class="service" id="service"><div class="column-left"><div class="forms-top"><div class="form-one"><h6>Druh služby</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div><div class="form-two"><h6>ID</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div></div><div class="service-photos"><form action="/file-upload" class="dropzone" id="service-dropzone"></form><form action="/file-upload" class="dropzone" id="service-dropzone"></form><form action="/file-upload" class="dropzone" id="service-dropzone"></form></div></div><div class="column-right"><h6>Druh služby</h6><div class="info input-group-prepend"><textarea class="form-control" placeholder="Vyplňte..."></textarea></div></div></section>');
});

//remove service
$("body").on("click", ".delete-img", function() {
  $(this).closest('section').remove();
});

$("body").on("click", "#add-service", function() {
  //alert("1");
  if($('#service')){  
    //alert("it be here"); //DROPZONE.JS NEPRIDAVA DROPZONE PRO NOVE PRIDANE ELEMENTY, TREBA FIX
    }
});

