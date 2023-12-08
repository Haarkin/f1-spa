import RACER_LIST from "../dummy-data/racers"

export default function RoundList(props) {
    return (
        <ul>
            <li>
                <h2>Round 1</h2>
                <ol>
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
                </ol>
            </li>
            <li>
                <h2>Round 2</h2>
                <ol>
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
                </ol>
            </li>
            <li>
                <h2>Round 3</h2>
                <ol>
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
                </ol>
            </li>
        </ul>
    )
}