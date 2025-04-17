// noinspection JSUnresolvedReference

import React, {useEffect, useState} from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {DatasetComponent, GridComponent} from 'echarts/components';
import {
    CanvasRenderer,
} from 'echarts/renderers';
import {AudioIcon} from "../../../icon/index.jsx";
import {useConfig} from "../../../hooks/useConfig.js";
import useIntl from "../../../hooks/useIntl.jsx";

echarts.use(
    [LineChart, CanvasRenderer, DatasetComponent, GridComponent]
);

const categoryData = Array.from({length: 64}, (_, i) => i);

function AudioCard() {
    const [audioData, setAudioData] = useState({
        left: Array.from({length: 64}, (_, i) => [0.01, i]),
        right: Array.from({length: 64}, (_, i) => [0.01, i]),
    });
    const {themeColor} = useConfig();
    const intl = useIntl();

    useEffect(() => {
        let timer = undefined;
        if (window.wallpaperRegisterAudioListener) {
            window.wallpaperRegisterAudioListener((audioArray) => {
                if (Array.isArray(audioArray) && audioArray.length === 128) {
                    const left = Array(64);
                    const right = Array(64);
                    for (let i = 0; i < 64; i++) {
                        left[i] = [Math.max(audioArray[i], 0.01), i];
                    }
                    for (let i = 0; i < 64; i++) {
                        right[i] = [Math.max(audioArray[i + 64], 0.01), i];
                    }
                    setAudioData({
                        left,
                        right,
                    })
                } else {
                    setAudioData({left: [], right: []})
                }
            });
        } else {
            timer = setInterval(() => {
                setAudioData({
                    left: Array.from({length: 64}, (_, i) => [Math.random(), i]),
                    right: Array.from({length: 64}, (_, i) => [Math.random(), i]),
                })
            }, 300);
        }

        return () => {
            if (window.wallpaperRegisterAudioListener) {
                window.wallpaperRegisterAudioListener(undefined);
            }
            if (timer) {
                clearInterval(timer);
            }
        }
    }, []);


    const option = {
        grid: [
            {
                show: false,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
            },
            {
                show: false,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
            }
        ],
        xAxis: [
            {
                gridIndex: 0,
                type: 'value',
                max: 2.5,
                min: 0,
                axisLabel: {show: false},
                splitLine: {show: false},
                axisTick: {show: false},
            },
            {
                gridIndex: 1,
                type: 'value',
                inverse: true,
                max: 2.5,
                min: 0,
                axisLabel: {show: false},
                splitLine: {show: false},
                axisTick: {show: false},
            }
        ],
        yAxis: [
            {
                gridIndex: 0,
                type: 'category',
                data: categoryData,
                axisLabel: {show: false},
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            {
                gridIndex: 1,
                type: 'category',
                data: categoryData,
                axisLabel: {show: false},
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
            }
        ],
        series: [
            {
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: audioData.left,
                symbol: 'none',
                smooth: false,
                itemStyle: {
                    color: themeColor,
                    opacity: 0.6,
                },
                areaStyle: {},
            },
            {
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: audioData.right,
                symbol: 'none',
                smooth: false,
                itemStyle: {
                    color: themeColor,
                    opacity: 0.6,
                },
                areaStyle: {},
            },
        ],
        animation: false
    };

    return (
        <div className="card card-audio">
            <div className="card-header">
                <div className="card-icon"><AudioIcon/></div>
                <div className="card-title">{intl('audio')}</div>
            </div>
            <div className="card-body">
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

export default AudioCard;