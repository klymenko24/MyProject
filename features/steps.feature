Feature: Login to the system as a Manager and add new customer

  Scenario: Open page and login
    Given I open page
    When  I choose manager account

  Scenario: Creating new customer with valid data
    When I choose Add Customer
    And Add First Name
    And Add Last Name
    And Add Post Code
    And Click add customer btn
    Then Check text in alert message
    When Close alert message

  Scenario:Checking data in a table
    When Click customer button
    Then Check user in table
    When Delete user
    Then Check user not in table







# Examples:

# | First Name             | Last Name                  | Post Code                  |
# | CustomersDataPage.name | CustomersDataPage.lastName | CustomersDataPage.postCode |

