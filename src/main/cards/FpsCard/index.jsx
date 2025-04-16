import React, { useEffect, useState } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { DatasetComponent, GridComponent } from 'echarts/components';
import {
    CanvasRenderer,
} from 'echarts/renderers';
import { DisplayIcon } from "../../../icon/index.jsx";
import {useConfig} from "../../../hooks/useConfig.js";
import useIntl from "../../../hooks/useIntl.jsx";

echarts.use(
    [LineChart, CanvasRenderer, DatasetComponent, GridComponent]
);

const fpsLevels = [60, 144, 240, 300];

function getDynamicMax(currentMax) {
    for (let level of fpsLevels) {
        if (currentMax <= level) return level;
    }
    return fpsLevels[fpsLevels.length - 1];
}

function FpsCard(
    {
        data = {},
        n = 50
    }
) {
    const { themeColor } = useConfig();
    const {
        fps
    } = data;

    const [source, setSource] = useState(Array.from({ length: n }, (_, i) => [i, 0]));
    const intl = useIntl();

    useEffect(() => {
        const { fps } = data;

        setSource(prev => {
            const [i] = prev.shift();
            prev.push([i + n, fps]);
            return prev;
        });
    }, [data, n]);

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
            axisLabel: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
        },
        yAxis: {
            type: 'value',
            max: value => getDynamicMax(value.max),
            axisLabel: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
        },
        series: [
            {
                type: 'line',
                name: 'fps',
                itemStyle: {
                    color: themeColor
                },
                smooth: 0.4,
                symbol: 'none',
            },
        ],
        animation: false
    };

    return (
        <div className="card card-display">
            <div className="card-header">
                <div className="card-icon"><DisplayIcon /></div>
                <div className="card-title">{intl('fps')}</div>
            </div>
            <div className="card-body">
                <ReactEChartsCore
                    echarts={echarts}
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                />
                <div className="big-item">
                    {fps > 0 ? fps : ""}
                </div>
            </div>
        </div>
    );
}

export default FpsCard;