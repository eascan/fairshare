import {Button} from "@material-ui/core";
import "./ExpenseRow.css";

function ExpenseRow() {
  return (
    <div className="allExpenses">
      <div className="activeRow">
        <div className="name">
          <h2>Den Hm</h2>
          <h3>Owes you: $500</h3>
        </div>
        <Button className="settleExpense" fontSize="large">
          Settle Expense
        </Button>
      </div>
    </div>
  );
}

export default ExpenseRow;
