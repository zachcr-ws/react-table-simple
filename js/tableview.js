/** @jsx React.DOM */

var React = require('react');
var THEAD = require('./thead');
var TBODY = require('./tbody');

/**
 * Table view module
 * A simple sortable table component.
 **/
var S = String.fromCharCode(2);
var in_array = function(data, e) {
    var r = new RegExp(S + e + S);
    return (r.test(S + data.join(S) + S));
};

var TableView = React.createClass({displayName: "TableView",
    parseFields: function() {
        var data = this.props.data,
            fields = new Array();
        for (var i in data) {
            for (j in data[i]) {
                if (!in_array(fields, j)) {
                    fields.push(j)
                }
            }
        }
        this.setState({fields: fields});
    },
    getInitialState: function() {
        return {
            data: this.props.data,
            fields: [],
            sortField: ''
        }
    },
    componentDidMount: function() {
        this.parseFields();
    },
    componentWillUnmount: function() {

    },
    render: function() {
        return (
            React.createElement("div", {className: "react-table-view"}, 
                React.createElement("table", {className: "pure-table"}, 
                    React.createElement(THEAD, {data: this.state.fields}), 
                    React.createElement(TBODY, {data: this.state.data})
                )
            )
        );
    }
});

module.exports = TableView;