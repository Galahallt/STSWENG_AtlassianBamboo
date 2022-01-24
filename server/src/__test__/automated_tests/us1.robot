*** Settings ***
Documentation    US # 1 test cases for the Profs to Pick Website
...
...             This test follows the example using keywords for the SeleniumLibary
...             
...             By Azriel Matthew O. Ortega
Resource        resource2.robot
Test Teardown    Close Browser

*** Test Cases ***

[1-01] Valid Login
    Set Selenium Speed    1
    Open Browser    http://localhost:3000   chrome
    Maximize Browser Window
    Click Button    Login with Google Account
    ${TAB}    Switch Window    NEW
    Input Text    identifierId    azriel_ortega@dlsu.edu.ph
    Click Element    identifierNext
    Input Password    //*[@id="password"]/div[1]/div/div[1]/input    MasterJason18!
    Click Element    passwordNext
    Switch Window    ${TAB}

[1-02] Invalid Login
    Set Selenium Speed    1
    Open Browser    http://localhost:3000   chrome
    Maximize Browser Window
    Click Button    Login with Google Account
    ${TAB}    Switch Window    NEW
    Input Text    identifierId    ortegatest0408@gmail.com
    Click Element    identifierNext
    Input Password    //*[@id="password"]/div[1]/div/div[1]/input    Matt04082001
    Click Element    passwordNext
    Switch Window    ${TAB}
    Element Text Should Be  class:ml-2  Please use a DLSU account!


