export function Button({type, name}){
    return (
        <button type={type} className="btn-primary">
            {name}
        </button>
    );
}