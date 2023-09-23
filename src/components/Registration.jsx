import React, { useEffect, useState } from "react";
import RegImage from "../images/registerImage.png";
import Button from "./Button";
import RegSuccess from "./RegSuccess";

const Registration = () => {
  const [successful, setSuccess] = useState(false);
  const [mobile, setMobile] = useState({});
  const [web, setWeb] = useState({});
  const [backend, setBackend] = useState({});
  const [groupSize, setGroups] = useState([5, 10, 15]);

  const handleSetSuccess = () => {
    setSuccess(!successful);
  };
  const URL = "https://backend.getlinked.ai/hackathon/categories-list";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setMobile(json[0]);
        setWeb(json[1]);
        setBackend(json[2]);
      });
    };
    fetchData();
  }, []);

  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [team_name, setTeamName] = useState("");
  const [group_size, setGroupSize] = useState(0);
  const [project_topic, setProjectTopic] = useState("");
  const [category, setCategory] = useState(1);
  const [privacy_poclicy_accepted, setPrivacy] = useState(false);

  const handleMail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const handleGroupSize = (e) => {
    setGroupSize(e.target.value);
  };

  const handleProjectTopic = (e) => {
    setProjectTopic(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePrivacy = () => {
    setPrivacy(!privacy_poclicy_accepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email &&
      phone_number &&
      team_name &&
      group_size &&
      project_topic &&
      category
    ) {
      const formData = {
        email,
        phone_number,
        team_name,
        group_size,
        project_topic,
        category,
        privacy_poclicy_accepted,
      };

      fetch("https://backend.getlinked.ai/hackathon/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((response) => response.json());

      setEmail("");
      setPhoneNumber("");
      setTeamName("");
      setGroupSize(0);
      setProjectTopic("");
      setCategory(1);
      setPrivacy(false);
      setSuccess(!successful);
    }
  };

  return (
    <div className="register-page d-flex">
      <div className="register-left-section">
        <img
          className="ml-ng-7"
          src={RegImage}
          alt="registration logo"
          width="500px"
        />
      </div>
      <div className="register-right-section">
        <h2 className="color-pink mb-1 p-abs">Register</h2>
        <p className="mb-1">Be part of this movement</p>
        <h2 className="mb-3">CREATE YOUR ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-element">
            <div className="form-input mb-1">
              <label>Team's Name</label>
              <input
                onChange={handleTeamName}
                type="text"
                value={team_name}
                placeholder="Enter the name of your group"
              />
            </div>
            <div className="form-input mb-1">
              <label>Phone</label>
              <input
                onChange={handlePhone}
                type="tel"
                value={phone_number}
                placeholder="Enter Your phone number"
              />
            </div>
            <div className="form-input mb-1">
              <label>Email</label>
              <input
                onChange={handleMail}
                type="email"
                value={email}
                placeholder="Enter Your email address"
              />
            </div>
            <div className="form-input mb-1">
              <label>Project Topic</label>
              <input
                onChange={handleProjectTopic}
                type="text"
                value={project_topic}
                placeholder="What is your group project topic"
              />
            </div>
            <div className="d-inline form-input mb-1">
              <label className="d-inline">Category</label>
              <select value={category} onChange={handleCategory}>
                <option disabled>Select your category</option>
                <option value={mobile.id}>{mobile.name}</option>
                <option value={web.id}>{web.name}</option>
                <option value={backend.id}>{backend.name}</option>
              </select>
            </div>
            <div className="d-inline form-input mb-1">
              <label className="d-inline">Group Size</label>
              <select value={group_size} onChange={handleGroupSize}>
                <option disabled>Select</option>
                <option value={groupSize[0]}>5</option>
                <option value={groupSize[1]}>10</option>
                <option value={groupSize[2]}>15</option>
              </select>
            </div>
          </div>
          <p className="mb-0-5 color-pink">
            Please review you registration details before submitting
          </p>
          <div className="mb-0-5">
            <input
              value={privacy_poclicy_accepted}
              onChange={handlePrivacy}
              type="checkbox"
            />
            <span>
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>
          <Button value="Register Now" />
        </form>
      </div>
      <div className={successful ? "plain-bg" : "d-none"}></div>
      {successful && <RegSuccess handleSuccess={handleSetSuccess} />}
    </div>
  );
};

export default Registration;
