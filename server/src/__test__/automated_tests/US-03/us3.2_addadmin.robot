*** Settings ***
Documentation     2nd test suite for User Story #3
...               
...               These are test cases deals with the
...               adding an admin. 
...               
...               By James Andrew F. Perez
Suite Setup       Open Browser To Admin Page
Test Setup        Go Back to Admin Page
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid Email
    Add Admin    ${VALID1}
    Alert Should Be Present    ${SUCCESS}

Not User (DLSU)
    Add Admin    ${NOT_USER}
    Page Should Contain   ${INVALID}

Not User (Non-DLSU)
    Add Admin    ${NOT_DLSU}
    Page Should Contain   ${INVALID}

Duplicate
    Add Admin    ${VALID1}
    Page Should Contain   ${INVALID}

Empty
    Add Admin    ${EMPTY}
    Page Should Contain   ${INVALID}

Blank
    Add Admin    ${SPACE}
    Page Should Contain   ${INVALID}

*** KEYWORDS ***
Add Admin
    [Arguments]    ${email}
    Open Admin Input  ${email}
    Click Button    name:saveBtn