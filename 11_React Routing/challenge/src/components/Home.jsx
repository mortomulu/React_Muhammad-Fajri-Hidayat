import { Link } from "react-router-dom"


export default function Home () {
    return(
        <>
        <h1>Home Page</h1>
        {/* Link to the Login page */}
        <Link to="/login">
            <button>Login</button>
        </Link>
        
        {/* Link to the Hero page */}
        <Link to="/hero">
            <button>Hero</button>
        </Link>
        </>
    )
}