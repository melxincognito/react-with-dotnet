import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../app/index";

export default function ClickMe() {
  const account = useSelector((state) => state.account); // if you just want the account you put state.account and it'll only display the account

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        justifyItems: "center",
        margin: "auto",
      }}
    >
      <div className="logo">
        <h1> Mel's Bank Account</h1>
      </div>
      <div className="accountInfo">
        <h1> ${account}</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="depositWithdrawBtns">
          <button
            className="btn btn-outline-success"
            onClick={() => depositMoney(100)}
          >
            {" "}
            Deposit $100{" "}
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => depositMoney(50)}
          >
            {" "}
            Deposit $50
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => depositMoney(1)}
          >
            {" "}
            Deposit $1
          </button>
        </div>
        <div className="depositWithdrawBtns">
          <button
            className="btn btn-outline-danger"
            onClick={() => withdrawMoney(1)}
          >
            {" "}
            Withdraw $1
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => withdrawMoney(50)}
          >
            {" "}
            Withdraw $50
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => withdrawMoney(100)}
          >
            {" "}
            Withdraw $100{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
