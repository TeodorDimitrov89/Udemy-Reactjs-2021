import Head from 'next/head';
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = response.json();
    console.log(data);

    router.push('/')
  }

  return (
    <>
     <Head>
      <title>Create new React meetup</title>
      <meta name="description" content="Create new React meetup" />
    </Head>
    <NewMeetupForm onAddMeetup = {addMeetupHandler}></NewMeetupForm>
    </>
  )
}

export default NewMeetupPage