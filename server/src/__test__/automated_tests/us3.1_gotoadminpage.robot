*** Settings ***
Documentation     A test suite for User Story #3
...               
...               These are test cases deals with going
...               to the admin page as an admin and a
...               non-admin user. Also checks the admin
...               list. Current admin list must contain
...               ${SELF} and  
...               
...               By James Andrew F. Perez
Suite Teardown    Close Browser
Resource          resource1.robot

*** Test Cases ***


*** KEYWORDS ***