import Form from '../Form/Form';
function Add() {
  function onAddMeetupHandler(meetupData){
    console.log(JSON.stringify(meetupData));
    fetch('https://data1-f780.restdb.io/rest/gallery', {
      method: 'POST',
      headers: { 'x-apikey': '61262cce43cedb6d1f97e8ea' },
      body: JSON.stringify(meetupData)
    })
      .then(result => result.json())
      .then(results => {
        console.log(results);
      });
  }
  return (
    <Form onAddMeetup={onAddMeetupHandler}/>
  );
}

export default Add;
