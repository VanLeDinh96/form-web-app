import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <main className="main">
      <div className="main__content">
        <div className="main__top">
          <input
            type="text"
            className="search-bar"
            placeholder="Search surveys..."
          />
          <button className="btn-new-survey">Add New Survey</button>
        </div>
        <div className="survey-list">
          <div className="survey-card">
            <h2 className="survey-card__title">Survey Title 1</h2>
            <p className="survey-card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="survey-card">
            <h2 className="survey-card__title">Survey Title 2</h2>
            <p className="survey-card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
