$(function() {
	// loading data from app.php to index.html via jquery->ajax
  $('.popup').click(function(){

         $.ajax({
          url: 'curl.php',
          type: 'POST',
          success: function(data){
            // creation of variables for html
            var $city, $temp, $main, $humidity;
            $city = data.slice(0,6);
            $temp = Math.round(data.slice(6, 12)/273.16);
            $maind = data.slice(12,19);
            $humidity = data.slice(19,21);
            //insert the varibles with textes into popup
            $(".city").html($city);
            $(".temp").html($temp + " C");
            $(".icon").html("<img src=" + $maind + ".png>");
            $(".misc").html("humidity: " + $humidity + " %");
            
            return data;
           }, 
          error: function(){
                errorFunction();
          }
       });
    return false;
  })
    // function for ajax errors
    function errorFunction(errorThrown){
      alert("error");
    }
    // show/hide popup by clicking the line, the popup and the cross sign in html 
    $(".popup").click(function(){
      $(".popuptext").toggleClass("show");
      $(this).toggleClass("hidden");
    });


});