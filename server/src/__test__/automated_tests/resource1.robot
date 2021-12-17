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
${DELAY}          0
${TITLE}          Profs to Pick
${HOME}           http://localhost:3000/
${ADMIN}          http://localhost:3000/adminlist
${VALID}          paolo_edni_v_espiritu@dlsu.edu.ph
${SELF}           james_perez@dlsu.edu.ph
${NOT_USER}       temp@dlsu.edu.ph
${NOT_DLSU}       jamesandrewfperez@gmail.com

*** Keywords ***
Open Browser To Admin Page
    Open Browser    ${HOME}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Title Should Be    ${TITLE}
    CLICK BUTTON    Admin Access
    ${CURRENT}    Get Location
    Should Be Equal    ${ADMIN}    ${CURRENT}
    Page Should Contain    ${SELF}