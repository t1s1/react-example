var React = require("react");

var CardColorTop = React.createClass({
    
    render: function() {

        var titleStyle = {
            fontSize: 12
        };

        var boxStyle = {
            color: "white",
            marginTop: 10,
            height: 160,
            borderColor: "#DDD"
        };
        
        var headingStyle = {
            borderColor: "#DDD"
        };
        
        if(this.props.color) {
            headingStyle.background = this.props.color;
        };
        
        return (
            <div style= {boxStyle} className="panel panel-primary">
                <div style={headingStyle} className="panel-heading text-left">
                    <span style={titleStyle}>{this.props.title}</span>
                    <h4>{this.props.text}</h4> 
                </div>
                <div className="panel-body">
                             
                </div>
            </div>
        );
    }
});

module.exports = CardColorTop;