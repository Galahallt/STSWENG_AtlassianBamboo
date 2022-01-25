*** Settings ***
Documentation     1st test suite for User Story #3
...               
...               These are test cases deals with going
...               to the admin page as an admin and a
...               non-admin user. Also checks the admin
...               list.
...               
...               By James Andrew F. Perez
Test Template     Login
Test Teardown     Close Browser
Resource          resource1.robot

*** Test Cases ***      EMAIL           PASSWORD        PAGE
Admin                   ${SELF}         ${PASS1}        ${ADMIN_PAGE}
# Non-Admin               ${VALID1}       ${PASS2}        ${HOME}

*** KEYWORDS ***
Login
    [Arguments]    ${email}    ${pass}    ${current}
    Set Selenium Speed    ${DELAY}
    Open Browser    ${LOGIN}    ${BROWSER}
    Maximize Browser Window
    Title Should Be    ${TITLE}
    Click Button    Login with Google Account
    ${TAB}    Switch Window    NEW
    Input Text    identifierId    ${email}
    Click Element    identifierNext
    Input Password    //*[@id="password"]/div[1]/div/div[1]/input    ${pass}
    Click Element    passwordNext
    Switch Window    ${TAB}
    Click Button    //*[@id="app"]/div/div/div[1]/div[1]/a/button
    Check Current Page    ${current}