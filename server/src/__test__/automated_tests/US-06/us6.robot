*** Settings ***
Documentation    US # 6 test cases for the Profs to Pick Website
...
...             These are the test cases that deal with the feature adding a 
...             professor to the web application, Profs top Pick DLSU
...             
...
...             By Azriel Matthew O. Ortega
Resource        ${CURDIR}${/}..\\resource2.robot
#Test Teardown    Close Browser

*** Test Cases ***
# [6-01] View Profile of Instructor that has no review
#     Set Selenium Speed  1
#     Login to PTP
#     #Add Professor  Dahyun  Kim  dahyun_kim@dlsu.edu.ph  5  2  COURSE1
#     Click Element   xpath=//div[@id='app']/div/div/div[2]/div[2]/a/div/div
#     Add Review      COURSE1     Hello. Hatdog
#     Page should contain     No reviews yet. Be the first one to share your experience with this instructor!

[6-02] View Profile of Instructor that has reviews
    Set Selenium Speed  1
    Login to PTP
    Add Professor  Hwang  Yeji  yeji_hwang@dlsu.edu.ph  4  2  SWIPE19
    Click Element   xpath=//div[@id='app']/div/div/div[2]/div[2]/a[2]/div/div
    Add Review      SWIPE19    Comment number 1
    Add Review      SWIPE19    Comment number 2
    Page should not contain     No reviews yet. Be the first one to share your experience with this instructor!

*** Keywords ***
Add Review
    [Arguments]     ${COURSE_CODE}  ${COMMENT}
    Click Button    review-button
    Input Text      course-code  ${COURSE_CODE}
    Input Text      comment     ${COMMENT}
    Click Button    submit-button 
    
Add Professor
    [Arguments]     ${FIRST_NAME}   ${LAST_NAME}    ${EMAIL}    ${COLLEGE}      ${DEPARTMENT}    ${COURSE}
    Click Button    addProfessorButton
    Input Text  lastName  ${LAST_NAME}
    Input Text  firstName   ${FIRST_NAME}
    Input Text  email   ${EMAIL}
    Select From List By Index   class:college_select        ${COLLEGE} 
    Select From List By Index   class:department_select        ${DEPARTMENT}
    Input Course    ${COURSE}
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