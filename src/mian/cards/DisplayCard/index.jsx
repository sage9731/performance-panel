import React from 'react';
import {DisplayIcon} from "../../../icon/index.jsx";

function DisplayCard(
    {
        data = {}
    }
) {
    const {
        fps
    } = data;

    return (
        <div className="card display-chip">
            <div className="card-header">
                <div className="card-icon"><DisplayIcon/></div>
                <div className="card-title">Display</div>
            </div>
            <div className="card-body">
                <div className="big-item">
                    {fps} FPS
                </div>
            </div>
        </div>
    );
}

export default DisplayCard;