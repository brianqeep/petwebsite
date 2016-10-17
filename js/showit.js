$(document).ready(function() {

  $("button#white").click(function(){
    $("body").css({"background-color": "#fff"});
    $("h1").css({"color": "#000"});
    $("p").css({"color": "#000"});
  });
  $("button#black").click(function(){
    $("body").css({"background-color": "black"});
    $("h1").css({"color": "#fff"});
    $("p").css({"color": "#fff"});
  });
});
