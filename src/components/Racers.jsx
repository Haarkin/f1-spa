import RACER_LIST from "../dummy-data/racers"
import RacerInfo from "./RacerInfo"

export default function Racers() {
    

    return (
        <ul>
            {RACER_LIST.map((racer) => 
                    <RacerInfo key={racer.number} racer={racer} />
            )}
        </ul>
    )
}