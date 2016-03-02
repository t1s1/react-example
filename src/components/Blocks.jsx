var React = require("react");
var BlockRight = require("./BlockRight.jsx");
var BlockLeft = require("./BlockLeft.jsx");

var Blocks = React.createClass({
    
    render: function() {
        
        return(
            <div className="row">
                <BlockLeft className = "col-sm-9 hidden-xs" />
                <BlockRight className = "col-sm-3" />
            </div>
        );
    }
});

module.exports = Blocks;