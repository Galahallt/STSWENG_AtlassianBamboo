*** Settings ***
Documentation     2nd test suite for User Story #3
...               
...               These are test cases deals with the
...               adding an admin. 
...               
...               By James Andrew F. Perez
Suite Setup       Open Browser To Admin Page
Test Setup        Go Back to Admin Page
Test Template     Add Admin
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***      EMAIL             PROMPT
Valid Email             ${VALID1}         ${VERIFIED}
Not User (DLSU)         ${NOT_USER}       ${UNVERIFIED}
Not User (Non-DLSU)     ${NOT_DLSU}       ${UNVERIFIED}
Duplicate               ${VALID1}          ${ALREADY}
Empty                   ${EMPTY}          ${UNVERIFIED}
Blank                   ${SPACE}          ${UNVERIFIED}

*** KEYWORDS ***
Add Admin
    [Arguments]    ${email}    ${prompt}
    Open Admin Input    ${email}
    Click Element    //*[@id="app"]/div/div/div/div[2]/div/div[2]/div/div/button
    Page Should Contain    ${prompt}