var React = require("react");

var CardSolid = React.createClass({
    
    render: function() {
        
        var textStyle = {
            fontSize: 12,
            color: "#BBB"
        };

        var boxStyle = {
            padding: 15
        };
        
        var panelStyle = {
            color: "#333",
            height: 160,
            padding: 15
        };
        
        if(this.props.color) {
            boxStyle.background = this.props.color;
        };
        
        return (
            <div style={boxStyle} className="col-sm-4">
                <div style={panelStyle} className="text-left  panel panel-default">
                    <h4>{this.props.title}</h4>
                    <span style={textStyle}>{this.props.text}</span>
                </div>
            </div>
        );
    }
});

module.exports = CardSolid;