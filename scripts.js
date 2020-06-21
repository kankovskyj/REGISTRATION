//$('input.cb-value').prop("checked", true);
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
