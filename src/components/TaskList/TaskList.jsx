import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { getFilter, getTasks } from "../../redux/filters/selectors";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  console.log("statusFilter", statusFilter);
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
  const statusFilter = useSelector(getFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <>
      {visibleTasks.map((task) => {
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
