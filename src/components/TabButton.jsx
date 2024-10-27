export default function TabButton(props) {

    return (
        <l1>
            <button className = {props.isSelected ? 'active' : undefined} onClick={props.onSelect}>
                {props.children}
            </button>
        </l1>
    )
}