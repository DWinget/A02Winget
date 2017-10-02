// Created by David Winget (usma94@gmail.com)
// Purpose: The purpose of this javascript is to perform quadratic equation calculations for my math page.

// Credits:
// I used the M04 assignment as a starting template for this file.

var App = {
  launch: function () {
    App.getAterm();
    App.getBterm();
    App.getCterm();
    App.DisplayResults();
  },
  getAterm: function () {
    let answer = prompt("What is the A term?", 2);
    if (answer != null) {
      $('#Aterm').html(answer);  
    }
  },
  getBterm: function () {
    let answer = prompt("What is the B term?", 4);
    if (answer != null) {
      $('#Bterm').html(answer); 
    }
  },
  getCterm: function () {
    let answer = prompt("What is the C term?", 2);
    if (answer != null) {
      $('#Cterm').html(answer);  
    }
  },
  DisplayResults: function () {
    let inputA = parseFloat($('#Aterm').html());
    let inputB = parseFloat($('#Bterm').html());
    let inputC = parseFloat($('#Cterm').html());
    let outputX = App.calculateX(inputA, inputB, inputC);
    let x1 = outputX[0];
    let x2 = outputX[1];
    if (isNaN(x1) || isNaN(x2)) {
      $("#Xterm").html("No solutions exist!");
    }
    else if (x1 === x2) {
      $("#Xterm").html(x1 + "  (Only one solution exists!)");
    }
    else $("#Xterm").html(x1  + " or X = " + x2 + "  (2 solutions exist)");
    $(".displayText2").css('display', 'inline-block');  
  },
  calculateX: function (givenA, givenB, givenC) {
    // check to ensure inputs are valid numbers
    if (isNaN(givenA) || isNaN(givenB) || isNaN(givenC)) {
      $("#Xterm").html("Error: A given term is not a number!");
      throw Error('Error: A given term is not a number!');
    }
    // calculate the possible solutions
    let discrim = App.calculate_discriminate (givenA, givenB, givenC);
    let solution1 = (Math.sqrt(discrim) - givenB) / (2 * givenA);
    let solution2 = (0 - Math.sqrt(discrim) - givenB) / (2 * givenA);
    let solutions = [solution1, solution2];
    return solutions;
  },
  calculate_discriminate: function (DisA, DisB, DisC) {
    // check discriminate to see if solutions exist
    let discriminate = Math.pow(DisB, 2) - (4 * DisA * DisC);
    if (discriminate < 0) {
      $("#Xterm").html("No solutions exist within the set of real numbers!");
      throw Error('Error: No solutions exist!');
      discriminate = NaN;
    }
    return discriminate;
  },
}
