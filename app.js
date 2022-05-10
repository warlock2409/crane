$(document).ready(function(){
    // alert("ready");
    
    $("#filter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#list #item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    $(".slide").click(function(){
        console.log("clicked");
        $(".left").toggleClass("hide");
    })
   
  });