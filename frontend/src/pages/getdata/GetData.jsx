import React, { useState, useEffect } from "react";
import { getRequest } from "../../api/AxiosClient";

const GetData = () => {
  const [goals, setGoals] = useState([]);

  async function fetchGoals() {
    try {
      const mydata = await getRequest("goals");
      console.log(mydata.data);
      setGoals(mydata.data);
    } catch (error) {
      console.log(`Error getting data - ${error.message} `);
    }
  }
  useEffect(() => {
    fetchGoals();
    console.log(`Goals data: ${goals.text}`);
  }, []);

  return (
    <div>
      <h1>GetData</h1>
      {!goals.length ? (
        <h1>No data</h1>
      ) : (
        goals.map((goal) => {
          return <h2 key={goal._id}>{goal.text}</h2>;
        })
      )}
    </div>
  );
};

export default GetData;
