*** Settings ***
Documentation    US # 2 test cases for the Profs to Pick Website
...
...             These are the test cases that deal with the feature adding a 
...             professor to the web application, Profs top Pick DLSU
...             
...
...             By Azriel Matthew O. Ortega
Resource        ${CURDIR}${/}..\\resource2.robot
Test Teardown    Close Browser

*** Test Cases ***
# [2-02] User adds Professor with Complete Input
#     Set Selenium Speed  1
#     Login to PTP
#     Input Text  lastName  Ortega
#     Input Text  firstName   Azriel Matthew
#     Input Text  email   azriel_ortega@dlsu.edu.ph
#     Select From List By Index   class:college_select        2
#     Select From List By Index   class:department_select        1
#     Input Course    STSWENG
#     Click Button    confirm_addProfessorBtn

[2-03] User adds professor without Input
    Set Selenium Speed  1
    Login to PTP
    Input Text  firstName  Azriel
    Click Button    confirm_addProfessorBtn
    Element Text Should Be  class:lastname_error  Value is required
    Element Text Should Be  class:email_error  Value is required
    Element Text Should Be  class:college_error  Value must not be default
    Element Text Should Be  class:department_error  Value must not be default
    Element Text Should Be  class:courses_error  Value is required

# [2-04] User adds professor with Incomplete Input
#     Set Selenium Speed  1
#     Login to PTP
#     Input Course    CSSWENG
#     Input Text  lastName  Camacho
#     Select From List By Index   class:college_select        3
#     Click Button    confirm_addProfessorBtn
#     Element Text Should Be  class:firstname_error  Value is required
#     Element Text Should Be  class:email_error  Value is required
#     Element Text Should Be  class:department_error  Value must not be default

# [2-05] User adds professor with invalid email address
#     Set Selenium Speed  1
#     Login to PTP
#     Input Text  lastName  Chu
#     Input Text  firstName   TIn
#     Input Text  email   tin_chu@dlsu.edu.ph123
#     Select From List By Index   class:college_select        2
#     Select From List By Index   class:department_select        1
#     Input Course    CLLAW123
#     Click Button    confirm_addProfessorBtn
#     Element Text Should Be  class:email_error  Value must contain DLSU e-mail.
#     Input Text  email   tin_chu@gmail.com
#     Element Text Should Be  class:email_error  Value must contain DLSU e-mail.
#     Input Text  email   tin_chu@dlsu.edu.ph

# [2-06] Website can't accept duplicate Irobnputs
#     Set Selenium Speed  1
#     Login to PTP
#     Input Text  lastName  Ortega
#     Input Text  firstName   Azriel Matthew
#     Input Text  email   azriel_ortega@dlsu.edu.ph
#     Select From List By Index   class:college_select        2
#     Select From List By Index   class:department_select        1
#     Input Course    STSWENG
#     Click Button    confirm_addProfessorBtn
#     Element Text Should Be  class:professor_error  Professor already exists.

*** Keywords ***
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
    Click Button    addProfessorButton