import React from "react";
import "../styles/answer.css";

const Answer = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">PrepAI</h1>
      </header>

      <main className="main-content">
        {/* Left Column */}
        <div className="left-column">
          {/* Final Evaluation Card */}
          <div className="card evaluation-card">
            <p className="card-label">FINAL EVALUATION</p>
            <div className="score-wrapper">
              <span className="score-number">8.5</span>
              <span className="score-total">/10</span>
            </div>
            <h2 className="score-title">Strong Analysis</h2>
            <p className="score-desc">
              You've demonstrated a solid understanding of core principles with a
              structured delivery.
            </p>
          </div>

          {/* Performance Metrics Card */}
          <div className="card metrics-card">
            <p className="metrics-label">PERFORMANCE METRICS</p>
            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-name">Technical Accuracy</span>
                <span className="metric-value">92%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-name">Clarity &amp; Structure</span>
                <span className="metric-value">78%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-name">Keyword Usage</span>
                <span className="metric-value">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Detailed Analysis Card */}
          <div className="card analysis-card">
            <h2 className="analysis-title">
              <span className="analysis-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              Detailed Analysis
            </h2>

            {/* Strengths */}
            <div className="analysis-section">
              <div className="section-header strengths-header">
                <span className="section-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span className="section-label">STRENGTHS</span>
              </div>
              <p className="section-text">
                Your explanation of eventual consistency was precise and showed
                practical knowledge of distributed databases. You successfully
                identified critical bottlenecks in monolithic systems.
              </p>
            </div>

            {/* Weaknesses */}
            <div className="analysis-section">
              <div className="section-header weaknesses-header">
                <span className="section-icon warning-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </span>
                <span className="section-label weaknesses-label">WEAKNESSES</span>
              </div>
              <p className="section-text">
                You missed the opportunity to discuss the 'Saga Pattern' for
                managing transactions across distributed boundaries and failed to
                mention specific consensus algorithms like Paxos or Raft.
              </p>
            </div>

            {/* Improvements */}
            <div className="analysis-section">
              <div className="section-header improvements-header">
                <span className="section-icon improvements-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </span>
                <span className="section-label improvements-label">IMPROVEMENTS</span>
              </div>
              <p className="section-text">
                Incorporating more specific architectural patterns like SAGA would
                elevate your technical authority. Focus on connecting scaling
                challenges directly to data integrity strategies in future responses.
              </p>
            </div>
          </div>

          {/* Actionable Next Steps */}
          <div className="card next-steps-card">
            <p className="next-steps-label">ACTIONABLE NEXT STEPS</p>
            <div className="steps-grid">
              <div className="step-item">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Study Saga Pattern</h4>
                  <p className="step-desc">Review distributed transaction management strategies.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Latency Analysis</h4>
                  <p className="step-desc">Deep dive into p99 latency considerations for APIs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Feedback */}
          <div className="card feedback-card">
            <p className="feedback-label">FINAL FEEDBACK</p>
            <p className="feedback-text">
              Overall, this was a highly competent answer that demonstrates
              readiness for senior-level architectural discussions. By adding more
              formal design patterns to your vocabulary, you will move from
              'Strong' to 'Expert' level performance.
            </p>
          </div>

          {/* Footer Actions */}
          <div className="actions-row">
            <button className="roadmap-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              Review Prep Roadmap
            </button>
            <button className="try-btn">Try Another Question</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-logo">PrepAI</p>
        <p className="footer-copy">© 2024 PrepAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Answer;