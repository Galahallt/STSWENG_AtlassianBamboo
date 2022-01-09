*** Settings ***
Documentation     A resource file with reusable
...               keywords and variables.
...
...               These are common keywords to be 
...               used for test cases created by
...               QA James Andrew F. Perez. Change
...               ${DELAY} value to set speed.
...               
...               Must be logged in as ${SELF}. ${SLEF}
...               must be an admin. Must have ${VALID}
...               email as not admin initially. ${NOT
...               USER} must be a DLSU email that is
...               a user.
Library           SeleniumLibrary

*** Variables ***
${BROWSER}        Chrome
${DELAY}          2
${TITLE}          Profs to Pick
${HOME}           https://profs-to-pick.netlify.app
${ADMIN}          https://profs-to-pick.netlify.app/adminlist
${VALID}          paolo_edni_v_espiritu@dlsu.edu.ph
${SELF}           james_perez@dlsu.edu.ph
${ADMIN_USER}     tba@dlsu.edu.ph
${NOT_USER}       temp@dlsu.edu.ph
${NOT_DLSU}       jamesandrewfperez@gmail.com

*** Keywords ***
Open Browser To Admin Page
    Set Selenium Speed    ${DELAY}
    Open Browser    ${HOME}    ${BROWSER}
    Maximize Browser Window
    Title Should Be    ${TITLE}
    Click Button    Login with Google Account
    ${TAB}=    Switch Window    NEW
    Input Text    identifierId    ${SELF}
    Click Element    identifierNext
    Input Password    //*[@id="password"]/div[1]/div/div[1]/input    Pass-000
    Click Element    passwordNext
    Switch Window    ${TAB}
    Click Button    //*[@id="app"]/div/div/div[1]/div[1]/button
    ${CURRENT}    Get Location
    Should Be Equal    ${ADMIN}    ${CURRENT}
    Page Should Contain    ${SELF}

Go Back to Admin Page
    Go To    ${ADMIN}