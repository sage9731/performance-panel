import React, {useEffect, useState} from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {DatasetComponent, GridComponent} from 'echarts/components';
import {
    CanvasRenderer,
} from 'echarts/renderers';
import {DisplayIcon} from "../../../icon/index.jsx";

echarts.use(
    [LineChart, CanvasRenderer, DatasetComponent, GridComponent]
);

const fpsLevels = [60, 144, 240, 300];

function getDynamicMax(currentMax) {
    for (let level of fpsLevels) {
        if (currentMax <= level) return level; // 返回对应KB值
    }
    return fpsLevels[fpsLevels.length - 1]; // 超过则取最大值
}

function DisplayCard(
    {
        data = {}
    }
) {
    const {
        fps
    } = data;

    const [source, setSource] = useState(Array.from({length: 20}, (_, i) => [i, 0]));

    useEffect(() => {
        const {fps} = data;

        setSource(prev => {
            const [i] = prev.shift();
            prev.push([i, fps]);
            return prev;
        });
    }, [data]);

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
                ['time', 'fps'],
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
            max: value => getDynamicMax(value.max),
            axisLabel: {show: false},
            splitLine: {show: false},
        },
        series: [
            {
                type: 'line',
                name: 'fps',
                itemStyle: {
                    color: '#1AC4FF'
                },
            },
        ],
        animation: false
    };

    return (
        <div className="card card-display">
            <div className="card-header">
                <div className="card-icon"><DisplayIcon/></div>
                <div className="card-title">Display</div>
            </div>
            <div className="card-body">
                <div className="big-item">
                    {fps} FPS
                </div>
                {/*<ReactEChartsCore*/}
                {/*    echarts={echarts}*/}
                {/*    option={option}*/}
                {/*    notMerge={true}*/}
                {/*    lazyUpdate={true}*/}
                {/*/>*/}
            </div>
        </div>
    );
}

export default DisplayCard;