import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <h2 className="primary__heading">
                    Github,Where the world builds software
                </h2>
                <h4>Blazing fast cloud developer environments with Codespaces</h4>
                <div className="home__link--btn">
                    <Link to="/user"><button>User</button></Link>
                    <Link to="/organization"><button>Organization</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Home
