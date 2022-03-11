import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";

function KycPage() {
  const history = useHistory();
  const [kyc, setKyc] = useState({
    name: "",
    address: "",
    occupation: "",
    income: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKyc({
      ...kyc,
      [name]: value,
    });
  };
  const dataSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/kyc/submit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: kyc.name,
        address: kyc.address,
        occupation: kyc.occupation,
        income: kyc.income,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h4>Submit your kyc details</h4>

        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          value={kyc.name}
          placeholder="enter your name"
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={kyc.address}
          placeholder="enter your address"
          onChange={handleChange}
        />

        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          name="occupation"
          value={kyc.occupation}
          placeholder="enter your occupation"
          onChange={handleChange}
        />
        <label htmlFor="income">Income per annum</label>
        <input
          type="number"
          name="income"
          value={kyc.income}
          placeholder="enter your income"
          onChange={handleChange}
        />

        <button type="submit" onClick={dataSubmit}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default KycPage;
