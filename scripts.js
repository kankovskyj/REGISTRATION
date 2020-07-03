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
//remove fuel
$("body").on("click", ".delete-img", function() {
  $(this).closest('section').remove();
});

 
