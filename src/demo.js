/**
 * @project chaos
 * @package
 * @file demo.js
 * Created by <a href="mailto:jincheng.jcs@gmail.com">瑾诚</a> on 2015/6/9.
 **/
'use strict';

import React from 'react/addons';
import Temp from './demo.jsx';

let Demo = React.createClass({
    render: Temp,
    getDefaultProps() {
        return {
            mapId: 'map'
        };
    },
    getInitialState() {
        return {
            mapId: 'map'
        };
    },
    getId() {
        return this.props.mapId;
    }
});

export default Demo;
