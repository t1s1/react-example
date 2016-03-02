var React = require("react");
var CardBlank = require("./CardBlank.jsx");

var CardColorTop = React.createClass({
    
    render: function() {
        
        var boxStyle = {
            color: "white",
            marginTop: 10,
            padding: 0,
            height: 160,
            borderColor: "#DDD"
        };
        
        var bodyStyle = {
            
        };
        
        
        var footerStyle = {
            borderColor: "#DDD",
            background: "#666",
            position: "absolute",
            width: "100%",
            bottom: 0,
            margin: 0
        };
        
        if(this.props.color) {
            boxStyle.background = this.props.color;
        };
        
        return (
            <div style= {boxStyle} className="panel panel-primary col-sm-12">
                <div style={bodyStyle} className="panel-body">
                    
                </div>
                <div style={footerStyle} className="row panel-footer">
                    <CardBlank title = "15080" text = "Shot views" />
                    <CardBlank title = "12000" text = "Likes" />
                    <CardBlank title = "5100" text = "Comments" />
                </div>
            </div>
        );
    }
});

module.exports = CardColorTop;