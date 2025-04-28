import React, { useEffect, useMemo, useState } from 'react';
import { CpuIcon, GpuIcon } from "../../../icon/index.jsx";
import useIntl from "../../../hooks/useIntl.jsx";
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { DatasetComponent, GridComponent } from 'echarts/components';
import {
  CanvasRenderer,
} from 'echarts/renderers';
import { useConfig } from "../../../hooks/useConfig.js";

echarts.use(
  [LineChart, BarChart, CanvasRenderer, DatasetComponent, GridComponent],
);

const fpsLevels = [120, 240, 300];

function getDynamicMax(currentMax) {
  for (let level of fpsLevels) {
    if (currentMax <= level) return level;
  }
  return fpsLevels[fpsLevels.length - 1];
}

const n = 30;

function ChipCard(
  {
    type,
    data = {}
  }
) {
  const { themeColor } = useConfig();
  const {
    uptime,
    load,
    temperature,
    clock,
    power,
    fan,
    fps,
  } = data;
  const intl = useIntl();
  const [dataSource, setDataSource] = useState(Array.from({ length: n }, (_, i) => [i, 0, 0]));
  
  useEffect(() => {
    const { load = 0, fps = 0, timestamp = Date.now() } = data;
    setDataSource(prev => {
      const dataSource = prev.slice(1);
      dataSource.push([timestamp, load, fps]);
      return dataSource;
    })
  }, [type, data]);
  
  const option = useMemo(() => {
    const fps = dataSource[dataSource.length - 1][2];
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
      dataset: {
        source: [
          ['time', 'load', 'fps'],
          ...dataSource
        ]
      },
      xAxis: [
        {
          gridIndex: 0,
          type: 'category',
          axisLabel: { show: false },
          splitLine: { show: false },
          axisTick: { show: false },
        },
        {
          gridIndex: 1,
          type: 'category',
          axisLabel: { show: false },
          splitLine: { show: false },
          axisTick: { show: false },
        }
      ],
      yAxis: [
        {
          gridIndex: 0,
          type: 'value',
          max: 110,
          min: 0,
          axisLabel: { show: false },
          splitLine: { show: false },
          axisTick: { show: false },
        },
        {
          gridIndex: 1,
          type: 'value',
          max: value => getDynamicMax(value.max),
          axisLabel: { show: false },
          splitLine: { show: false },
          axisTick: { show: false },
        }
      ],
      series: [
        {
          type: 'line',
          name: 'load',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            color: themeColor
          },
          lineStyle: {
            shadowColor: 'rgba(0,0,0,0.3)', // 阴影颜色（推荐半透明色）
            shadowBlur: 10,                 // 模糊程度，值越大阴影越扩散[1,6](@ref)
            shadowOffsetX: 0,               // X轴偏移量（正值右偏，负值左偏）[2](@ref)
            shadowOffsetY: 8                // Y轴偏移量（正值下偏，负值上偏）[6](@ref)
          },
          smooth: 0.5,
          symbol: 'none',
        },
        {
          type: 'bar',
          name: 'fps',
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            color: '#eee'
          },
          barWidth: '50%',
        },
      ],
      animation: false
    };
    if (type !== 'GPU') {
      option.grid.pop();
      option.xAxis.pop();
      option.yAxis.pop();
      option.series.pop();
    }
    if (parseInt(fps, 10) === 0) {
      option.graphic = [];
    }
    return option;
  }, [type, dataSource, themeColor]);
  
  return (
    <div className="card card-chip">
      <div className="card-header">
        <div className="card-icon">{type === 'CPU' ? <CpuIcon/> : <GpuIcon/>}</div>
        <div className="card-title">{type}</div>
        {(type === 'CPU' && !!uptime) && (
            <div className="card-extra">{intl('uptime')} {uptime.replace(':', 'h').replace(/\s/g, '')}m</div>
        )}
        {(type === 'GPU' && fps > 0) && (
          <div className="card-extra">{fps} FPS</div>
        )}
      </div>
      <div className="card-body">
        <div>
          <div className="small-item">
            <span>{intl('clock')}</span>
            <span>{clock > 1000 ? `${(clock / 1000).toFixed(2)} Ghz` : `${clock} Mhz`}</span>
          </div>
          <div className="small-item">
            <span>{intl('power')}</span>
            <span>{power} W</span>
          </div>
          <div className="small-item">
            <span>{intl('temperature')}</span>
            <span>{temperature}℃</span>
          </div>
          <div className="small-item">
            <span>{intl('fan')}</span>
            <span>{fan > 0 ? `${fan} RPM` : 'off'}</span>
          </div>
        </div>
        <div className="big-item">
          <span>{load}<span className="theme-color">%</span></span>
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

export default ChipCard;
