const { calculate } = require("../pages/factorialPage");
const factorialPage = require("../pages/factorialPage");

const { I } = inject();

// Given
Given('I am on the calculator page', () => {
  I.amOnPage('/');
});

// When
When('I use the calculator with "{int}"', (number) => {
  factorialPage.calculate(number);
});

When('I use the calculator with invalid {} input', (input) => {
  factorialPage.calculate(input);
});

// Then
Then('I can see the result is "{}"', (result) => {
  I.see(result, factorialPage.field.result);
});

Then('I can see a warning message instead of a result', () => {
  I.see('Please enter an integer', factorialPage.field.result);
});