/** React-Table-View: thead **/

var React = require("react");

var Thead = React.createClass({
    getInitialState: function(){
        return null;
    },

    render: function(){
        return (
            <thead>
                <tr>
                {
                    this.props.data.map(function(d) {
                        return (
                            <th>{d}</th>
                        );
                    }.bind(this))
                }
                </tr>
            </thead>
        );
    }
});

module.exports = Thead;