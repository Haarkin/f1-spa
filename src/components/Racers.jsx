import RACER_LIST from "../dummy-data/racers"

export default function Racers() {
    return (
        <ul>
            {RACER_LIST.map((racer) => 
                    <li
                        key={racer.number}
                        name={racer.name}
                        age={racer.age}
                        number={racer.number}
                        place={racer.place}
                    >
                        <button>Add to favorites</button>
                    </li>
            )}
        </ul>
    )
}