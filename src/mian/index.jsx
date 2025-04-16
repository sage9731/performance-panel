import React, { useEffect, useState } from 'react';
import { Row, Col } from "antd";
import ChipCard from "./cards/ChipCard/index.jsx";
import RamCard from "./cards/RamCard/index.jsx";
import NetworkCard from "./cards/NetworkCard/index.jsx";
import FpsCard from './cards/FpsCard/index.jsx';

function Main(
    {
        config
    }
) {
    const { host, port } = config;
    const [readyState, setReadyState] = useState(0);
    const [performance, setPerformance] = useState({})

    useEffect(() => {
        const source = new EventSource(`http://${host}:${port}/sse`);

        source.addEventListener('message', (event) => {
            // Page0|{|}Simple1|31{|}Simple2|84{|}Simple3|3828{|}Simple4|0.950{|}Simple5|34.09{|}Simple6|14{|}Simple7|60{|}Simple8|1282{|}Simple9|0.694{|}Simple10|25.52{|}Simple11|65{|}Simple12|1581{|}Simple13|8.3{|}Simple14|15.1{|}Simple15|27{|}Simple16|1500{|}Simple17|4.4{|}Simple18|1.6{|}Simple19|19{|}Simple20|2.3{|}Simple21|1.8{|}Simple22|0.0{|}Simple23|0.0{|}Simple24|0.0{|}Simple25|0.0{|}Simple26|0.0{|}Simple27|0.0{|}Simple28|0.0{|}Simple29|0.0{|}Simple30|0.0{|}Simple31|0.0{|}Simple32|0.0{|}Simple33|0.0{|}Simple34|0.0{|}Simple35|0.0{|}
            const msg = event.data;
            if (msg && msg.startsWith('Page0')) {
                const data = msg.split('{|}')
                    .map((elem) => {
                        if (elem) {
                            const [, val] = elem.split('|');
                            return val || 0;
                        }
                        return 0;
                    });

                let i = 1;
                const performance = {
                    cpu: {
                        load: data[i++],
                        temperature: data[i++],
                        clock: data[i++],
                        voltage: data[i++],
                        power: data[i++],
                        fan: data[i++],
                    },
                    gpu: {
                        load: data[i++],
                        temperature: data[i++],
                        clock: data[i++],
                        voltage: data[i++],
                        power: data[i++],
                        fan: data[i++],
                    },
                    ram: {
                        load: data[i++],
                        clock: data[i++],
                        free: data[i++],
                        used: data[i++],
                    },
                    videoRam: {
                        load: data[i++],
                        clock: data[i++],
                        free: data[i++],
                        used: data[i++],
                    },
                    display: {
                        fps: parseInt(data[i++], 10),
                    },
                    volume: {
                        volume: data[i++],
                    }
                };

                let download = 0;
                let upload = 0;
                for (let flag = true; i < data.length - 1; i++) {
                    const val = parseFloat(data[i]);
                    if (flag) {
                        download += val;
                    } else {
                        upload += val;
                    }
                    flag = !flag;
                }
                performance.network = {
                    download,
                    upload,
                }
                setPerformance(performance)
            }
        });

        const timer = setInterval(() => {
            setReadyState(source.readyState);
        }, 1000);

        return () => {
            source.close();
            clearInterval(timer);
        }
    }, [host, port]);

    return (
        <div className="main">
            {
                readyState === 1 ? (
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <ChipCard type="CPU" data={performance.cpu} />
                        </Col>
                        <Col span={6}>
                            <RamCard type="RAM" data={performance.ram} />
                        </Col>
                        <Col span={6}>
                            <NetworkCard config={config} data={performance.network} />
                        </Col>
                        <Col span={12}>
                            <ChipCard type="GPU" data={performance.gpu} />
                        </Col>
                        <Col span={6}>
                            <RamCard type="VRAM" data={performance.videoRam} />
                        </Col>
                        <Col span={6}>
                            <FpsCard config={config} data={performance.display} />
                        </Col>
                    </Row>
                ) : (
                    <div className="usage-tips">
                        <span>AIDA64 LCD Remote Sensor not available. Please visit <a href="https://github.com/sage9731/performance-panel" target="_blank">https://github.com/sage9731/performance-panel</a> and see how it works.</span>
                    </div>
                )
            }

        </div>
    );
}

export default Main;