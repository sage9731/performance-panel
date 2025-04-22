import React, {useEffect, useState} from 'react';
import {getDate, getTime} from "../utils/date.js";
import {useConfig} from "../hooks/useConfig.js";

function Header() {
    const {dateSeparator, timeSeparator} = useConfig();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setDate(getDate(now, dateSeparator));
            setTime(getTime(now, timeSeparator));
        }, 499);

        return () => {
            clearInterval(timer);
        }
    }, [dateSeparator, timeSeparator]);

    return (
        <div className="header">
            <div className="datetime">
                <div className="date">{date}</div>
                <div className="time">{time}</div>
            </div>
        </div>
    );
}

export default Header;