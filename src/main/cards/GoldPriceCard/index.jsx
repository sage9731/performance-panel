import React, {useEffect, useState} from 'react';
import useIntl from "../../../hooks/useIntl.jsx";
import {GoldIcon} from "../../../icon/index.jsx";
import {useRequest} from "ahooks";
import {getGoldPrice} from "../../../api/index.js";
import {Tooltip} from "antd";

function GoldPriceCard() {
    const intl = useIntl();
    const [price, setPrice] = useState({});

    const {data} = useRequest(getGoldPrice, {
        pollingInterval: 60 * 1000,
        pollingWhenHidden: true,
    });

    useEffect(() => {
        if (data) {
            const {status, data: {code, data: {SH = [], UpTime} = {}} = {}} = data;
            if (status === 200 && code === 200) {
                if (SH.length > 1) {
                    const {BP, High, Low, SP} = SH[1];
                    setPrice({
                        BP,
                        SP,
                        High,
                        Low,
                        UpTime,
                    });
                }
            }
        }
    }, [data])

    return (
        <div className="card card-gold">
            <div className="card-header">
                <div className="card-icon"><GoldIcon/></div>
                <div className="card-title">
                    <Tooltip placement="top" title={`${intl('updateTime')} ${price['UpTime']}`}>
                        {intl('goldPrice')}
                    </Tooltip>
                </div>
            </div>
            <div className="card-body">
                <div className="small-item">
                    <span>{intl('buyPrice')}</span>
                    <span>{price['BP'] || '--'}</span>
                </div>
                <div className="small-item">
                    <span>{intl('sellPrice')}</span>
                    <span>{price['SP'] || '--'}</span>
                </div>
                <div className="small-item">
                    <span>{intl('highPrice')}</span>
                    <span>{price['High'] || '--'}</span>
                </div>
                <div className="small-item">
                    <span>{intl('lowPrice')}</span>
                    <span>{price['Low'] || '--'}</span>
                </div>
            </div>
        </div>
    );
}

export default GoldPriceCard;