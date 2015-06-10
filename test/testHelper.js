/**
 * Created by shuyuanhao on 15/6/9.
 */

'use strict';

import localStorage from 'localStorage';
import {jsdom} from 'jsdom';

module.exports = function(markup) {
     // init jsdom
    global.document = jsdom(markup||'');
    global.window = global.document.defaultView;
    global.navigator = global.window.navigator;
    // local storage polyfill
    global.window.localStorage = localStorage;
    global.localStorage = localStorage;
    // import react after dom
    const React = require('react/addons');
    before(function() {
        // expose react and testutils
        this.React = React;
        this.TestUtils = React.addons.TestUtils;
    });
    beforeEach(function() {
         // create container
        this.container = global.window.document.createElement('div');
        global.document.body.appendChild(this.container);
    });
    afterEach(function(done) {
        // clean jsdom
        this.React.unmountComponentAtNode(this.container);
        global.document.body.removeChild(this.container);
        // timeout
        setTimeout(done);
    });
}
