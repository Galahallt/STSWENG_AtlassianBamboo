*** Settings ***
Documentation     Test suite for User Story #5
...               
...               These are test cases deals with going
...               to professor's page as an admin and 
...               adding a review.
...               
...               By James Andrew F. Perez
Suite Setup       Login    ${SELF}    ${PASS1}
Test Setup        Click Home
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Input Review    ${CODE1}    ${COMMENT1}

Same Code
    Input Review    ${CODE1}    ${COMMENT2}

Different Code
    Input Review    ${CODE2}    ${COMMENT3}



*** KEYWORDS ***
Click Home
    Click Element    name:homeLnk

Input Review
    [Arguments]    ${code}    ${comment}
    Click Element    name:prof-${PROF2}
    Click Button    name:reviewBtn
    Input Text    name:codeInp    ${code}
    Input Text    name:commentInp    ${comment}
    Click Button    name:submitBtn