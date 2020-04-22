import React from "react";
import "./spoon-rating.css";

const spoonL = require("../../img/icons/1x/spoon-l.png");
const spoonO = require("../../img/icons/1x/spoon-o.png");

const SpoonRating = ({ width, backgroundColor, spoon1, spoon2, spoon3, spoon4, spoon5 }) =>
    <div style={{ width: width, backgroundColor: backgroundColor, spoon1: spoon1, spoon2: spoon2, spoon3: spoon3, spoon4: spoon4, spoon5: spoon5 }} className="spoon_rating" >

        <div className="spoon_rating_inner">
            <div className="spoons"><img src={spoon1} /></div>
            <div className="spoons"><img src={spoon2} /></div>
            <div className="spoons"><img src={spoon3} /></div>
            <div className="spoons"><img src={spoon4} /></div>
            <div className="spoons"><img src={spoon5} /></div>
        </div>

    </div>

SpoonRating.defaultProps = {
    width: "350px",
    backgroundColor: "#ffffff",
    spoon1:spoonO,
    spoon2:spoonO,
    spoon3:spoonO,
    spoon4:spoonO,
    spoon5:spoonL,
}

export default SpoonRating;