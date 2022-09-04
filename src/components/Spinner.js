import React from "react";

const Spinner = ({ text }) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader" style={{ fontSize: "25px" }}>
                {text}
            </div>
        </div>
    );
}

export default Spinner;