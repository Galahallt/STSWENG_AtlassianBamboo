*** Settings ***
Documentation     Test suite for User Story #10
...               
...               These are test cases deals with
...               editing a professor's details as
...               an Admin
...               
...               By James Andrew F. Perez
Suite Setup       Login    ${SELF}    ${PASS1}
Test Setup        Go to Home Page
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Click Element    name:prof-${PROF1}
    Click Button    name:editBtn
    Input Text    name:fName    ${FNAME}
    Input Text    name:lName    ${LNAME}
    Input Text    name:email    ${NEW_EMAIL}
    Select From List By Label    name:college    ${COL}
    Select From List By Label    name:department    ${CO_LAW}
    Click Button    name:saveBtn
    Check Details    ${FNAME}    ${LNAME}    ${NEW_EMAIL}    ${COL}    ${CO_LAW}

*** KEYWORDS ***
Check Details
    [Arguments]    ${fname}    ${lname}    ${email}    ${college}    ${department}
    Page Should Contain    ${fname}${SPACE}${lname}
    Page Should Contain    ${college}
    Page Should Contain    ${department}}
    Page Should Contain    ${email}
