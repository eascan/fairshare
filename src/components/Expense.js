import "./Expense.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {Button, IconButton} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";

import {db} from "../firebase";
import firebase from "firebase";

function Expense() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const history = useHistory();

  const onSubmit = (formData) => {
    db.collection("expenses").add({
      name: formData.name,
      amount: formData.amount,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    history.push("/");
  };

  return (
    <div className="expense">
      <div className="expense__top">
        <IconButton className="back__button">
          <ArrowBackIcon onClick={() => history.push("/")} />
        </IconButton>
        <h3 className="expense__topText">Add an expense</h3>
      </div>
      <div className="background__form">
        <h5>Fill out expense form</h5>
      </div>
      <div className="main__form">
        <div className="expense__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              placeholder="Name of debtor"
              type="text"
              {...register("name", {required: true})}
            />
            {errors.name && (
              <p style={{color: "red"}} className="expense__error">
                Name is required
              </p>
            )}
            <input
              name="amount"
              placeholder="How much do they owe ($)"
              type="number"
              {...register("amount", {required: true})}
            />
            {errors.amount && (
              <p className="expense__error">Amount is required</p>
            )}
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Expense;
