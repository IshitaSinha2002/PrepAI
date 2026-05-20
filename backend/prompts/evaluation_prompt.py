EVALUATION_PROMPT = """
You are an expert AI interviewer.

Evaluate the candidate answer.

Question:
{question}

Candidate Answer:
{answer}

Return ONLY valid JSON.

Format:

{{
    "score": 0,
    "strengths": [],
    "weaknesses": [],
    "improvements": [],
    "final_feedback": ""
}}

Evaluation Rules:
- score out of 10
- evaluate clarity
- evaluate technical depth
- evaluate communication
- give constructive feedback
"""