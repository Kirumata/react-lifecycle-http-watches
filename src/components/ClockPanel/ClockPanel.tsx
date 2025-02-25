import { ClockProperties } from "../../types";
import ClockHandler from "../ClockHandler/ClockHandler";
import "./ClockPanel.css"

export default function ClockPanel({ clocks, handleDelete }: { 
    clocks: ClockProperties[],
    handleDelete: (clockId : number) => void
 }) {
    return (
        <div className='clock-panel'>
            {clocks.map(clock => (
                <ClockHandler props={clock} onDelete={() => handleDelete(clock.id)}></ClockHandler>
            ))}
        </div>
    )
}