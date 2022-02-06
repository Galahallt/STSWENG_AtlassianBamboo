*** Settings ***
Documentation     1st test suite for User Story #9
...               
...               These are test cases deals with going
...               to the home page and searching for
...               an instructor.
...               
...               By James Andrew F. Perez
Suite Setup       Login    ${SELF}    ${PASS1}
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Search Prof  ${PROF_NAME1}
    Page Should Contain Element    name:prof-${PROF1}
    Page Should Not Contain Element    name:prof-${PROF2}
    Page Should Not Contain Element    name:prof-${PROF3}

Non-existent
    Search Prof  ${NON-EXISTENT}
    No Profs Displayed

Blank
    Search Prof  ${SPACE}
    All Profs Displayed

Empty
    Search Prof  ${EMPTY}
    All Profs Displayed

*** KEYWORDS ***
Search Prof
    [Arguments]    ${prof}
    Input Text    name:search    ${prof}
