import { useEffect, useState } from "react";
import { ClockProperties } from "../../types";
import { addHoursToDate } from "../../utils";
import Clock from "../Clock/Clock"
import "./ClockHandler.css"

export default function ClockHandler({ props, onDelete }: { 
    props: ClockProperties, 
    onDelete: () => void }) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(addHoursToDate(props.timezone));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);


    return (
        <>
            <table>
                <tbody>
                    <tr><td>{props.name}</td></tr>
                    <tr><td>
                        <div>
                            <button onClick={() => onDelete()}>X</button>
                        </div>
                    </td></tr>
                    <tr >
                        <td><div className="clock-item"><Clock time={time} /></div></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}