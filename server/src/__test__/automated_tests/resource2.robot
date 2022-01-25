*** Settings ***
Documentation     A resource file with reusable
...               keywords and variables.
...
...               These are common keywords to be 
...               used for test cases created by
...               QA Azriel Matthew Ortega. Change
...               ${DELAY} value to set speed.
...               
...               Must be logged in as ${SELF}. ${SLEF}
...               must be an admin. Must have ${VALID}
...               email as not admin initially. ${NOT
...               USER} must be a DLSU email that is
...               a user.
Library           SeleniumLibrary

** Variables ***
${BROWSER}        Chrome
${DELAY}          1
${TITLE}          Profs to Pick
${LOGIN}          http://localhost:3000
${HOME}           http://localhost:3000/home
${ADMIN_PAGE}     http://localhost:3000/adminlist
${SELF}           azriel_ortega@dlsu.edu.ph

