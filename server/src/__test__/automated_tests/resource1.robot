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
${SUCCESS}        Admin added successfully!
${INVALID}        Invalid Email!
${REMOVED}        Admin access removed!
${PROF1}          bob.enriquez@dlsu.edu.ph
${PROF2}          ann.marie@dlsu.edu.ph
${PROF3}          christopher.pinpin@dlsu.edu.ph
${CODE1}          CCDSTRU
${CODE2}          CCDSALG
${CODE3}          CCPROG3
${INVALID_CODE}   AAA
${COMMENT1}       Very nice prof! Teaches well.
${COMMENT2}       Easy to understand. Lessons are clear.
${COMMENT3}       Overall good prof. Highly recommend.
${COMMENT4}       Easy 4.0!
${PROF_NAME1}     Bob Enriquez
${PROF_NAME2}     Ann Marie
${PROF_NAME3}     Christopher Pinpin
${NON-EXISTENT}   Taylor Swift
${NO_RESULTS}     No results.
${CCS}            CCS
${COL}            COL
${IT}             Information Technology
${CO_LAW}         College of Law
${COURSE1}        CCDSTRU
${COURSE2}        STSWENG
${NE_COURSE}      IMYOURS
${FNAME}          Jason
${LNAME}          Mraz
${NEW_EMAIL}      jason_mraz@dlsu.edu.ph
${ERROR1}         Enter email if you wish to retain it
${ERROR2}         Value must be valid/unregistered DLSU email

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
    Sleep    3
    Input Password    name:password    ${pass}
    Click Element    passwordNext
    Switch Window    ${TAB}
    Sleep    3
    Check Current Page    ${HOME}

Open Browser To Admin Page
    Login    ${SELF}    ${PASS1}
    Click Button    name:adminAccessBtn
    Check Current Page    ${ADMIN_PAGE}
    Page Should Contain    ${SELF}

Go Back to Admin Page
    Go To    ${ADMIN_PAGE}

Go to Home Page
    Go To    ${HOME}

Check Current Page
    [Arguments]    ${target}
    ${CURRENT}    Get Location
    Should Be Equal    ${target}    ${CURRENT}

Open Admin Input
    [Arguments]    ${email}
    Click Button    name:newAdminBtn
    Input Text    name:inputEmail    ${email}    True

All Profs Displayed
    Page Should Contain Element    name:prof-${PROF1}
    Page Should Contain Element    name:prof-${PROF2}
    Page Should Contain Element    name:prof-${PROF3}

No Profs Displayed
    Page Should Contain    ${NO_RESULTS}
    Page Should Not Contain Element    name:prof-${PROF1}
    Page Should Not Contain Element    name:prof-${PROF2}
    Page Should Not Contain Element    name:prof-${PROF3}