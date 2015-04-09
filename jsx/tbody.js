/** React-Table-View: thead **/

var React = require("react");
var TR = require("./tr")

var Tbody = React.createClass({
    parseData : function(){
        var data = this.props.data,
            result = [];
        for(var i in data){
            var temp = [];
            for(var j in data[i]){
                temp.push(data[i][j]);
            }
            result.push(temp);
        }
        this.setState({data: result});
    },
    getInitialState: function(){
        return {
            data: []
        };
    },
    componentDidMount: function(){
        this.parseData();
    },
    componentWillMount: function(){
    },

    render: function(){
        return (
            <tbody>
            {
                this.state.data.map(function(d) {
                    return (
                        <TR data={d}/>
                    );
                }.bind(this))
            }
            </tbody>
        );
    }
});

module.exports = Tbody;