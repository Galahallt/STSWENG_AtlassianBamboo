*** Settings ***
Documentation     3rd test suite for User Story #3
...               
...               These are test cases deals with the
...               canceling of adding an admin. 
...               
...               By James Andrew F. Perez
Suite Setup       Open Browser To Admin Page
Suite Teardown    Close Browser
Resource          ${CURDIR}${/}..\\resource1.robot

*** Test Cases ***
Valid
    Open Admin Input    ${VALID2}
    Click Cancel

Invalid
    Open Admin Input    ${NOT_DLSU}
    Click Cancel

Empty
    Open Admin Input    ${EMPTY}
    Click Cancel

Redirect
    Open Admin Input    ${VALID2}
    Click Redirect

*** KEYWORDS ***
Click Cancel
    Click Element    //*[@id="app"]/div/div/div[3]/div/div[2]/div/div/a
    Page Should Not Contain    ${VALID2}
    Page Should Not Contain    ${NOT_DLSU}
    Check Current Page  ${ADMIN_PAGE}

Click Redirect
    Click Element    //*[@id="app"]/div/div/div[1]/div[1]/a
    Check Current Page  ${HOME}