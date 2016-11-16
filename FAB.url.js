/**
 * Fab URL
 *
 * @package FAB.url
 * @author TJ Draper <tj@buzzingpixel.com>
 * @version 1.0.0
 */

// Make sure FAB is defined
window.FAB = window.FAB || {};

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
