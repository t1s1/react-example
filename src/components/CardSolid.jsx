var React = require("react");

var CardSolid = React.createClass({
    
    render: function() {
        
        var textStyle = {
            fontSize: 12
        };

        var boxStyle = {
            color: "white",
            marginTop: 10,
            padding: 16,
            height: 160
        };
        
        if(this.props.color) {
            boxStyle.background = this.props.color;
        };
        
        return (
            <div style={boxStyle} className="text-center">
                <h2>{this.props.title}</h2>
                <span style={textStyle}>{this.props.text}</span>
            </div>
        );
    }
});

module.exports = CardSolid;