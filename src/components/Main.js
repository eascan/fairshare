import {Button} from "@material-ui/core";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="topRow">
        <h3>Dashboard</h3>
        <Button className="addExpense" fontSize="large">
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
      </div>
    </div>
  );
}

export default Main;
