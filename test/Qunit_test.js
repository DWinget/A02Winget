// Created by David Winget (usma94@gmail.com)
// Purpose: The purpose of this javascript is to test the application code. 
// It uses QUnit, a unit testing library for JavaScript. 
// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// Credits: 
// I used the template from the M03 assignment 


QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing the App2.calculateDigit function with six sets of inputs', function (assert) {
    assert.equal(App2.calculateDigit(1234), 8, "works with positive integer");
    assert.equal(App2.calculateDigit(-52), 2, "works with negative integer");
    assert.equal(App2.calculateDigit(1827), 9, "works with 0 modulus");
    assert.throws(function () {App2.calculateDigit(1.2345); }, new Error('Error: Not all digits are integers!'), "passing a floating point correctly raises an Error");
    assert.throws(function () {App2.calculateDigit(); }, new Error('Error: Not all digits are integers!'), "passing a null correctly raises an Error");
    assert.throws(function () {App2.calculateDigit(h); }, Error, "passing a non-number correctly raises an Error");
});