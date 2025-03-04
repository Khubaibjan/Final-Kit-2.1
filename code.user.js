// ==UserScript==
// @name        FINAL KIT 2.0
// @namespace   Violentmonkey Scripts
// @match       https://www.humanatic.com/*
// @author       Khubaib Jan
// @grant       none
// @version     1.5
// @description Error handling, Call Refresher, Audio duration viewer etc
// ==/UserScript==

(function () {
    'use strict';

    const timeLimit = 0.5; // Time limit in minutes


 /*                 Links to add Bookmarks
     DD
     https://www.humanatic.com/x19/category_selector.cfm?category=20
      .
     Carwars
     https://www.humanatic.com/x19/category_selector.cfm?category=142
      .
     Appt Booked
     https://www.humanatic.com/x19/category_selector.cfm?category=28
     .
     SSB
     https://www.humanatic.com/x19/category_selector.cfm?category=72
     .
     DSV
     https://www.humanatic.com/x19/category_selector.cfm?category=7
     .
     RFO
     https://www.humanatic.com/x19/category_selector.cfm?category=135
     .
     NCP
     https://www.humanatic.com/x19/category_selector.cfm?category=133

     */

    setInterval(() => {
        const pageTitle = document.title;
        const currentURL = window.location.href;

        // Combined error handling
        if (
            pageTitle === '429 Too Many Requests' ||
            pageTitle === 'https://www.humanatic.com | 504: Gateway time-out' ||
            pageTitle === 'https://www.humanatic.com | 502: Bad gateway' ||
            pageTitle === '500 Internal Server Error' ||
            pageTitle === 'Just a moment... ' ||
            pageTitle === 'Access denied | www.humanatic.com used Cloudflare to restrict access'

        ) {
            console.warn(`Error detected: ${pageTitle || 'Error 1015'}. Reloading in 1 second.`);
            setTimeout(() => {
                window.location.href = 'https://www.humanatic.com/x19/review.cfm';
            }, errorReloadTime);
        }

        // Handle "Just a moment..." page
        if (pageTitle === 'Just a moment...') {
            document.querySelector('.big-button.pow-button')?.click();
        }

        // Handle specific URLs and redirect
        if (
            currentURL === 'https://www.humanatic.com/pages/humfun/category.cfm?noCalls' ||
            currentURL === 'https://www.humanatic.com/pages/humfun/break_room.cfm?categorize_slow_down' ||
            currentURL === 'https://www.humanatic.com/pages/humfun/noCalls.cfm' ||
            currentURL === 'https://www.humanatic.com/x19/review_process.cfm'
        ) {
            console.warn('Redirecting to review page...');
            window.location.href = 'https://www.humanatic.com/x19/review.cfm';
        }

        // Handle audio duration and refresh if exceeds the limit
        if (currentURL === 'https://www.humanatic.com/x19/review.cfm') {
            const audioElement = document.querySelector('audio');
            if (audioElement && audioElement.readyState >= 2) {
                const duration = audioElement.duration; // Duration in seconds
                if (duration > timeLimit * 60) {
                    console.warn('Audio too long, skipping... Reloading in 3 seconds.');
                    setTimeout(() => {
                        window.location.href = 'https://www.humanatic.com/x19/review.cfm';
                    }, audioReloadTime);
                }
            } else {
                console.log('Audio element not ready or not found.');
            }

            // Display audio time on the web page
            document.getElementsByClassName("duration-holder")[0].setAttribute("style","block");
            document.getElementsByClassName("time-holder-value")[0].setAttribute("style","block");
            document.getElementsByClassName("playback slider")[0].setAttribute("max","2.0");

        }
    }, 2000); // Run checks every 2 seconds

    // Constants moved to the bottom
    const errorReloadTime = 1000; // 1 second for error reload
    const audioReloadTime = 3000; // 3 seconds for audio duration exceed
})();
