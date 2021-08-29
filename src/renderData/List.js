import classes from "./List.module.css";
import Render from "./Render";
function List(props) {
  return (
    <ul className={classes.ul}>
      {props.meetup.map((meetup) => (
        <Render
          key={meetup.id}
          id={meetup.id}
          imgurl={meetup.imgurl}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default List;
