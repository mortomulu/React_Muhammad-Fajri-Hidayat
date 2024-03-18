 export default function NavBar(props){
    return (
        <div>
            <h1>ini adalah props dari app = {props.name}</h1>
            {props.name === "john" && (<p>Hai kamu adalah admin {props.name}</p>)}
        </div>
    )
 }