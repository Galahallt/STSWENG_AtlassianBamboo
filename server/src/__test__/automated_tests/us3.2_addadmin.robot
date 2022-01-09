*** Settings ***
Documentation     A test suite for User Story #3
...               
...               These are test cases deals with the
...               adding an admin. 
...               
...               By James Andrew F. Perez
Suite Setup       Open Browser To Admin Page
Test Setup        Go Back to Admin Page
Test Template     Add Admin
Suite Teardown    Close Browser
Resource          resource1.robot

*** Test Cases ***      EMAIL
Valid Email             ${VALID
Not User (DLSU)         ${NOT_USER}
Not User (Non-DLSU)     ${NOT_DLSU}
Duplicate               ${VALID}
Empty                   ${EMPTY}
Blank                   ${SPACE}

*** KEYWORDS ***
Add Admin
    [Arguments]    ${email}
    Click Link    /addadmin