import Card from "../uiux/Card";
import classes from "./Render.module.css";
function Render(props) {
  return (
    <Card>
      <li className={classes.li}>
        <div>
          <img src={props.imgurl} alt={props.title} />
        </div>
        <div>
          <h1>{props.title}</h1>
          <span>{props.description}</span>
        </div>
        <div>
          <button>Favorite</button>
        </div>
      </li>
    </Card>
  );
}

export default Render;
