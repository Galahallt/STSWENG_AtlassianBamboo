*** Settings ***
Documentation     A test suite for User Story #3
...               
...               These are test cases deals with the
...               adding an admin. 
...               
...               By James Andrew F. Perez
Test Setup        Open Browser To Admin Page
Test Template     Add Admin
Test Teardown     Close Browser
Resource          resource1.robot

*** Test Cases ***      EMAIL
Valid Email             ${VALID}
Self                    ${SELF}
Not User (DLSU)         ${NOT_USER}
Not User (Non-DLSU)     ${NOT_DLSU}
Duplicate               ${VALID}
Empty                   

*** KEYWORDS ***
Add Admin
    [Arguments]    ${email}