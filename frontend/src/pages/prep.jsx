import React from "react";
import "../styles/prep.css";

const stages = [
  { num: "01", label: "Fundamentals", status: "complete" },
  { num: "02", label: "Technical Deep Dive", status: "inprogress", progress: 64 },
  { num: "03", label: "System Design", status: "locked" },
  { num: "04", label: "Behavioral Prep", status: "locked" },
];

const schedule = [
  {
    time: "09:00 AM",
    duration: "60 mins",
    title: "Data Structures",
    desc: "Advanced Heap & Priority Queue implementation exercises.",
    live: false,
  },
  {
    time: "02:00 PM",
    duration: "45 mins",
    title: "Mock Interview",
    desc: "Focused on Algorithm optimization with Senior AI Proctor.",
    live: true,
    link: true,
  },
  {
    time: "05:30 PM",
    duration: "30 mins",
    title: "Behavioral Review",
    desc: 'Reviewing "Star Method" responses for recent project challenges.',
    live: false,
  },
];

function StageIcon({ status }) {
  if (status === "complete") {
    return (
      <div className="stage-icon stage-icon--complete">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }
  if (status === "inprogress") {
    return (
      <div className="stage-icon stage-icon--inprogress">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    );
  }
  return (
    <div className="stage-icon stage-icon--locked">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </div>
  );
}

export default function Prep({ onLaunch }) {
  return (
    <div className="prep-root">
      <header className="prep-header">
        <span className="prep-logo">PrepAI</span>
      </header>

      <main className="prep-main">
        {/* Roadmap */}
        <section className="roadmap-card">
          <div className="roadmap-top">
            <h2 className="roadmap-title">Interview Prep Roadmap</h2>
            <span className="roadmap-badge">Level: Intermediate</span>
          </div>
          <div className="roadmap-stages">
            {stages.map((s, i) => (
              <React.Fragment key={s.num}>
                <div className={`stage ${s.status}`}>
                  <StageIcon status={s.status} />
                  <div className="stage-num">STAGE {s.num}</div>
                  <div className="stage-label">{s.label}</div>
                  <div className={`stage-sub stage-sub--${s.status}`}>
                    {s.status === "complete" && "Complete"}
                    {s.status === "inprogress" && `In Progress (${s.progress}%)`}
                    {s.status === "locked" && "Locked"}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className={`stage-connector ${s.status === "complete" ? "connector--done" : ""}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Bottom grid */}
        <div className="prep-grid">
          {/* Schedule */}
          <section className="schedule-card">
            <div className="schedule-header">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <h3 className="schedule-title">Today's Schedule</h3>
            </div>
            <div className="schedule-list">
              {schedule.map((item, i) => (
                <div className="schedule-item" key={i}>
                  <div className={`schedule-dot ${item.live ? "dot--live" : item.time === "05:30 PM" ? "dot--dim" : "dot--normal"}`} />
                  <div className="schedule-body">
                    <div className="schedule-row1">
                      <span className="schedule-time">{item.time}</span>
                      {item.live && <span className="live-badge">LIVE</span>}
                      <span className="schedule-duration">{item.duration}</span>
                    </div>
                    <div className="schedule-name">{item.title}</div>
                    <div className="schedule-desc">{item.desc}</div>
                    {item.link && (
                      <a className="schedule-link" href="#">
                        Enter Session <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right column */}
          <div className="prep-right">
            {/* Launch card */}
            <div className="launch-card">
              <h3 className="launch-title">Start your preparation session</h3>
              <p className="launch-desc">
                Launch our high-fidelity AI environment to practice real-time technical questions tailored to your skill gaps.
              </p>
              <button
  type="button"
  className="launch-btn"
  onClick={() => {
    console.log("Launch Q&A Clicked");
    window.location.href = "/question";
  }}
>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Launch AI Q&A
              </button>
              <span className="launch-powered">POWERED BY PREPAI INTELLIGENCE</span>
            </div>

            {/* Daily insight */}
            <div className="insight-card">
              <div className="insight-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <div className="insight-text">
                <div className="insight-label">Daily Insight</div>
                <div className="insight-value">Your logic skills improved by 12% today.</div>
              </div>
              <div className="insight-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
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