# Friend-Finder

[Click to take the quiz](https://friend-finder-swh.herokuapp.com/)

Friend Finder implements friend matching based on the user's responses to a twelve question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all twelve questions combined.

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the Bootstrap CSS framework on the front end.
