"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

const Countdown = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = moment();
            const midnight = moment().startOf('day');  // Set to midnight
            let timeUntilMidnight = midnight.diff(now);
            if (timeUntilMidnight < 0) {
                midnight.add(1, 'days');
                timeUntilMidnight = midnight.diff(now);
            }

            const remainingSeconds = Math.floor(timeUntilMidnight / 1000);
            const remainingMinutes = Math.floor(remainingSeconds / 60) % 60;
            const remainingHours = Math.floor(remainingSeconds / (60 * 60));

            setSeconds(remainingSeconds % 60);
            setMinutes(remainingMinutes);
            setHours(remainingHours);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`grid grid-flow-col gap-5 text-center auto-cols-max ${hours <= 5 ? "text-red-600": ""}`}>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <TimeSpan time={hours} />
                </span>
                HOUR
            </div> 
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <TimeSpan time={minutes} />
                </span>
                MIN
            </div> 
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <TimeSpan time={seconds} />
                </span>
                SEC
            </div>
        </div>
    );
};

const TimeSpan: React.FC<{ time: number }> = styled.span`
    --value: ${(props) => props.time};
`;

export default Countdown;
