*** Settings ***
Documentation     Test suite for User Story #5
...               
...               These are test cases deals with going
...               to professor's page as an admin and 
...               adding a review.
...               
...               By James Andrew F. Perez
Suite Setup       Login    ${SELF}    ${PASS1}
Test Setup        Go Home
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Input Review    ${CODE1}    ${COMMENT1}
    Page Should Contain Element    name:${SELF_NAME}${CODE1}${COMMENT1}

Same Code
    Input Review    ${CODE1}    ${COMMENT2}
    Page Should Contain Element    name:${SELF_NAME}${CODE1}${COMMENT2}

Different Code
    Input Review    ${CODE2}    ${COMMENT3}
    Page Should Contain Element    name:${SELF_NAME}${CODE2}${COMMENT3}

Blank Comment
    Input Review    ${CODE2}    ${SPACE}
    Element Should Be Disabled    name:submitBtn

Blank Code
    Input Review    ${SPACE}    ${COMMENT1}${SPACE}${COMMENT2}
    Element Should Be Disabled    name:submitBtn

All Empty
    Input Review    ${EMPTY}    ${EMPTY}
    Element Should Be Disabled    name:submitBtn

New Code
    Input Review    ${CODE3}    ${COMMENT2}${SPACE}${COMMENT3}
    Page Should Contain Element    name:${SELF_NAME}${CODE3}${COMMENT2}${COMMENT3}

Invalid Code
    Input Review    ${INVALID_CODE}    ${COMMENT4}
    Element Should Be Disabled    name:submitBtn

Cancel
    Click Element    name:prof-${PROF2}
    Click Button    name:reviewBtn
    Input Text    name:codeInp    ${CODE2}
    Input Text    name:commentInp    ${COMMENT4}
    Click Button    name:cancelBtn
    Page Should Not Contain Element    name:${SELF_NAME}${CODE2}${COMMENT4}

*** KEYWORDS ***
Go Home
    Go To    ${HOME}

Input Review
    [Arguments]    ${code}    ${comment}
    Click Element    name:prof-${PROF2}
    Click Button    name:reviewBtn
    Input Text    name:codeInp    ${code}
    Input Text    name:commentInp    ${comment}
    Click Button    name:submitBtn
