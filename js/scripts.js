

//--------------Business Logic--------------//

//Fill array with range of 1 to the inputted number while replacing numbers divisible by 3 with "ping", numbers divisible by 5 with "pong", and numbers divisible by 15 with "ping-pong", and then returning the array back into pingPong()//
var populateArray = function(input) {
  var rangeArray = [];
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
  return rangeArray;
}


//--------------User Interface Logic--------------//

//jQuery functon to pull the number the user inputted and run it through an if statement that will either output a list ranging from 1 to the inputted number with "ping" in place of numbers divisible by 3, "pong" in place of numbers divisible by 5, and "ping-pong" in place of numbers divisible by 15; or a message stating a positive integer was not inputted and to try again. If a positive integer is inputted, populateArray() will be called to create and return an array storing the range from 1 to the inputted number (including "ping", "pong", and "ping-pong"). The returned array will then use a forEach() loop to output the array to the user as an unordered list.//
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".result").hide();
    $("ul").empty();
    var inputtedNumber = parseInt($("input#number").val());
    if (inputtedNumber >= 1) {
      $("#rangeList").show();
      var rangeArray = populateArray(inputtedNumber);
      rangeArray.forEach(function(element) {
        $("ul").append("<li>" + element + "</li>");
      });
    }
    else {
      $("#nonPositiveInteger").show();
    }
  });
});
