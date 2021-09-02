import Form from "../Form/Form";
import {useHistory} from 'react-router-dom';
function Add() {
  const history = useHistory();
  function onAddMeetupHandler(meetupData) {
    console.log(JSON.stringify(meetupData));
    fetch("https://data1-f780.restdb.io/rest/gallery", {
      method: "POST",
      headers: {
        "x-apikey": "61262cce43cedb6d1f97e8ea",
        "cache-control": "no-cache",
        "content-type": "application/json",
      },
      body: JSON.stringify(meetupData),
    })
      .then((result) => result.json())
      .then((results) => {
        console.log(results);
      })
      .then(()=>{
        history.replace('/');
      });
      
  }
  return <Form onAddMeetup={onAddMeetupHandler} />;
}

export default Add;
