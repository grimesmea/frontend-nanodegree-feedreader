/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed in the allFeeds object and ensures it
         * has a URL defined and that the URL is not empty.
         */
        it('have URLs', function() {
            for(var feed in allFeeds)
              {
                expect(allFeeds[feed].url).toBeDefined();
              }
        });

        /* Test  loops through each feed in the allFeeds object and ensures it
         * has a name defined and that the name is not empty.
         */
         it('have names', function() {
             for(var feed in allFeeds)
               {
                 expect(allFeeds[feed].name).toBeDefined();
               }
         });
    });

    /* This is a new test suite to manage menu visibility */
    describe('The menu', function() {
        /* Custom matcher which returns the classes of a DOM element */
        beforeEach(function() {
            jasmine.addMatchers({
                toHaveClass: function(util) {
                    return {
                        compare: function(actual, className) {
                        var passed = actual.hasClass(className);
                        return {
                            pass: passed,
                            message: 'Expected ' + actual + (passed ? '' : ' not') + ' to equal ' + className
                        };
                        }
                    };
                }
            });
        });

         /* Test that ensures the menu element is hidden by default. */
        it('is hidden by default', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });

            /* This is a  nested suite that checks if the menu visibility changes
             * when the menu icon is clicked.
             */
            describe(', when the icon is clicked', function() {
                /* Clicks menu icon before running each spec */
                beforeEach(function() {
                    $('.menu-icon-link').click();
                });

                /* Test that ensures the menu element is becomes visible when
                 * the menu icon is clicked.
                 */
                it('is visible', function() {
                  expect($('body')).not.toHaveClass('menu-hidden');
                });

                /* Test that ensures the menu element is becomes hidden when
                 * the menu icon is clicked again.
                 */
                it('but is hidden again', function() {
                  expect($('body')).toHaveClass('menu-hidden');
                });
            });
    });

    /* This is a new test suite that checks the loading of feeds using the
     * Google Feed Reader API.
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        /* Test that ensures when the asynchronous loadFeed function is called
         * and completes its work, there is at least a single .entry element
         * within the .feed container.
         */
        it('has at least one entry', function(done) {
          expect($('.feed').children().length).toBeGreaterThan(0);
          done();
        });
    });

    /* Test suite for testing the functionality of the loadFeed function when a
     * new feed is selected.
     */
    describe('New Feed Selection', function() {
        /* Before each spec is the suite is run, stores the text of all elements
         * of class entry and loads the feed at index 1 of the allFeeds array.
         */
        beforeEach(function(done) {
          feedText = $('.entry').text();
          loadFeed(1, done);
        });

        /* After each spec in the suite is run, loads the feed at index 0 of the
         * allFeeds array, which is the default feed loaded by the page.
         */
        afterEach(function(done) {
          loadFeed(0, done);
        });

        /* Test that checks that content changes when a new feed is loaded using
         * the loadFeed function.
         */
        it('changes content', function() {
          expect($('.entry').text()).not.toEqual(feedText);
        });
    });
}());
