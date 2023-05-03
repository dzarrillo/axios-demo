import React, { useState, useEffect } from "react";
import { getRequest, deleteRequest } from "../../api/AxiosClient";
import Styles from "./DeleteSkillsData.module.css";

const DeleteSkillsData = () => {
  const [skills, setSkills] = useState([]);
  const [delete_Skill, setDeleteSkill] = useState("");

  async function fetchSkills() {
    try {
      const mydata = await getRequest("skills");
      // console.log(mydata.data.skills);
      // const newData = await mydata.data.skills;
      // setSkills(...skills, newData.data.skills);
      // setSkills(...skills, mydata.data.skills);
      setSkills((...skills) => mydata.data.skills);
    } catch (error) {
      console.log(`Error getting data - ${error.message} `);
    }
  }

  useEffect(() => {
    console.log("fetchskills");
    fetchSkills();
  }, []);

  const deleteSkill = async (skill) => {
    try {
      const data = await deleteRequest(skill._id);
      fetchSkills();
      const modal = document.getElementById("dialog");
      modal.showModal();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseBtn = () => {
    const modal = document.getElementById("dialog");
    modal.close();
  };

  return (
    <div className={Styles.title}>
      <h1>Delete Skills Data</h1>
      <dialog id="dialog">
        <h2>Data deleted</h2>
        <button id="close_button" onClick={handleCloseBtn}>
          Close
        </button>
      </dialog>

      {!skills.length ? (
        <h3 className={Styles.no__data}>No data found!</h3>
      ) : (
        skills.map((skill) => {
          // setmySkill(skill.skill);
          // setMySkillId(skill._id);
          return (
            <div className={Styles.button__container} key={skill._id}>
              <button
                className={Styles.button}
                onClick={() => deleteSkill(skill)}
              >
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
