import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const locname = location.state.name;
  const [a, setA] = useState();

  /* fetch(`http://localhost:9000/kyc/${locname}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });*/
  const fetchdata = async () => {
    const response = await fetch(`http://localhost:9000/kyc/${locname}`);
    const entries = await response.json();

    setA(entries);
  };
  console.log(a);
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <React.Fragment>
      <h3> Welcome {location.state.name}</h3>
      <h4>
        <Link to="/kycPage">Didn't filled kyc yet!! Click here to fill</Link>
      </h4>
      {a ? (
        <div>
          {a.map((item) => {
            return (
              <ul key={item.name}>
                <li>{item.name}</li>
                <li>{item.address}</li>
                <li>{item.occupation}</li>
                <li>{item.income}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div>"No Kyc Details present"</div>
      )}
    </React.Fragment>
  );
}

export default Dashboard;
