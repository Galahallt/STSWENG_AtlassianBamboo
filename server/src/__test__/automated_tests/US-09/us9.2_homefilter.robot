*** Settings ***
Documentation     2nd test suite for User Story #9
...               
...               These are test cases deals with going
...               to the home page and using the Filter
...               By feature.
...               
...               By James Andrew F. Perez
Suite Setup       Login    ${SELF}    ${PASS1}
Test Setup        Go to Home Page
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Select From List By Label    name:collegeFilter    ${CCS}
    Select From List By Label    name:departmentFilter    ${IT}
    Input Text    name:filterCourse    ${COURSE1}
    Submit
    Page Should Not Contain Element    name:prof-${PROF1}
    Page Should Contain Element    name:prof-${PROF2}
    Page Should Not Contain Element    name:prof-${PROF3}

Non-existent Course
    Input Text    name:filterCourse    ${NE_COURSE}
    Submit
    No Profs Displayed

Course From Different College
    Select From List By Label    name:collegeFilter    ${COL}
    Input Text    name:filterCourse    ${COURSE2}
    Submit
    No Profs Displayed

Blank Course Code
    Input Text    name:filterCourse    ${SPACE}
    Submit
    All Profs Displayed

Empty Course Code
    Input Text    name:filterCourse    ${EMPTY}
    Submit
    All Profs Displayed

Clear Filter
    Select From List By Label    name:collegeFilter    ${CCS}
    Select From List By Label    name:departmentFilter    ${IT}
    Input Text    name:filterCourse    ${COURSE1}
    Submit
    Click Button    name:clearBtn
    All Profs Displayed

*** KEYWORDS ***
Submit
    Click Button    name:filterBtn