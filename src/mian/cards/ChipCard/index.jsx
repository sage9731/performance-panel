import React from 'react';
import {CpuIcon, GpuIcon} from "../../../icon/index.jsx";

function ChipCard(
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
        power,
        fan,
    } = data;

    return (
        <div className="card card-chip">
            <div className="card-header">
                <div className="card-icon">{type === 'CPU' ? <CpuIcon /> : <GpuIcon/>}</div>
                <div className="card-title">{type}</div>
            </div>
            <div className="card-body">
                <div className="big-item">{load}%</div>
                <div className="big-item">{temperature}<span className="theme-color">℃</span></div>
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
                    <div className="small-item">
                        <span>Fan</span>
                        <span>{fan > 0 ? `${fan} RPM` : 'off'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChipCard;