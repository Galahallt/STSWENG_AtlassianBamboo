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
Library           SeleniumLibrary  run_on_failure=Nothing

*** Variables ***
${BROWSER}        Chrome
${DELAY}          1
${TITLE}          DLSU Profs to Pick
${LOGIN}          http://localhost:3000
${HOME}           http://localhost:3000/home
${ADMIN_PAGE}     http://localhost:3000/adminlist
${VALID1}         paolo_edni_v_espiritu@dlsu.edu.ph
${VALID2}         gio_montecillo@dlsu.edu.ph
${SELF}           james_perez@dlsu.edu.ph
${SELF_NAME}      James Andrew Perez
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
${PROF1}          bob.enriquez@dlsu.edu.ph
${PROF2}          ann.marie@dlsu.edu.ph
${CODE1}          CCDSTRU
${CODE2}          CCDSALG
${CODE3}          CCPROG3
${INVALID_CODE}   AAA
${COMMENT1}       Very nice prof! Teaches well.
${COMMENT2}       Easy to understand. Lessons are clear.
${COMMENT3}       Overall good prof. Highly recommend.
${COMMENT4}       Easy 4.0!

*** Keywords ***
Login
    [Arguments]    ${email}    ${pass}
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
    Sleep    2
    Check Current Page    ${HOME}

Open Browser To Admin Page
    Login    ${SELF}    ${PASS1}
    Click Button    name:adminAccessBtn
    Check Current Page    ${ADMIN_PAGE}
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