import {Button} from "@material-ui/core";
import {db} from "../firebase";
import "./ExpenseRow.css";
import BeatLoader from "react-spinners/BeatLoader";
import {useState} from "react";

function ExpenseRow({name, amount, id}) {
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    setTimeout(() => {
      db.collection("expenses").doc(id).delete();
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="allExpenses">
      <div className="activeRow">
        <div className="name">
          <h2>{name}</h2>
          <h3>Owes you: ${amount}</h3>
        </div>
        {!loading ? (
          <Button className="settleExpense" fontSize="large" onClick={onDelete}>
            Settle Expense
          </Button>
        ) : (
          <BeatLoader
            className="deleteLoader"
            color={"#EC7241"}
            loading={loading}
            size={10}
          />
        )}
      </div>
    </div>
  );
}

export default ExpenseRow;
