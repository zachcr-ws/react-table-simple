/** React-Table-View: td **/

var React = require("react");

var TD = React.createClass({
    getInitialState: function(){
        return null;
    },

    render: function(){
        return (
            <td>{this.props.data}</td>
        );
    }
});

module.exports = TD;