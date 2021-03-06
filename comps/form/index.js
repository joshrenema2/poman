import React from "react";
import "./form.css";

const x = require("../../img/icons/x-o.svg");
const check = require("../../img/icons/check-g.svg");


const Form = ({ width, img }) => <div style={{ width: width }} className="form">

    <input placeholder="Name" className="form_input"></input>
    <div className="form_icon" ><img src={img} /></div>

</div>
Form.defaultProps = {
    width: "200px",
    img:x,
}

export default Form;
