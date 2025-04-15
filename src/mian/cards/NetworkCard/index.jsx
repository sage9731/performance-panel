import React, {useEffect, useMemo, useState} from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {BarChart} from 'echarts/charts';
import {DatasetComponent, GridComponent} from 'echarts/components';
import {
    CanvasRenderer,
} from 'echarts/renderers';
import {NetworkIcon} from "../../../icon/index.jsx";

echarts.use(
    [BarChart, CanvasRenderer, DatasetComponent, GridComponent]
);

const speedLevels = [0.05, 0.5, 3, 8, 15, 70, 120].map(v => v * 1024); // 转换为KB/s单位的阈值
function calcDynamicMax(currentMax) {
    for (let level of speedLevels) {
        if (currentMax <= level) return level; // 返回对应KB值
    }
    return speedLevels[speedLevels.length - 1]; // 超过则取最大值
}

function NetworkCard(
    {
        config = {},
        data = {},
        n = 40
    }
) {
    const { themeColor } = config;
    
    const {download = 0, upload = 0} = data;
    
    const [dynamicMax, setDynamicMax] = useState(1024);
    const [source, setSource] = useState(Array.from({length: n}, (_, i) => [i, 0, 0]))

    useEffect(() => {
        let {download, upload} = data;
        if (download < 1) {
            download = 0;
        }

        if (upload < 1) {
            upload = 0;
        }

        setSource(prev => {
            const [i] = prev.shift();
            prev.push([i + n, upload, download]);

            let max = Math.max(upload, download)
            for(let j = prev.length -1; j > prev.length - 15; j--) {
                max = Math.max(max, prev[j][1], prev[j][2])
            }
            setDynamicMax(calcDynamicMax(max));
            return prev;
        })
    }, [data]);

    const format = useMemo(() => (val) => {
        if (val >= 1024) {
            return (val / 1024).toFixed(2) + ' Mb/s';
        }
        return val.toFixed(1) + ' Kb/s';
    }, []);

    const option = {
        grid: {
            show: false,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
        },
        dataset: {
            source: [
                ['time', 'upload', 'download'],
                ...source
            ]
        },
        xAxis: {
            type: 'category',
            axisLabel: {show: false},
            splitLine: {show: false},
            axisTick: {show: false},
        },
        yAxis: {
            type: 'value',
            max: dynamicMax,
            axisLabel: {show: false},
            splitLine: {show: false},
        },
        series: [
            {
                type: 'bar',
                name: 'upload',
                itemStyle: {
                    color: '#E1E1E2'
                },
            },
            {
                type: 'bar',
                name: 'download',
                itemStyle: {
                    color: themeColor
                },
            },
        ],
        animation: false
    };

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
                <ReactEChartsCore
                    echarts={echarts}
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </div>
        </div>
    );
}

export default NetworkCard;