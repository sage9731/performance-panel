import React from 'react';

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