import React, { useState } from "react";
import { postRequest } from "../../api/AxiosClient";
import axios from "axios";
const PostSkillsData = () => {
  const [skill, setSkill] = useState("");

  const postSkill = (e) => {
    console.log(`value: ${e.target.value}`);
    setSkill((prev) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMySkills();
  };

  async function postMySkills(e) {
    e.preventDefault();
    try {
      const url = "skills/created";

      // const data = await postRequest(url, skill);
      const data = await axios.post(url, skill);
      console.log("Data Saved!" + skill);
    } catch (err) {
      console.log(`Data not saved! ${err}`);
    }
  }

  return (
    <>
      <div>PostSkillsData</div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>Skill</label>
        <input required type="text" onChange={postSkill} />
        <button onClick={postMySkills}>Submit</button>
      </form>
    </>
  );
};

export default PostSkillsData;
