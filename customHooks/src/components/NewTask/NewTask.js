import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    const requestConfig = {
      url: 'https://react-http-b17ed-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    sendTaskRequest(requestConfig, createTask.bind(null, taskText));

    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    // const createdTask = { id: generatedId, text: taskText };

    // props.onAddTask(createdTask);

    // try {
    //   const response = await fetch(
    // 'https://react-http-b17ed-default-rtdb.firebaseio.com/tasks.json',
    // {
    //   method: 'POST',
    //   body: JSON.stringify({ text: taskText }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
