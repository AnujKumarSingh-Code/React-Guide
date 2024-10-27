export default function TabButton(props) {

    return (
        <l1>
            <button onClick={props.onSelect}>
                {props.children}
            </button>
        </l1>
    )
}