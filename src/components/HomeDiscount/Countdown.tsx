"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchCountdown } from "@/utils/actions/fetchCountdown";
export const revalidate = 0;

const getTimefromFetchedCoutDown = async () => {
    return await fetchCountdown();
};

const Countdown = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const time: any = await getTimefromFetchedCoutDown();
                setSeconds(time.seconds);
                setMinutes(time.minutes);
                setHours(time.hours);
            } catch (err) {
                console.log(err);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <TimeSpan time={hours} />
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <TimeSpan time={minutes} />
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <TimeSpan time={seconds} />
                </span>
                sec
            </div>
        </div>
    );
};

const TimeSpan: React.FC<{ time: number }> = styled.span`
    --value: ${(props) => props.time};
`;

export default Countdown;
