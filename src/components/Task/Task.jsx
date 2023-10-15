import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operation";
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task));
  };

  const handletoggleChange = () => {
    dispatch(toggleCompleted(task));
  };
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handletoggleChange}
      />
      <p className={css.text}>{task.text}</p>{" "}
      <button onClick={handleDelete} className={css.btn}>
        &#10060;
      </button>
    </div>
  );
};
export default Task;
