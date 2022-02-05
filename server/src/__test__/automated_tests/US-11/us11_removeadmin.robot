*** Settings ***
Documentation     Test suite for User Story #11
...               
...               These are test cases deals with going
...               to the admin page as an admin and 
...               removing an admin role.
...               
...               By James Andrew F. Perez
Suite Setup       Open Browser To Admin Page
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Click Button    name:rmv-${ADMIN_USER}
    Alert Should Be Present    ${REMOVED}
    Page Should Not Contain    ${ADMIN_USER}

Self
    Click Button    name:rmv-${SELF}
    Alert Should Not Be Present    ${REMOVED}
    Page Should Contain    ${SELF}

*** KEYWORDS ***
