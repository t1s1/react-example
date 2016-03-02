var React = require("react");

var CardBlank = React.createClass({
    
    render: function() {
        
        var textStyle = {
            fontSize: 12,
            color: "#BBB"
        };
        
        return (
            <div className="text-center col-sm-4">
                <h4>{this.props.title}</h4>
                <span style={textStyle}>{this.props.text}</span>
            </div>
        );
    }
});

module.exports = CardBlank;