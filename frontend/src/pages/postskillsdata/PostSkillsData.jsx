import React, { useState } from "react";
import { postRequest } from "../../api/AxiosClient";
import axios from "axios";
const PostSkillsData = () => {
  const [mySkill, setMySkill] = useState({ skill: "" });

  const postSkill = (e) => {
    console.log(`value: ${e.target.value}`);
    // setMySkill((prev) => {skill: e.target.value});
    setMySkill({ ...mySkill, skill: e.target.value });
  };

  async function postMySkills(e) {
    try {
      e.preventDefault();
      console.log(`post value: ${mySkill.skill}`);
      // const url = "/api/insert";
      const url = "api/skills/insert";

      // const data = await postRequest(url, skill);
      const data = await axios.post(url, mySkill);
      console.log("Data Saved!" + mySkill);
    } catch (err) {
      console.log(`Data not saved! ${err}`);
    }
  }

  return (
    <>
      <div>PostSkillsData</div>
      <form>
        <label>Skill</label>
        <input required type="text" onChange={postSkill} />
        <button onClick={postMySkills}>Submit</button>
      </form>
    </>
  );
};

export default PostSkillsData;
