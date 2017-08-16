/*----------------------------------------------------------------------------*\
 # Copyright 2017, BuzzingPixel, LLC

 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the Apache License 2.0.
 # http://www.apache.org/licenses/LICENSE-2.0
 \*----------------------------------------------------------------------------*/

// Make sure FAB is defined
window.FABNAMESPACE = window.FABNAMESPACE || 'FAB';
window[window.FABNAMESPACE] = window.window[window.FABNAMESPACE] || {};

(function(F) {
    'use strict';

    // Set up some variables
    var split;
    var queryObject = {};
    var queryArray = [];

    // Get query string
    var queryString = window.location.search;
    queryString = queryString.split('?')[1];

    // Get hash
    var hash = window.location.hash;
    hash = hash.split('#')[1];

    // If there is a query string
    if (queryString) {
        // Split on the ampersand seperator
        queryArray = queryString.split('&');

        // Iterate over number of items in qs
        for (var i = 0; i < queryArray.length; i++) {
            // Split the item
            split = queryArray[i].split('=');

            // Add the item to the qObj
            queryObject[split[0]] = split[1];
        }
    }

    /**
     * URL API
     */
    F.url = {
        /**
         * Get query string
         */
        getQueryString: function() {
            return queryString;
        },

        /**
         * Get query array
         */
        getQueryArray: function() {
            return queryArray;
        },

        /**
         * Get query object
         */
        getQueryObject: function() {
            return queryObject;
        },

        /**
         * Get specific query item
         *
         * @param {String} key
         */
        getQueryItem: function(key) {
            return queryObject[key] || null;
        },

        /**
         * Get hash
         */
        getHash: function() {
            return hash || null;
        }
    };
})(window.FAB);
