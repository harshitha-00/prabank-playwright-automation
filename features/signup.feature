Feature: Parabank Signup and Login

Scenario: Create account and login successfully
  Given user opens parabank signup page
  When user creates a new account
  And user logs in with same credentials
  Then user should see account balance printed