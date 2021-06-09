import "./Expense.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {IconButton} from "@material-ui/core";

function Expense() {
  return (
    <div className="expense">
      <div className="expense__top">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <h3>Add an expense</h3>
      </div>
      <div className="expense__form"></div>
    </div>
  );
}

export default Expense;
