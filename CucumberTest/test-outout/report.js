$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/user/eclipse-workspace/CucumberTest/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login routematic web",
  "description": "",
  "id": "login-routematic-web",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"rahul\" and \"test@123\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 13,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 14,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-routematic-web;login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Routematic",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-routematic-web;login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-routematic-web;login-test-scenario;;1"
    },
    {
      "cells": [
        "rahul.rotti+10@routematic.com",
        "Rahul@1234567"
      ],
      "line": 25,
      "id": "login-routematic-web;login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 26,
      "id": "login-routematic-web;login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-routematic-web;login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Routematic",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"rahul.rotti+10@routematic.com\" and \"Rahul@1234567\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_routematic.user_already_on_login_page()"
});
formatter.result({
  "duration": 27609805100,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.title_of_login_page_is_Routematic()"
});
formatter.result({
  "duration": 41798700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahul.rotti+10@routematic.com",
      "offset": 13
    },
    {
      "val": "Rahul@1234567",
      "offset": 49
    }
  ],
  "location": "Login_routematic.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 590608400,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 286156500,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.user_is_on_home_page()"
});
formatter.result({
  "duration": 59654600,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.close_the_browser()"
});
formatter.result({
  "duration": 1710977900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-routematic-web;login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Routematic",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_routematic.user_already_on_login_page()"
});
formatter.result({
  "duration": 25904738600,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.title_of_login_page_is_Routematic()"
});
formatter.result({
  "duration": 32259300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "Login_routematic.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 429679300,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 229134700,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.user_is_on_home_page()"
});
formatter.result({
  "duration": 84109600,
  "status": "passed"
});
formatter.match({
  "location": "Login_routematic.close_the_browser()"
});
formatter.result({
  "duration": 1182144900,
  "status": "passed"
});
});