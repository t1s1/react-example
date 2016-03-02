var React = require("react");
var CardSolid = require("./CardSolid.jsx");
var CardColorTop = require("./CardColorTop.jsx");

var BlockRight = React.createClass({
    
    render: function() {
        
        return(
            <div className="col-sm-3 hidden-xs">
                <CardSolid title="18" text="Paris" color="orange"/>
                <CardColorTop title="New Visitors" text="1.5k" color="cornflower"/>
                <CardColorTop title="Bounce rate" text="58%" color="lavender"/>
                <CardColorTop title="Searches" text="28%" color="tomato"/>
                <CardColorTop title="Traffic" text="140.5kb" color="lime"/>
            </div>
        );
    }
});

module.exports = BlockRight;