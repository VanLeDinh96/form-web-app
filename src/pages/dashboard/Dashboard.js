import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1>Survey Dashboard</h1>
      <div className="survey-list">
        <div className="survey">
          <h2>Survey 1</h2>
          <p>Description of Survey 1</p>
        </div>
        <div className="survey">
          <h2>Survey 2</h2>
          <p>Description of Survey 2</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
