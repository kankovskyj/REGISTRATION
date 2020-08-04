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
    $("#fuel-container").append('<section class="fuel-row"><div class="fuel-column"><h6>Název</h6><select class="custom-select" id="inputGroupSelect01"><option>Vyberte...</option><option>Diesel</option><option>Benzin</option></select></div><div class="fuel-column"><h6>Číslo</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div><div class="delete-column"><h6>Smazat</h6><div class="delete-img" id="delete-fuel"></div></div></section>');
  });

//add service
 $("#add-service").click(function () {
  $("#services-wrapper").append('<section class="service" id="service"><div class="column-left"><div class="forms-top"><div class="form-one"><h6>Druh služby</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div><div class="form-two"><h6>ID</h6><input class="form-control form-control-lg" type="tel" placeholder=""></div></div><div class="service-photos"></div></div><div class="column-right"><h6>Popis služby</h6> <ul class="nav nav-tabs" id="myTab" role="tablist"><li class="nav-item"><a style="border: none; color: #1C314D;" class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Čeština</a></li><li class="nav-item"><a style="border: none; color: #1C314D;" class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Slovenčina</a>            </li><li class="nav-item"><a style="border: none; color: #1C314D;" class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">English</a></li></ul><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div class="info input-group-prepend"><textarea class="form-control" placeholder="Vyplňte..."></textarea></div></div>            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><div class="info input-group-prepend"><textarea class="form-control" placeholder="Tu vyplňte..."></textarea></div></div>            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div class="info input-group-prepend"><textarea class="form-control" placeholder="Fill in here..."></textarea></div></div></div></div><div class="delete-column"><div class="delete-img" id="delete-service"></div></div></section>');
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


$("div#myId").dropzone({ url: "/file/post" });
