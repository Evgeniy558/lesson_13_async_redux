import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { getTasks } from "../../redux/filters/selectors";
const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const taskCount = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  console.log(taskCount);
  return (
    <>
      <p className={css.text}>Activ: {taskCount.active}</p>
      <p className={css.text}>Completed: {taskCount.completed}</p>
    </>
  );
};
export default TaskCounter;
