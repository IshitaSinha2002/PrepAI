import React, { useEffect, useState } from "react";

import "../styles/question.css";

import { evaluateAnswer } from "../services/api";


export default function Question({ onNext }) {

  const [answer, setAnswer] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [feedback, setFeedback] = useState(null);

  const [question, setQuestion] = useState(null);


  useEffect(() => {

    const stored = localStorage.getItem("questionData");

    if (stored) {

      const parsedData = JSON.parse(stored);

      const questions = parsedData.questions;

      if (questions && questions.length > 0) {

        setQuestion(questions[0]);
      }
    }

  }, []);


  if (!question) {

    return <h1>Loading Question...</h1>;
  }


  const handleSubmit = async () => {

    if (!answer.trim()) return;

    try {

      const response = await evaluateAnswer({

        question: question.question,

        answer: answer

      });

      setSubmitted(true);

      setFeedback(response.feedback);

    } catch (error) {

      console.log(error);

    }
  };


  const handleRegenerate = () => {

    setAnswer("");

    setSubmitted(false);

    setFeedback(null);
  };


  return (

    <div className="question-root">

      <header className="question-header">

        <span className="question-logo">
          PrepAI
        </span>

      </header>

      <main className="question-main">

        {/* Left panel */}

        <div className="question-left">

          <div className="question-card">

            <div className="question-card-header">

              <div className="challenge-label">

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">

                  <circle cx="12" cy="12" r="10" />

                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />

                  <line x1="12" y1="17" x2="12.01" y2="17" />

                </svg>

                CURRENT CHALLENGE

              </div>

            </div>

            <p className="question-text">
              {question.question}
            </p>

            <div className="question-tags">

              <span className="question-tag">
                {question.topic}
              </span>

              <span className="question-tag">
                {question.type}
              </span>

              <span className="question-tag">
                {question.difficulty}
              </span>

            </div>

            <div className="question-actions">

              <button
                className="action-btn"
                onClick={handleRegenerate}
              >

                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                  <polyline points="1 4 1 10 7 10" />

                  <path d="M3.51 15a9 9 0 1 0 .49-3" />

                </svg>

                Regenerate

              </button>

              <button
                className="action-btn action-btn--next"
                onClick={onNext}
              >

                Next Question

                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                  <line x1="5" y1="12" x2="19" y2="12" />

                  <polyline points="12 5 19 12 12 19" />

                </svg>

              </button>

            </div>

          </div>

          {/* Focus Tip */}

          <div className="tip-card">

            <div className="tip-icon">

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

            <div className="tip-content">

              <div className="tip-title">
                Focus Tip
              </div>

              <div className="tip-text">
                Use technical keywords and structured explanations for better evaluation.
              </div>

            </div>

          </div>

        </div>

        {/* Right panel */}

        <div className="question-right">

          <div className="response-card">

            <div className="response-header">

              <span className="response-title">
                Your Response
              </span>

              <div className="response-dots">

                <span className="dot-indicator" />

                <span className="dot-indicator" />

              </div>

            </div>

            <textarea
              className="response-textarea"
              placeholder="Type your detailed answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

          </div>

          <div className="submit-row">

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!answer.trim()}
            >

              Submit Answer

              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                <line x1="22" y1="2" x2="11" y2="13" />

                <polygon points="22 2 15 22 11 13 2 9 22 2" />

              </svg>

            </button>

          </div>

          <div className="feedback-area">

            {submitted && feedback ? (

              <div className="feedback-box">

                <div className="feedback-label">
                  AI Feedback
                </div>

                <p className="feedback-text">
                  {feedback}
                </p>

              </div>

            ) : (

              <div className="feedback-placeholder">

                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">

                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />

                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />

                  <circle cx="17" cy="19" r="3" />

                  <line x1="17" y1="17" x2="17" y2="21" />

                  <line x1="15" y1="19" x2="19" y2="19" />

                </svg>

                <span className="feedback-hint">
                  Complete your answer to see AI feedback
                </span>

              </div>

            )}

          </div>

        </div>

      </main>

    </div>
  );
}