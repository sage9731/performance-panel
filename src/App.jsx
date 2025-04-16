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
        themeColor: '#3ada3a'
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
                    font,
                    clockFont,
                    clockFontSize,
                    dateSeparator,
                    timeSeparator,
                    marginBottom,
                } = properties;

                setConfig(prevConfig => {
                    if (language?.value) {
                        prevConfig.language = language.value;
                    }
                    if (host?.value) {
                        prevConfig.host = host.value;
                    }
                    if (port?.value) {
                        prevConfig.port = port.value;
                    }
                    if (themeColor?.value) {
                        const tc = convertColor(themeColor);
                        setCssVar('--theme-color', tc);
                        prevConfig.themeColor = tc;
                    }
                    if (font?.value) {
                        setCssVar('--custom-font', font.value)
                        setCssVar('--clock-font', font.value)
                    } else {
                        setCssVar('--custom-font', '')
                        setCssVar('--clock-font', '')
                    }
                    if (clockFont?.value) {
                        setCssVar('--clock-font', clockFont.value)
                    } else {
                        setCssVar('--clock-font', '')
                    }
                    if (clockFontSize?.value) {
                        setCssVar('--clock-font-size', clockFontSize.value + 'rem')
                    }
                    if (dateSeparator?.value) {
                        prevConfig.dateSeparator = dateSeparator.value;
                    }
                    if (timeSeparator?.value) {
                        prevConfig.timeSeparator = timeSeparator.value;
                    }
                    if (marginBottom?.value) {
                        setCssVar('--margin-bottom', marginBottom.value + 'rem')
                    } else {
                        setCssVar('--margin-bottom', 0)
                    }
                    return {
                        ...prevConfig,
                    }
                })
            },
        };


    }, [])

    return (
        <ConfigContext.Provider value={config}>
            <Header/>
            <Main/>
        </ConfigContext.Provider>
    )
}

export default App
