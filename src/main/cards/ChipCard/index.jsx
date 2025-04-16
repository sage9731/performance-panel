import React from 'react';
import {CpuIcon, GpuIcon} from "../../../icon/index.jsx";
import useIntl from "../../../hooks/useIntl.jsx";

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

    const intl = useIntl();

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
                        <span>{intl('clock')}</span>
                        <span>{clock > 1000 ? `${(clock / 1000).toFixed(2)} Ghz` : `${clock} Mhz`}</span>
                    </div>
                    <div className="small-item">
                        <span>{intl('voltage')}</span>
                        <span>{voltage} V</span>
                    </div>
                    <div className="small-item">
                        <span>{intl('power')}</span>
                        <span>{power} W</span>
                    </div>
                    <div className="small-item">
                        <span>{intl('fan')}</span>
                        <span>{fan > 0 ? `${fan} RPM` : 'off'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChipCard;