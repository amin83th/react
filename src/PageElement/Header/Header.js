import classes from './Header.module.css';
import Nav from './Nav';
function Header (){
    return(
        <header className={classes.header}>
            <div>LOGO</div>
            <Nav />
        </header>
    );
}
export default Header ;