// noinspection JSUnresolvedReference

import React, { useEffect, useState } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { DatasetComponent, GridComponent } from 'echarts/components';
import {
  CanvasRenderer,
} from 'echarts/renderers';
import { AudioIcon, MusicIcon, MusicOffIcon, PauseIcon } from "../../../icon/index.jsx";
import { useConfig } from "../../../hooks/useConfig.js";
import useIntl from "../../../hooks/useIntl.jsx";

echarts.use(
  [LineChart, CanvasRenderer, DatasetComponent, GridComponent]
);

const categoryData = Array.from({ length: 64 }, (_, i) => i);

function AudioCard(
  {
    volume = 0,
  }
) {
  const [audioData, setAudioData] = useState({
    left: [],
    right: [],
  });
  const [mediaProperties, setMediaProperties] = useState({});
  const [mediaThumbnail, setMediaThumbnail] = useState({});
  const [mediaPlayback, setMediaPlayback] = useState({ state: window.wallpaperMediaIntegration?.PLAYBACK_STOPPED });
  const { themeColor, audioResponseEnhance } = useConfig();
  const intl = useIntl();
  
  useEffect(() => {
    if (window.wallpaperRegisterAudioListener) {
      window.wallpaperRegisterAudioListener((audioArray) => {
        if (Array.isArray(audioArray) && audioArray.length === 128) {
          let left = Array(64);
          let right = Array(64);
          let allZero = true;
          for (let i = 0; i < 64; i++) {
            let value = audioArray[i];
            if (value < 0.001) {
              value = 0;
            } else if (audioResponseEnhance) {
              value = value / volume * 100 * audioResponseEnhance;
            }
            left[i] = [value, i];
            allZero = allZero && value === 0;
          }
          if (allZero) {
            left = [];
          }
          allZero = true;
          for (let i = 0; i < 64; i++) {
            let value = audioArray[i + 64];
            if (value < 0.001) {
              value = 0;
            } else if (audioResponseEnhance) {
              value = value / volume * 100 * audioResponseEnhance;
            }
            right[i] = [value, i];
            allZero = allZero && value === 0;
          }
          if (allZero) {
            right = [];
          }
          setAudioData({
            left,
            right,
          });
        } else {
          setAudioData({ left: [], right: [] })
        }
      });
    }
    return () => {
      if (window.wallpaperRegisterAudioListener) {
        window.wallpaperRegisterAudioListener(undefined);
      }
    }
  }, [audioResponseEnhance, volume]);
  
  useEffect(() => {
    if (window.wallpaperRegisterMediaPropertiesListener) {
      window.wallpaperRegisterMediaPropertiesListener(mediaProperties => {
        setMediaProperties(mediaProperties);
      });
    }
    
    if (window.wallpaperRegisterMediaThumbnailListener) {
      window.wallpaperRegisterMediaThumbnailListener(mediaThumbnail => {
        setMediaThumbnail(mediaThumbnail);
      })
    }
    
    if (window.wallpaperRegisterMediaPlaybackListener) {
      window.wallpaperRegisterMediaPlaybackListener(mediaPlayback => {
        setMediaPlayback(mediaPlayback);
      })
    }
    
    return () => {
      if (window.wallpaperRegisterMediaPropertiesListener) {
        window.wallpaperRegisterMediaPropertiesListener(undefined);
      }
      if (window.wallpaperRegisterMediaThumbnailListener) {
        window.wallpaperRegisterMediaThumbnailListener(undefined);
      }
      if (window.wallpaperRegisterMediaPlaybackListener) {
        window.wallpaperRegisterMediaPlaybackListener(undefined);
      }
    }
  }, [])
  
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
        max: 2,
        min: 0,
        axisLabel: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
      },
      {
        gridIndex: 1,
        type: 'value',
        inverse: true,
        max: 2,
        min: 0,
        axisLabel: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
      }
    ],
    yAxis: [
      {
        gridIndex: 0,
        type: 'category',
        data: categoryData,
        axisLabel: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      {
        gridIndex: 1,
        type: 'category',
        data: categoryData,
        axisLabel: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
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
        {mediaPlayback.state === window.wallpaperMediaIntegration?.PLAYBACK_STOPPED ? (
          (audioData.left.length === 0 && audioData.right.length === 0) ? (
            <MusicOffIcon className="music-icon"/>
          ) : (
            <MusicIcon className="music-icon"/>
          )
        ) : (
          <>
            {
              mediaThumbnail.thumbnail && (
                <div className={`media-cover ${mediaPlayback.state === window.wallpaperMediaIntegration?.PLAYBACK_PAUSED ? 'media-cover--pause' : ''}`}>
                  <img src={mediaThumbnail.thumbnail} alt=""/>
                  <PauseIcon className="pause-icon"/>
                </div>
              )
            }
            {
              mediaProperties.title && (
                <div className="media-name">
                  <span>{mediaProperties.title}</span>
                  {mediaProperties.artist && <span> - {mediaProperties.artist}</span>}
                </div>
              )
            }
          </>
        )}
      </div>
    </div>
  );
}

export default AudioCard;
