import {useConfig} from "./useConfig.js";
import React, {useMemo} from "react";

const translators = {
    english: {
        usage: (<span>AIDA64 LCD Remote Sensor not available.
            Please visit&nbsp;
            <a href="https://github.com/sage9731/performance-panel" target="_blank">
                https://github.com/sage9731/performance-panel
            </a>&nbsp;
            and see how it works.
        </span>),
        temperature: 'Temperature',
        clock: 'Clock',
        voltage: 'Voltage',
        power: 'Power',
        fan: 'Fan',
        load: 'Load',
        used: 'Used',
        free: 'Free',
        upload: 'Upload',
        download: 'Download',
        ram: 'RAM',
        vram: 'VRAM',
        network: 'Network',
        fps: 'FPS',
        audio: 'Audio',
        volume: 'Volume',
        uptime: 'Uptime',
        goldPrice: 'Gold Price',
        updateTime: 'Update Time',
        buyPrice: 'Buy Price',
        sellPrice: 'Sell Price',
        highPrice: 'High Price',
        lowPrice: 'Low Price',
    },
    chinese: {
        usage: (<span>AIDA64 LCD Remote Sensor 不可用。
            请访问&nbsp;
            <a href="https://github.com/sage9731/performance-panel" target="_blank">
                https://github.com/sage9731/performance-panel
            </a>&nbsp;
            并查看安装使用说明。
        </span>),
        temperature: '温度',
        clock: '频率',
        voltage: '电压',
        power: '功耗',
        fan: '风扇',
        load: '负载',
        used: '已使用',
        free: '空闲',
        upload: '上传',
        download: '下载',
        ram: '内存',
        vram: '显存',
        network: '网络',
        fps: '帧数',
        audio: '音频',
        volume: '音量',
        uptime: '已运行',
        goldPrice: '黄金价格',
        updateTime: '更新时间',
        buyPrice: '买入价格',
        sellPrice: '卖出价格',
        highPrice: '最高价',
        lowPrice: '最低价',
    }
};

const useIntl = () => {
    const {language} = useConfig();
    return useMemo(() => (fragment) => {
        return translators[language][fragment] || '*';
    }, [language]);
}

export default useIntl;
