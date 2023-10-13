import { useEffect } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Layout from "./components/Layout/Layout";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { fetchTasks } from "./redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "./redux/filters/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    // <div>

    //   {error && <p>{error}</p>}
    //   <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    // </div>
    <div className="App">
      <Layout>
        <AppBar></AppBar>
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </div>
  );
}

export default App;
