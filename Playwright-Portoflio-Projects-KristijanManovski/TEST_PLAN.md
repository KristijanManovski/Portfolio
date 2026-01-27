Test Plan – SauceDemo E-commerce Application

1. Purpose

This test plan defines the testing approach for the SauceDemo web application. The objective is to validate the core e-commerce functionality and ensure that critical user flows such as login, product selection, cart management, and checkout work as expected from an end-user perspective.

2. Scope of Testing

In Scope

User authentication (valid and invalid credentials)
Product listing and product interaction
Add and remove items from the shopping cart
Checkout process (user information, order review, order completion)
Order confirmation and success message validation

Out of Scope

Performance and load testing
Security and penetration testing
Backend and API testing
Cross-browser testing beyond Chromium

3. Test Approach

Testing is performed using a manual-first approach, followed by automation of critical scenarios.

Manual Testing

Manual testing is used to:
Design test scenarios based on application behavior
Perform exploratory testing
Validate UI elements and page flow
Identify edge cases and unexpected behavior

Automated Testing

Automated End-to-End tests are implemented using Playwright to:
Validate critical user journeys
Cover regression scenarios
Ensure fast and repeatable test execution
High-value and stable test cases identified during manual testing were selected for automation.

4. Test Environment

Application: SauceDemo (saucedemo.com)
Browser: Chromium
Operating System: Windows
Test Framework: Playwright
Test Data: Standard SauceDemo test users and products

5. Test Strategy

The testing strategy focuses on user-centric flows that are most critical to the application’s functionality. Assertions are used to validate page navigation, element visibility, correct data display, and successful order completion. Manual testing complements automation by covering visual checks and exploratory scenarios that are not suitable for automation.

6. Entry and Exit Criteria
Entry Criteria

Application is accessible and stable
Test data is available
Test environment is configured

Exit Criteria

All critical automated tests pass successfully
No open blocker or critical defects remain

7. Defect Management

Any defects identified during testing would be documented in a defect-tracking system such as JIRA. Each defect would include clear reproduction steps, severity and priority, and supporting evidence such as screenshots or Playwright execution reports.

8. Tools and Technologies

Playwright
JavaScript
Playwright HTML Report
GitHub

9. Deliverables

Manual test scenarios
Automated End-to-End test scripts
Test execution reports
This test plan document
