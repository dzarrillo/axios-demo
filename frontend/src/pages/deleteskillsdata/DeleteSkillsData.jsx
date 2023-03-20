import React, { useState, useEffect } from "react";
import { getRequest, deleteRequest } from "../../api/AxiosClient";

const DeleteSkillsData = () => {
  const [mySkill, setmySkill] = useState("");
  const [mySkillId, setMySkillId] = useState("");
  const [skills, setSkills] = useState([]);

  async function fetchSkills() {
    try {
      const mydata = await getRequest("skills");
      console.log(mydata.data.skills);
      setSkills(...skills, mydata.data.skills);
    } catch (error) {
      console.log(`Error getting data - ${error.message} `);
    }
  }
  useEffect(() => {
    fetchSkills();
  }, []);

  const deleteSkill = async (skill) => {
    console.log(skill._id + " - " + skill.skill);

    try {
      const data = await deleteRequest("?_id=" + skill._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>DeleteSkillsData</div>

      {!skills.length ? (
        <h1>No data found!</h1>
      ) : (
        skills.map((skill) => {
          // setmySkill(skill.skill);
          // setMySkillId(skill._id);
          return (
            <div key={skill._id}>
              <button onClick={() => deleteSkill(skill)}>
                Click to delete "{skill.skill}"
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DeleteSkillsData;
