import classes from "./List.module.css";
import Render from "./Render";
function List(props) {
  return (
    <ul className={classes.ul}>
      {props.meetups.map((meetup) => (
        <Render
          key={meetup.id}
          name={meetup.name}
          image={meetup.image}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default List;
