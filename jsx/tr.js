/** React-Table-View: tr **/
var React = require("react");
var TD = require("./td");

var TR = React.createClass({
    getInitialState: function(){
        return null;
    },

    componentDidMount: function(){

    },

    componentWillMount: function(){

    },

    render: function(){
        return (
            <tr>{
                this.props.data.map(function(v){
                    return (<TD data={v}/>);
                }.bind(this))
            }</tr>
        );
    }
});

module.exports = TR;