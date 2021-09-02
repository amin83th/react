import List from "../renderData/List";
import {useState,useEffect} from 'react';

function Home() {
  const [isLoading,setIsLoading]=useState(false);
  const [loadedMeetups,setLoadedMeetups]=useState([]);
  useEffect(()=>{
    setIsLoading(true);
    fetch("https://data1-f780.restdb.io/rest/gallery",{
      headers: {
        "x-apikey": "61262cce43cedb6d1f97e8ea",
        "cache-control": "no-cache",
        "content-type": "application/json",
      },
    })
    .then((response) =>{
      return response.json;
    }) 
    .then((data)=> {
      const meetups=[];

      for(const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[])
 
  if(isLoading){
    return(
      <h1>LOADING ...</h1>
    )
  }
  return (
    <section>
      <h1>Home</h1>
      <List meetups={loadedMeetups} />
    </section>
  );
}

export default Home;
