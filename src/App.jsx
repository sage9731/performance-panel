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
        window.wallpaperPropertyListener = {
            applyUserProperties: function (properties) {
                const {
                    language,
                    host,
                    port,
                    themecolor,
                    font,
                    clockfont,
                    clockfontsize,
                    dateseparator,
                    timeseparator,
                    marginbottom,
                } = properties;

                setConfig(prevConfig => {
                    prevConfig.language = language?.value || 'english';
                    if (host?.value) {
                        prevConfig.host = host.value;
                    }
                    if (port?.value) {
                        prevConfig.port = port.value;
                    }
                    if (themecolor?.value) {
                        const tc = convertColor(themecolor);
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
                    if (clockfont?.value) {
                        setCssVar('--clock-font', clockfont.value)
                    } else {
                        setCssVar('--clock-font', '')
                    }
                    if (clockfontsize?.value) {
                        setCssVar('--clock-font-size', clockfontsize.value + 'rem')
                    }
                    if (dateseparator?.value) {
                        prevConfig.dateSeparator = dateseparator.value;
                    }
                    if (timeseparator?.value) {
                        prevConfig.timeSeparator = timeseparator.value;
                    }
                    if (marginbottom?.value) {
                        setCssVar('--margin-bottom', marginbottom.value + 'rem')
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
