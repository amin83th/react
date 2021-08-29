import { useRef } from "react";
import Card from "../uiux/Card";
import classes from "./Form.module.css";
function Form(props) {
  const titlevalue = useRef();
  const imgUrlvalue = useRef();
  const descriptionvalue = useRef();

  function formRender(event) {
    event.preventDefault();  
        const enteredtitle=titlevalue.current.value;
        const enteredimg=imgUrlvalue.current.value;
        const entereddescription=descriptionvalue.current.value;

        const meetupData={
            name:enteredtitle,
            image:enteredimg,
            description:entereddescription,
        }; 
        props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={formRender}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" required id="title" ref={titlevalue} />
        </div>
        <div>
          <label htmlFor="imgUrl">imgUrl</label>
          <input type="text" required id="imgUrl" ref={imgUrlvalue} />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            required
            rows="6"
            ref={descriptionvalue}
          ></textarea>
        </div>
        <div>
          <button>Favorite</button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
