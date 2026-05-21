import "../styles/prep.css";

import React, { useEffect, useState } from "react";

import {
  generateQuestions,
  generateSchedule
} from "../services/api";


function StageIcon({ status }) {

  if (status === "complete") {

    return (

      <div className="stage-icon stage-icon--complete">
        ✓
      </div>

    );
  }

  if (status === "inprogress") {

    return (

      <div className="stage-icon stage-icon--inprogress">
        ⏳
      </div>

    );
  }

  return (

    <div className="stage-icon stage-icon--locked">
      🔒
    </div>

  );
}


export default function Prep() {

  const [roadmapData, setRoadmapData] = useState([]);

  const [userData, setUserData] = useState(null);

  const [schedule, setSchedule] = useState([]);


  useEffect(() => {

    const savedRoadmap = localStorage.getItem("roadmapData");

    const savedUser = localStorage.getItem("userData");


    if (savedRoadmap) {

      const parsedRoadmap = JSON.parse(savedRoadmap);

      if (Array.isArray(parsedRoadmap)) {

        setRoadmapData(parsedRoadmap);
      }

      else if (Array.isArray(parsedRoadmap.roadmap)) {

        setRoadmapData(parsedRoadmap.roadmap);
      }

      else if (Array.isArray(parsedRoadmap.data)) {

        setRoadmapData(parsedRoadmap.data);
      }

      else if (Array.isArray(parsedRoadmap.data?.roadmap)) {

        setRoadmapData(parsedRoadmap.data.roadmap);
      }
    }


    if (savedUser) {

      const parsedUser = JSON.parse(savedUser);

      setUserData(parsedUser);
    }

  }, []);


  useEffect(() => {

    const loadSchedule = async () => {

      try {

        const userData = JSON.parse(
          localStorage.getItem("userData")
        );

        const response = await generateSchedule({

          role: userData.role,

          experience_level: userData.level,

          tech_stack: userData.techStack

        });

        setSchedule(response.schedule);

      } catch (error) {

        console.log(error);
      }
    };

    loadSchedule();

  }, []);


  return (

    <div className="prep-root">

      <header className="prep-header">

        <span className="prep-logo">
          PrepAI
        </span>

      </header>

      <main className="prep-main">

        {/* ROADMAP */}

        <section className="roadmap-card">

          <div className="roadmap-top">

            <h2 className="roadmap-title">
              Interview Prep Roadmap
            </h2>

            <span className="roadmap-badge">
              Level: {userData?.level || "Intermediate"}
            </span>

          </div>

          <div className="roadmap-stages">

            {roadmapData.length > 0 ? (

              roadmapData.map((stage, index) => (

                <React.Fragment key={index}>

                  <div className={`stage ${stage.status}`}>

                    <StageIcon status={stage.status} />

                    <div className="stage-num">

                      STAGE {String(index + 1).padStart(2, "0")}

                    </div>

                    <div className="stage-label">

                      {stage.label}

                    </div>

                    <div className={`stage-sub stage-sub--${stage.status}`}>

                      {stage.status === "complete" &&
                        "Complete"
                      }

                      {stage.status === "inprogress" &&
                        `In Progress (${stage.progress}%)`
                      }

                      {stage.status === "locked" &&
                        "Locked"
                      }

                    </div>

                  </div>

                  {index < roadmapData.length - 1 && (

                    <div
                      className={`stage-connector ${
                        stage.status === "complete"
                          ? "connector--done"
                          : ""
                      }`}
                    />

                  )}

                </React.Fragment>

              ))

            ) : (

              <div style={{ color: "white", marginTop: "20px" }}>

                No roadmap data found

              </div>

            )}

          </div>

        </section>

        {/* BOTTOM GRID */}

        <div className="prep-grid">

          {/* SCHEDULE */}

          <section className="schedule-card">

            <div className="schedule-header">

              <h3 className="schedule-title">
                Today's Schedule
              </h3>

            </div>

            <div className="schedule-list">

              {schedule.map((item, i) => (

                <div className="schedule-item" key={i}>

                  <div
                    className={`schedule-dot ${
                      item.live
                        ? "dot--live"
                        : "dot--normal"
                    }`}
                  />

                  <div className="schedule-body">

                    <div className="schedule-row1">

                      <span className="schedule-time">

                        {item.time}

                      </span>

                      <span className="schedule-duration">

                        {item.duration}

                      </span>

                    </div>

                    <div className="schedule-name">

                      {item.title}

                    </div>

                    <div className="schedule-desc">

                      {item.desc}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* RIGHT SIDE */}

          <div className="prep-right">

            <div className="launch-card">

              <h3 className="launch-title">

                Start your preparation session

              </h3>

              <p className="launch-desc">

                Launch our high-fidelity AI environment
                to practice real-time technical questions.

              </p>

              <button
                className="launch-btn"
                onClick={async () => {

                  try {

                    const userData = JSON.parse(
                      localStorage.getItem("userData")
                    );

                    const response = await generateQuestions({

                      role: userData.role,

                      experience_level: userData.level,

                      tech_stack: userData.techStack

                    });

                    localStorage.setItem(
                      "questionData",
                      JSON.stringify(response)
                    );

                    window.location.href = "/question";

                  } catch (error) {

                    console.log("QUESTION ERROR:", error);

                    alert("Backend question generation failed");
                  }

                }}
              >

                Launch AI Q&A

              </button>

              <span className="launch-powered">

                POWERED BY PREPAI INTELLIGENCE

              </span>

            </div>

            <div className="insight-card">

              <div className="insight-text">

                <div className="insight-label">

                  Daily Insight

                </div>

                <div className="insight-value">

                  Your preparation consistency is improving rapidly.

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      <footer className="prep-footer">

        © 2024 PrepAI. All rights reserved.

      </footer>

    </div>
  );
}