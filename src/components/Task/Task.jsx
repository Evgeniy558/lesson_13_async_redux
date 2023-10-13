import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operation";
// import { deleteTask, toggleCompleted } from "../../redux/Slices/tasksSlicer";
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(task.id);
    //   dispatch(deleteTask(task.id));
    // };
    // const toggleChange = () => {
    //   dispatch(toggleCompleted(task.id));
    dispatch(deleteTask(task));
  };

  const handletoggleChange = (task) => {
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
