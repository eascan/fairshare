import {Button} from "@material-ui/core";
import {useHistory} from "react-router";
import ExpenseRow from "./ExpenseRow";
import "./Main.css";

function Main() {
  const history = useHistory();

  return (
    <div className="main">
      <div className="topRow">
        <h3>Dashboard</h3>
        <Button
          className="addExpense"
          fontSize="large"
          onClick={() => history.push("/expense")}
        >
          Add Expense
        </Button>
      </div>
      <div className="secondRow">
        <div className="rowBox_total">
          <h4>Total balance</h4>
          <p>$5.00</p>
        </div>
        <div className="rowBox">
          <h4>You owe</h4>
          <p>$0.00</p>
        </div>
        <div className="rowBox_owed">
          <h4>You are owed</h4>
          <p>$10.00</p>
        </div>
      </div>
      <div className="mainRow">
        <h2>Active Expenses</h2>
        <ExpenseRow />
      </div>
    </div>
  );
}

export default Main;
