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
                    if (language?.value !== undefined) {
                        prevConfig.language = language.value;
                    }
                    if (host?.value !== undefined) {
                        prevConfig.host = host.value;
                    }
                    if (port?.value !== undefined) {
                        prevConfig.port = port.value;
                    }
                    if (themeColor?.value !== undefined) {
                        const tc = convertColor(themeColor);
                        setCssVar('--theme-color', tc);
                        prevConfig.themeColor = tc;
                    }
                    if (customFont?.value !== undefined) {
                        setCssVar('--custom-font', customFont.value)
                        setCssVar('--clock-font', customFont.value)
                    } else {
                        setCssVar('--custom-font', '')
                        setCssVar('--clock-font', '')
                    }
                    if (clockFont?.value !== undefined) {
                        setCssVar('--clock-font', clockFont.value)
                    } else {
                        setCssVar('--clock-font', '')
                    }
                    if (clockFontSize?.value !== undefined) {
                        setCssVar('--clock-font-size', clockFontSize.value + 'rem')
                    }
                    if (dateSeparator?.value !== undefined) {
                        prevConfig.dateSeparator = dateSeparator.value;
                    }
                    if (timeSeparator?.value !== undefined) {
                        prevConfig.timeSeparator = timeSeparator.value;
                    }
                    if (marginBottom?.value !== undefined) {
                        setCssVar('--margin-bottom', marginBottom.value + 'rem')
                    } else {
                        setCssVar('--margin-bottom', 0)
                    }
                    if (audioResponseEnhance?.value !== undefined) {
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
