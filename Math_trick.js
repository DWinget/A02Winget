// Created by David Winget (usma94@gmail.com)
// Purpose: The purpose of this javascript is to perform calculations for my math page trick.

// Credits:
// I used the M04 assignment as a starting template for this file.
// The valid number check in function calculateDigit came from the slides in U03.

var App2 = {
  launch: function () {
    App2.ResetText();
    App2.getDigits();
    App2.DisplayResult();
  },
  ResetText: function () {
    // Reinitialize hidden text
    $(".displayText3").css('display', 'none');
    $(".displayText4").css('display', 'none');
    $(".displayText5").css('display', 'none');
    $(".displayText6").css('display', 'none');
    $(".displayText7").css('display', 'none');
    $(".displayText8").css('display', 'none');
    $(".displayText").css('display', 'none');
    $("#circled_digit").css('display', 'none');
  },
  getDigits: function () {
    // Get input
    let answer = prompt("What digits did you not circle (in any order)?", 3323);
    if (answer != null) {
      $('#userdigits').html(answer);  
    }
  },
  DisplayResult: function () {
    let inputdigits = parseInt($('#userdigits').html());
    let missing_digit = App2.calculateDigit(inputdigits);
    if (isNaN(missing_digit)) {
      $("#circled_digit").html("??? Error: Not all digits are integers!");
    }
    setTimeout(function() {$(".displayText3").css('display', 'inline-block');},500);
    setTimeout(function() {$(".displayText4").css('display', 'inline-block');},1500);
    setTimeout(function() {$(".displayText5").css('display', 'inline-block');},4000);
    setTimeout(function() {$(".displayText6").css('display', 'inline-block');},7000);
    setTimeout(function() {$(".displayText7").css('display', 'inline-block');},9000);
    setTimeout(function() {$(".displayText8").css('display', 'inline-block');},11500);
    setTimeout(function() {$(".displayText").css('display', 'inline-block');},12000);
    setTimeout(function() {$("#circled_digit").html(missing_digit);},12000);
    setTimeout(function() {$("#circled_digit").css('display', 'inline-block');},12000);
  },
  calculateDigit: function (givendigits) {
    // check to ensure inputs are valid numbers
    if (!(/^(\-|\+)?([0-9]+|Infinity)$/.test(givendigits))) {
      $("#circled_digit").html("??? Error: Not all digits are integers!");
      $("#circled_digit").css('display', 'inline-block');
      throw Error('Error: Not all digits are integers!');
    }
    // calculate the missing digit
    let solution = 9 - Math.abs(givendigits % 9);
    if (solution == 0){
      solution = 9;
    }
    return solution;
  },
}
