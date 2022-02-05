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
    Save
    Check Details    ${FNAME}${SPACE}${LNAME}    ${NEW_EMAIL}    ${COL}    ${CO_LAW}

No Change
    Click Element    name:prof-${PROF2}
    Click Button    name:editBtn
    Save
    Check Details    ${PROF_NAME2}    ${PROF2}    ${CCS}    ${IT}

Blank Field
    Click Element    name:prof-${PROF2}
    Click Button    name:editBtn
    Input Text    name:fName    ${SPACE}
    Input Text    name:lName    ${SPACE}
    Save
    Check Details    ${PROF_NAME2}    ${PROF2}    ${CCS}    ${IT}

Blank Email
    Click Element    name:prof-${PROF2}
    Click Button    name:editBtn
    Input Text    name:email    ${SPACE}
    Save
    Page Should Contain    ${ERROR1}

Empty Email
    Click Element    name:prof-${PROF2}
    Click Button    name:editBtn
    Input Text    name:email    ${SPACE}    True
    Press Keys    name:email    BACKSPACE 
    Save
    Page Should Contain    ${ERROR1}


Duplicate Email
    Click Element    name:prof-${PROF2}
    Click Button    name:editBtn
    Input Text    name:email    ${PROF3}
    Save
    Page Should Contain    ${ERROR2}

Cancel Edit
    Click Element    name:prof-${PROF2}
    Click Button    name:editBtn
    Input Text    name:fName    ${FNAME}
    Input Text    name:lName    ${LNAME}
    Input Text    name:email    ${NEW_EMAIL}
    Select From List By Label    name:college    ${COL}
    Select From List By Label    name:department    ${CO_LAW}
    Click Button    name:cancelBtn
    Check Details    ${PROF_NAME2}    ${PROF2}    ${CCS}    ${IT}

*** KEYWORDS ***
Check Details
    [Arguments]    ${name}    ${email}    ${college}    ${department}
    Page Should Contain    ${name}
    Page Should Contain    ${college}
    Page Should Contain    ${department}
    Page Should Contain    ${email}

Save
    Click Button    name:saveBtn