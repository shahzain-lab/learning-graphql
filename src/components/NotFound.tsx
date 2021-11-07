import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found--block">
                <img
                    src="https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg?_nc_eui2=AeHIlTdQ3RpYW6yZ8yVVBHQbEvoiLXyhshMS-iItfKGyE9EBqtyVjhlosVdgnB1LtII9pVtuu74MWo47QQ40gkh2"
                    alt="not-found"
                />
                <h3>Page not Available</h3>
                <Link to="/"><button>Back</button></Link>
            </div>
        </div>
    )
}

export default NotFound
