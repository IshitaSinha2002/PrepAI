import React, { useState } from "react";
import "../styles/form.css";

import { generateRoadmap } from "../services/api";

export default function Form() {

  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [techStack, setTechStack] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    console.log("Button Clicked");

    if (!role || !level) {

      console.log("Missing Fields");
      return;
    }

    try {

      setLoading(true);

      console.log("Sending API Request");

      const response = await generateRoadmap({
        role,
        experience_level: level,
        tech_stack: techStack
      });

      console.log("API Response:", response);

      localStorage.setItem(
        "roadmapData",
        JSON.stringify(response.data)
      );

      localStorage.setItem(
        "userData",
        JSON.stringify({
          role,
          level,
          techStack
        })
      );

      console.log("Redirecting To Prep");

      window.location.href = "/prep";

    } catch (error) {

      console.log("ERROR:", error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="form-root">

      <div className="form-center">

        <h1 className="form-title">
          PrepAI
        </h1>

        <p className="form-subtitle">
          Master your next interview with hyper-realistic
          <br />
          AI simulations tailored to your career path.
        </p>

        <div className="form-card">

          <div className="form-group">

            <label className="form-label">
              Role
            </label>

            <div className="form-input-wrapper">

              <span className="form-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </span>

              <input
                className="form-input"
                type="text"
                placeholder="e.g. Senior Software Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">

              <label className="form-label">
                Experience Level
              </label>

              <div className="form-input-wrapper select-wrapper">

                <span className="form-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>

                <select
                  className="form-select"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="" disabled>
                    Select level
                  </option>

                  <option value="junior">
                    Junior
                  </option>

                  <option value="intermediate">
                    Intermediate
                  </option>

                  <option value="senior">
                    Senior
                  </option>

                </select>

                <span className="select-arrow">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>

              </div>

            </div>

            <div className="form-group">

              <label className="form-label">
                Tech Stack
              </label>

              <div className="form-input-wrapper">

                <span className="form-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>

                <input
                  className="form-input"
                  type="text"
                  placeholder="React, Python, AWS"
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                />

              </div>

            </div>

          </div>

          <button
            type="button"
            className="form-btn"
            onClick={handleSubmit}
            disabled={loading}
          >

            {loading ? (
              "Generating..."
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>

                Start Prep
              </>
            )}

          </button>

        </div>

        <div className="form-status">

          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>

          SYSTEM READY

        </div>

      </div>

    </div>
  );
}