import React, {useEffect, useState} from 'react';
import {getDate, getTime} from "../utils/date.js";

function Header() {

    const [date, setDate] = useState();
    const [time, setTime] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(getDate());
            setTime(getTime());
        }, []);

        return () => {
            clearInterval(timer);
        }
    }, []);

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