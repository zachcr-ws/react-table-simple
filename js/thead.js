/** React-Table-View: thead **/

var React = require("react");

var Thead = React.createClass({displayName: "Thead",
    getInitialState: function(){
        return null;
    },

    render: function(){
        return (
            React.createElement("thead", null, 
                React.createElement("tr", null, 
                
                    this.props.data.map(function(d) {
                        return (
                            React.createElement("th", null, d)
                        );
                    }.bind(this))
                
                )
            )
        );
    }
});

module.exports = Thead;