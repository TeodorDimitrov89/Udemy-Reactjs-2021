import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from 'mongodb';


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://thumbs.dreamstime.com/z/m%C3%BCnchen-stadtbild-bayern-deutschland-61426463.jpg',
    title: 'meetup 1',
    address: "Meetup Street 1",
    description: "Some Description 1"
  },
  {
    id: 'm2',
    image: 'https://thumbs.dreamstime.com/z/m%C3%BCnchen-stadtbild-bayern-deutschland-61426463.jpg',
    title: 'meetup 2',
    address: "Meetup Street 2",
    description: "Some Description 2"
  }
]

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await  MongoClient.connect('mongodb+srv://teo:Sodq80ijN2IKH36e@cluster0.ktghz.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  }; 
}


export default HomePage;