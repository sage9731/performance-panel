import React, {useMemo} from 'react';
import {NetworkIcon} from "../../../icon/index.jsx";

function NetworkCard(
    {
        data = {}
    }
) {
    const {download = 0, upload = 0} = data;

    const format = useMemo(() => (val) => {
        if (val >= 1024) {
            return (val / 1024).toFixed(2) + ' Mb/s';
        }
        return val.toFixed(1) + ' Kb/s';
    }, [])

    return (
        <div className="card card-network">
            <div className="card-header">
                <div className="card-icon"><NetworkIcon/></div>
                <div className="card-title">Network</div>
            </div>
            <div className="card-body">
                <div className="small-item">
                    <span>Upload</span>
                    <span>{format(upload)}</span>
                </div>
                <div className="small-item">
                    <span>Download</span>
                    <span>{format(download)}</span>
                </div>
            </div>
        </div>
    );
}

export default NetworkCard;