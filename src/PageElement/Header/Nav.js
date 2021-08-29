import classes from './Nav.module.css';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav className={classes.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Add">Add</Link></li>
                <li><Link to="/Favorite">Favorite</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;