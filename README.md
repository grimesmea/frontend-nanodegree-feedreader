# Project 6 — Feed Reader

This project uses Jasmine to test the functionality of an RSS feed reader, created by Udacity.

The finished project can viewed at http://grimesmea.github.io/frontend-nanodegree-feedreader/.

Source code available at https://github.com/grimesmea/frontend-nanodegree-feedreader/.

## How does it work?

Just visit http://grimesmea.github.io/frontend-nanodegree-feedreader/. After the page has loaded, the Jasmine test results will be displayed at the bottom of the page.

## What future functionality is tested for?

The "Loading Multiple Feeds" test suite tests the potential future functionality
of loading multiple feeds concurrently.

This functionality would work by passing an array of feed indexes to loadFeed().

Currently the "Loading Multiple Feeds" test suite produces a failure as well as
timing out the async callback. This timeout should be remedied once passing
loadFeed() an array does not produce and error.

## Resources and Acknowledgements

http://jasmine.github.io/2.1/introduction.html  
http://pivotallabs.com/writing-beautiful-specs-jasmine-custom-matchers/  
http://stackoverflow.com/questions/23986665/jasmine-2-0-test-with-a-custom-matcher-fails-undefined-is-not-a-function  
http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html  

A big thanks as well to a number of students whose github repositories proved invaluable in assuring me that I had in fact understood Jasmine:

https://github.com/DawoonC/frontend-nanodegree-feedreader  
https://github.com/kevdonk/frontend-nanodegree-feedreader
