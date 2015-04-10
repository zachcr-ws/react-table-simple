/** React-Table-View: td **/

var React = require("react");

var TD = React.createClass({displayName: "TD",
    getInitialState: function(){
        return null;
    },

    render: function(){
        return (
            React.createElement("td", null, this.props.data)
        );
    }
});

module.exports = TD;