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
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***      EMAIL           PASSWORD        PAGE
Admin                   ${SELF}         ${PASS1}        ${ADMIN_PAGE}
# Non-Admin               ${VALID1}       ${PASS2}        ${HOME}

*** KEYWORDS ***
