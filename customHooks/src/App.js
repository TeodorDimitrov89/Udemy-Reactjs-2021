import React, { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  // const transformTasks = useCallback((data) => {
  //   const loadedTasks = [];

  //   for (const taskKey in data) {
  //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
  // }, []);

  // const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

  // const requestConfig = useMemo(() => {
  //   return {
  //     url: 'https://react-http-b17ed-default-rtdb.firebaseio.com/tasks.json',
  //   };
  // }, []); useMemo to memolize all kind of data like objects, arrays. For functions use useCallback hook

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    const requestConfig = {
      url: 'https://react-http-b17ed-default-rtdb.firebaseio.com/tasks.json',
    };

    fetchTasks(requestConfig, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
