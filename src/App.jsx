import {useState, useEffect} from 'react';
import './App.css'
import Header from "./header";
import Main from "./main/index.jsx";
import {ConfigContext} from "./hooks/useConfig.js";
import {convertColor} from './utils/wallpaper.js';
import {setCssVar} from './utils/common.js';


function App() {
    const [config, setConfig] = useState({
        language: 'english',
        host: 'localhost',
        port: 32100,
        dateSeparator: '-',
        timeSeparator: ':',
        themeColor: '#3ada3a',
        audioResponseEnhance: 1,
    });

    useEffect(() => {
        // noinspection JSUnusedGlobalSymbols
        window.wallpaperPropertyListener = {
            applyUserProperties: function (properties) {
                const {
                    language,
                    host,
                    port,
                    themeColor,
                    customFont,
                    clockFont,
                    clockFontSize,
                    dateSeparator,
                    timeSeparator,
                    marginBottom,
                    audioResponseEnhance,
                } = properties;

                setConfig(prevConfig => {
                    if (language) {
                        prevConfig.language = language.value;
                    }
                    if (host) {
                        prevConfig.host = host.value;
                    }
                    if (port) {
                        prevConfig.port = port.value;
                    }
                    if (themeColor) {
                        const tc = convertColor(themeColor);
                        setCssVar('--theme-color', tc);
                        prevConfig.themeColor = tc;
                    }
                    if (customFont) {
                        setCssVar('--custom-font', customFont.value)
                    }
                    if (clockFont) {
                        setCssVar('--clock-font', clockFont.value)
                    }
                    if (clockFontSize) {
                        setCssVar('--clock-font-size', clockFontSize.value + 'rem')
                    }
                    if (dateSeparator) {
                        prevConfig.dateSeparator = dateSeparator.value;
                    }
                    if (timeSeparator) {
                        prevConfig.timeSeparator = timeSeparator.value;
                    }
                    if (marginBottom) {
                        setCssVar('--margin-bottom', marginBottom.value + 'rem')
                    }
                    if (audioResponseEnhance) {
                        prevConfig.audioResponseEnhance = audioResponseEnhance.value;
                    }
                    return {
                        ...prevConfig,
                    }
                })
            },
        };

        return () => {
            window.wallpaperPropertyListener.applyUserProperties = undefined;
        }
    }, [])

    return (
        <ConfigContext.Provider value={config}>
            <Header/>
            <Main/>
        </ConfigContext.Provider>
    )
}

export default App
