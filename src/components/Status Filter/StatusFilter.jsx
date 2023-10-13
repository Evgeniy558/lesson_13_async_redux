import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilter } from "../../redux/filters/constants";
import { getFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/Slices/filterSlicer";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilter.all}
        onClick={() => {
          handleFilterChange(statusFilter.all);
        }}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilter.active}
        onClick={() => {
          handleFilterChange(statusFilter.active);
        }}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilter.completed}
        onClick={() => {
          handleFilterChange(statusFilter.completed);
        }}
      >
        Completed
      </Button>
    </div>
  );
};
export default StatusFilter;
