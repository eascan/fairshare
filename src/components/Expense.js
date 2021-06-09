import "./Expense.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {IconButton} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";

function Expense() {
  const {register, handleSubmit, watch, serrors} = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="expense">
      <div className="expense__top">
        <IconButton className="back__button">
          <ArrowBackIcon onClick={() => history.push("/")} />
        </IconButton>
        <h3 className="expense__topText">Add an expense</h3>
      </div>
      <div className="expense__form"></div>
    </div>
  );
}

export default Expense;
