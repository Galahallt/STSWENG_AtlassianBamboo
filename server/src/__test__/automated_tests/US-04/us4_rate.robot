*** Settings ***
Documentation     Test suite for User Story #4
...               
...               These are test cases deals with going
...               to the home page, choosing a prof, and
...               giving them a rating.
...               
...               By James Andrew F. Perez
Suite Setup       Login    ${SELF}    ${PASS1}
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Rate 1
    Click Element    prof-@{PROF1}

*** KEYWORDS ***
