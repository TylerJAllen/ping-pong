//--------------Business Logic--------------//

//Empty <ul> and populate with new range
var arrayToList = function(input) {
  input.forEach(function(element) {
    $("ul").append("<li>" + element + "</li>");
  });
}

//Main function
var pingPong = function(input) {
  var rangeArray = [];
  $("ul").empty();
  $(".result").hide();
  if (input <= 0 || isNaN(input) === true) {
    $("#nonPositiveInteger").show();
  }
  for (var index = 1; index <= input; index += 1) {
    rangeArray.push(index);
  }
  var listArray = arrayToList(rangeArray);
  $("#rangeList").show();
  return listArray;
}


//--------------User Interface Logic--------------//
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#number").val());
    var result = pingPong(inputtedNumber);
    $("#result").text(result);
  });
});
