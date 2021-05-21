Automated tests for http://qainterview.pythonanywhere.com 
----------------------------------------------------------------------

CodeceptJS

Installation: 
* npm install

Folders/files:
* Bugs
* Features: features in Gherkin
* StepDefinitions: steps for the feature scenarios
* Pages: contains page object file
* Tests: UI related tests

Scripts:
* "npm run codeceptjs:features": runs the feature files with reporting results
* "npm run codeceptjs:tests": runs the UI related tests with reporting results
* Mochawesome reports are located after test runs in the Report folder

----------------------------------------------------------------------

Postman
* Import the "postman_collection.json" from "TestAutomation/test_data" folder to Postman as a new collection.
* Run collection using the "data.json" from "TestAutomation/test_data" folder as data file