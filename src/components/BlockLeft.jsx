var React = require("react");
var CardWhite = require("./CardWhite.jsx");
var CardDarkBottom = require("./CardDarkBottom.jsx");

var BlockLeft = React.createClass({
    
    render: function() {
        
        return(
            <div className="col-sm-9">
                <div className="row">
                    <CardWhite title="20" text="New followers added this month" />
                    <CardWhite title="$1250" text="Average Monthly Income" />
                    <CardWhite title="$13865" text="yearly Income Goal" />
                </div>
                <div className="row">
                    <CardDarkBottom color="lavender"/>
                    <CardDarkBottom color="CornflowerBlue" />
                    <CardDarkBottom color="yellow" />
                </div>
            </div>
            
        );
    }
});

module.exports = BlockLeft;