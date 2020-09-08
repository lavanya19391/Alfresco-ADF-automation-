# Alfresco-ADF-automation-

Description:
- open cmd and go to the location where the file conf.js is located
- to run from Visual Basic Terminal - using command protractor conf.js

Prerequisites
- install Node
- 'npm install -g protractor' to install protractor
- 'npm install' to install the project dependencies
-  to run the selenium Webdriver in Command Prompt go to the respective path and hit webdriver-manager update
-  to start the Selenium webdriver - webdriver-manager start


Explanation:
- Since the requirement didnot ask to use any Approach like BDD, TDD I used Protractor function.
- This approach is also easy to run from single file rather than going lengthy with Steps, Page, Feature files like Cucumber.
- There is a describe function which has 4 methods to create a folder, to create folder again with same name, to cancel, to delete the folder that was created.
- There is a conf.js file which has the filename to run.
- Run from terminal of visual basic with the above mentioned command from Description.
- The purpose of this approach is to create an easily understandable and reusable method.
