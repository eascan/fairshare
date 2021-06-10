import {Button} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {db} from "../firebase";
import ExpenseRow from "./ExpenseRow";
import "./Main.css";

function Main() {
  const history = useHistory();

  const [expenses, setExpenses] = useState([]);
  const [owe, setOwe] = useState(0);

  useEffect(() => {
    db.collection("expenses")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setExpenses(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    let newAmount = 0;
    for (const expense of expenses) {
      newAmount += Number(expense.data.amount);
    }
    setOwe(newAmount);
  }, [expenses]);

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
          <p>$0.00</p>
        </div>
        <div className="rowBox">
          <h4>You owe</h4>
          <p>$0.00</p>
        </div>
        <div className="rowBox_owed">
          <h4>You are owed</h4>
          <p>${owe}</p>
        </div>
      </div>
      <div className="mainRow">
        <h2>Active Expenses</h2>
        {expenses.map(({id, data: {name, amount}}) => (
          <ExpenseRow id={id} key={id} name={name} amount={amount} />
        ))}
      </div>
    </div>
  );
}

export default Main;
