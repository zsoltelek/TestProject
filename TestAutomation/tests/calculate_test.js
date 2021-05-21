const factorialPage = require("../pages/factorialPage");

Feature('Calculator');

const { I } = inject();

Scenario('navigate to Privacy page', ({ I }) => {
    I.amOnPage('/');
    I.click(factorialPage.links.privacy);
    I.see('This is the privacy document. We are not yet ready with it. Stay tuned!');
    I.seeInCurrentUrl('/privacy');
});

Scenario('navigate to Terms and Conditions page', ({ I }) => {
    I.amOnPage('/');
    I.click(factorialPage.links.termsAndConditions);
    I.see('This is the terms and conditions document. We are not yet ready with it. Stay tuned!');
    I.seeInCurrentUrl('/terms');
});

Scenario('navigate to QA for startups page', ({ I }) => {
    I.amOnPage('/');
    I.click(factorialPage.links.qxf2);
    I.seeInCurrentUrl('https://qxf2.com/');
    I.see('QA for startups');
});

Scenario('Calculator page UI test', ({ I }) => {
    I.amOnPage('/');
    I.seeElement(factorialPage.button.calculate);
    I.seeElement(factorialPage.links.privacy);
    I.seeElement(factorialPage.links.termsAndConditions);
    I.seeElement(factorialPage.links.qxf2);
    I.seeElement(factorialPage.field.input);
    I.seeElement(factorialPage.field.result);
});