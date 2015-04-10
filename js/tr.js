/** React-Table-View: tr **/
var React = require("react");
var TD = require("./td");

var TR = React.createClass({displayName: "TR",
    getInitialState: function(){
        return null;
    },

    render: function(){
        return (
            React.createElement("tr", null, 
                this.props.data.map(function(v){
                    return (React.createElement(TD, {data: v}));
                }.bind(this))
            )
        );
    }
});

module.exports = TR;