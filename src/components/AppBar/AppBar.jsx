import css from "./AppBar.module.css";
import StatusFilter from "../Status Filter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";

const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        <section className={css.wrapper}>
          <h2>Tasks</h2>
          <TaskCounter taskActive={0} taskCompleted={0}></TaskCounter>
        </section>
        <section className={css.wrapper}>
          <h2>Filter by status</h2>
          <StatusFilter></StatusFilter>{" "}
        </section>
      </header>
    </>
  );
};
export default AppBar;
