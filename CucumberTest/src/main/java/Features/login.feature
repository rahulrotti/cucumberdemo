Feature: Login routematic web

#without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "rahul" and "test@123"
#Then user clicks on login button
#Then user is on home page

	
#with Examples Keyword
Scenario Outline: Login Test Scenario

Given user is already on Login Page
When title of login page is Routematic
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then Close the browser

Examples:
	| username | password |
	| rahul.rotti+10@routematic.com  | Rahul@1234567 |
	|  tom     | test456  | 