$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/GetSingleEmployeeInValidCall.feature");
formatter.feature({
  "name": "Rest API Test InValid",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Single Employee Info with InValid Get Request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseUrl and InValid resourcePath",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Make a InValid GET Call",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should receive status code 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("classpath:features/GetSingleEmployeeValidCall.feature");
formatter.feature({
  "name": "Rest API Test Valid",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Single Employee Info with Valid Get Request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseUrl and valid resourcePath",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Make a valid GET Call",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should receive status code 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});