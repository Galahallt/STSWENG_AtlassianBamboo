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
${DELAY}          1
${TITLE}          Profs to Pick
${LOGIN}          http://localhost:3000
${HOME}           http://localhost:3000/home
${ADMIN_PAGE}     http://localhost:3000/adminlist
${VALID1}         paolo_edni_v_espiritu@dlsu.edu.ph
${VALID2}         gio_montecillo@dlsu.edu.ph
${SELF}           james_perez@dlsu.edu.ph
${ADMIN_USER}     keil_christopher_finez@dlsu.edu.ph
${NOT_USER}       franchezka_cruz@dlsu.edu.ph
${NOT_DLSU}       jamesandrewfperez@gmail.com
${PASS1}          Pass-000
${PASS2}          Jan20200!
${VERIFIED}       Verified!
${UNVERIFIED}     Cannot find email!
${ALREADY}        User is already an Administrator!
${ADMIN_INPUT}    //*[@id="app"]/div/div/div/div[2]/div/div[2]/input
${REMOVED}        Professor admin access removed!

*** Keywords ***
Login
    [Arguments]    ${email}    ${pass}    ${current}
    Set Selenium Speed    ${DELAY}
    Open Browser    ${LOGIN}    ${BROWSER}
    Maximize Browser Window
    Title Should Be    ${TITLE}
    Click Button    Login with Google Account
    ${TAB}    Switch Window    NEW
    Input Text    identifierId    ${email}
    Click Element    identifierNext
    Sleep    2
    Input Password    name:password    ${pass}
    Click Element    passwordNext
    Switch Window    ${TAB}
    Click Button    name:adminAccessBtn
    Check Current Page    ${current}

Open Browser To Admin Page
    Login    ${SELF}    ${PASS1}    ${ADMIN_PAGE}
    Page Should Contain    ${SELF}

Go Back to Admin Page
    Go To    ${ADMIN_PAGE}

Check Current Page
    [Arguments]    ${target}
    ${CURRENT}    Get Location
    Should Be Equal    ${target}    ${CURRENT}

Open Admin Input
    [Arguments]    ${email}
    Click Link    /addadmin
    Clear Element Text    ${ADMIN_INPUT}
    Press Keys    ${ADMIN_INPUT}    A+BACKSPACE
    Input Text    ${ADMIN_INPUT}    ${email}