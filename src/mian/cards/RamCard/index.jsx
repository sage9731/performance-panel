import React from 'react';

function RamCard(
    {
        type,
        data = {},
    }
) {
    const { load = 0, clock = 0, free = 0, used = 0 } = data;

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">{type}</div>
            </div>
            <div className="card-body">
                <div className="small-item">
                    <span>Load</span>
                    <span>{load}%</span>
                </div>
                <div className="small-item">
                    <span>Clock</span>
                    <span>{clock} MHz</span>
                </div>
                <div className="small-item">
                    <span>Used</span>
                    <span>{used} GB</span>
                </div>
                <div className="small-item">
                    <span>Free</span>
                    <span>{free} GB</span>
                </div>
            </div>
        </div>
    );
}

export default RamCard;