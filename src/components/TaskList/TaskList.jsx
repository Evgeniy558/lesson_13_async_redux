import { useSelector } from "react-redux";
import Task from "../Task/Task";
import {
  getFilter,
  getIsLoading,
  getTasks,
} from "../../redux/filters/selectors";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  const taskList =
    statusFilter === "active"
      ? tasks.filter((task) => !task.completed)
      : statusFilter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks;
  return taskList;
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const isLoading = useSelector(getIsLoading);
  const statusFilter = useSelector(getFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <>
      {!isLoading &&
        visibleTasks.map((task) => {
          return (
            <li key={task.id} className={css.elItem}>
              <Task task={task}></Task>
            </li>
          );
        })}
    </>
  );
};
export default TaskList;
