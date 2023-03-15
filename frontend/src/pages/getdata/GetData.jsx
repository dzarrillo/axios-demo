import React, { useState, useEffect } from "react";
import { getRequest } from "../../api/AxiosClient";

const GetData = () => {
  const [skills, setSkills] = useState([]);

  async function fetchSkills() {
    try {
      const mydata = await getRequest("skills");
      console.log(mydata.data.skills);
      setSkills(mydata.data.skills);
    } catch (error) {
      console.log(`Error getting data - ${error.message} `);
    }
  }
  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div>
      <h1>GetData</h1>
      {!skills.length ? (
        <h1>No data</h1>
      ) : (
        skills.map((skill) => {
          return <h2 key={skill._id}>{skill.skill}</h2>;
        })
      )}
    </div>
  );
};

export default GetData;
