import { useSelector } from "react-redux";
import Task from "../Task/Task";
import {
  selectIsLoading,
  selectVisibleTasks,
} from "../../redux/filters/selectors";
import css from "./TaskList.module.css";

const TaskList = () => {
  const isLoading = useSelector(selectIsLoading);
  const visibleTasks = useSelector(selectVisibleTasks);

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
