//--------------Business Logic--------------//

//ForEach loop to put each array element as a list item
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
  else {
    for (var index = 1; index <= input; index += 1) {
      if ((index % 15) === 0) {
        rangeArray.push("ping-pong");
      }
      else if ((index % 5) === 0) {
        rangeArray.push("pong");
      }
      else if ((index % 3) === 0) {
        rangeArray.push("ping");
      }
      else {
        rangeArray.push(index);
      }
    }
    var listArray = arrayToList(rangeArray);
    $("#rangeList").show();
    return listArray;
  }
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
