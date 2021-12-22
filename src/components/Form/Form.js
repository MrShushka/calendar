import React from "react";
import  moment from 'moment';

const Form = (props) => {
    console.log(props.day)
    return (
        <div>
            <input type = 'text' value = {props.day.format("D")}/>
            <input type = 'text' value = {props.day.format("MMMM")}/>
        </div>
    )
}

export default Form;