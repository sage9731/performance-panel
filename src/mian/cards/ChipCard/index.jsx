import React from 'react';

function Chip(
    {
        type,
        data = {}
    }
) {
    const {
        load,
        temperature,
        clock,
        voltage,
        power
    } = data;

    return (
        <div className="card card-chip">
            <div className="card-header">
                <div className="card-title">{type}</div>
            </div>
            <div className="card-body">
                <div className="big-item">{load}%</div>
                <div className="big-item">{temperature}<span className="tc">℃</span></div>
                <div>
                    <div className="small-item">
                        <span>Clock</span>
                        <span>{clock > 1000 ? `${(clock / 1000).toFixed(2)} Ghz` : `${clock} Mhz`}</span>
                    </div>
                    <div className="small-item">
                        <span>Voltage</span>
                        <span>{voltage} V</span>
                    </div>
                    <div className="small-item">
                        <span>Power</span>
                        <span>{power} W</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chip;