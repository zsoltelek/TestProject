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

When('I navigate to the {string} page', (link) => {
  if (link === 'Terms and Conditions') {
    I.click(factorialPage.links.termsAndConditions);
  } else {
    I.click(factorialPage.links.privacy);
  }
});

When('I click on the "Qxf2 Services" links', () => {
  I.click(factorialPage.links.qxf2);
});

When('I use the calculator with invalid {} input', (input) => {
  factorialPage.calculate(input);
});

// Then
Then('I can see the result is "{int}"', (result) => {
  I.see(result, factorialPage.field.result);
});

Then('I can see the {string} text', (text) => {
  I.see(text);
});

Then('I can see the {string} in the browser', (url) => {
  I.seeInCurrentUrl(url)
});

Then('I am navigated to the "QA for startups" page', () => {
  I.seeInCurrentUrl('https://qxf2.com');
  I.see('QA for startups');
});

Then('I can see a warning message instead of a result', () => {
  I.see('Please enter an integer', factorialPage.field.result);
});