import React from 'react';

function VolumeCard(
    {
        data = {}
    }
) {
    const { volume = 0 } = data;
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">Volume</div>
            </div>
            <div className="card-body">
                <div className="big-item">
                    {volume}%
                </div>
            </div>
        </div>
    );
}

export default VolumeCard;