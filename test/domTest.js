/**
 * @project chaos
 * @package
 * @file domHelper
 * Created by <a href="mailto:jincheng.jcs@gmail.com">瑾诚</a> on 2015/6/9.
 **/
'use strict';

module.exports = function(markup) {
    if (typeof document !== 'undefined') return;
    var jsdom = require('jsdom').jsdom;
    global.document = jsdom(markup || '');
    global.window = document.parentWindow;
    global.navigator = {
        userAgent: 'node.js'
    };
};
