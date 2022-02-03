*** Settings ***
Documentation    US # 7 test cases for the Profs to Pick Website
...
...             These are the test cases that deal with the feature adding a 
...             professor to the web application, Profs top Pick DLSU
...             
...
...             By Azriel Matthew O. Ortega
Resource        ${CURDIR}${/}..\\resource2.robot
Test Teardown    Close Browser

*** Test Cases ***
# Test Cases Setup
#     Set Selenium Speed  5
#     Login to PTP
#     #Add Professor  Dahyun  Kim  dahyun_kim@dlsu.edu.ph  5  2    GEMATMW       GEETHIC 
#     Click Element   xpath=//div[@id='app']/div/div/div[2]/div[2]/a/div/div/div
#     Add Review  GEMATMW     First Comment for Kim Dahyun Prof GEMATMW
#     Add Review  GEMATMW     Second Comment for Kim Dahyun Prof GEMATMW

[7-01] Filter reviews by all
    Set Selenium Speed  1
    Login to PTP
    Click Element   xpath=//div[@id='app']/div/div/div[2]/div[2]/a/div/div/div
    Page should not contain     No reviews yet. Be the first one to share your experience with this instructor!
    Page should contain     First Comment for Kim Dahyun Prof GEMATMW
    Page should contain     Second Comment for Kim Dahyun Prof GEMATMW

[7-02] Filter reviews by specific course with reviews
    Set Selenium Speed  1
    Login to PTP
    Click Element   xpath=//div[@id='app']/div/div/div[2]/div[2]/a/div/div/div
    Select From List By Index   class:filter-options     1
    Page should not contain     No reviews yet. Be the first one to share your experience with this instructor!
    Page should contain     First Comment for Kim Dahyun Prof GEMATMW
    Page should contain     Second Comment for Kim Dahyun Prof GEMATMW

[7-03] Filter reviews by specific course with reviews but no review regarding it
    Set Selenium Speed  1
    Login to PTP
    Click Element   xpath=//div[@id='app']/div/div/div[2]/div[2]/a/div/div/div
    Select From List By Index   class:filter-options     2
    Page should contain     No reviews yet. Be the first one to share your experience with this instructor!
    Page should not contain     First Comment for Kim Dahyun Prof GEMATMW
    Page should not contain     Second Comment for Kim Dahyun Prof GEMATMW

*** Keywords ***
Add Review
    [Arguments]     ${COURSE_CODE}  ${COMMENT}
    Click Button    review-button
    Input Text      course-code  ${COURSE_CODE}
    Input Text      comment     ${COMMENT}
    Click Button    submit-button 
    
Add Professor
    [Arguments]     ${FIRST_NAME}   ${LAST_NAME}    ${EMAIL}    ${COLLEGE}      ${DEPARTMENT}    ${COURSE1}     ${COURSE2}
    Click Button    addProfessorButton
    Input Text  lastName  ${LAST_NAME}
    Input Text  firstName   ${FIRST_NAME}
    Input Text  email   ${EMAIL}
    Select From List By Index   class:college_select        ${COLLEGE} 
    Select From List By Index   class:department_select        ${DEPARTMENT}
    Input Course    ${COURSE1}
    Input Course    ${COURSE2}
    Click Button    confirm_addProfessorBtn

Input_Course
    [Arguments]     ${COURSE}
    Input Text  courses     ${COURSE}
    Press Keys  class:courses_input     ENTER

Login to PTP
    Set Selenium Speed    1
    Open Browser    http://localhost:3000   chrome
    Maximize Browser Window
    Click Button    Login with Google Account
    ${TAB}    Switch Window    NEW
    Input Text    identifierId    azriel_ortega@dlsu.edu.ph
    Click Element    identifierNext
    Input Password    //*[@id="password"]/div[1]/div/div[1]/input    MasterJason18!
    Click Element    passwordNext
    Switch Window    ${TAB}