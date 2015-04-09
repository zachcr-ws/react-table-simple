/** React-Table-View: td **/

var React = require("react");

var TD = React.createClass({displayName: "TD",
    getInitialState: function(){
        return null;
    },

    componentDidMount: function(){

    },

    componentWillMount: function(){

    },

    render: function(){
        return (
            React.createElement("td", null, this.props.data)
        );
    }
});

module.exports = TD;