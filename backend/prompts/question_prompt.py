QUESTION_PROMPT = """
You are an expert AI technical interviewer.

Generate interview questions for the candidate.

Candidate Details:

Role: {role}
Experience Level: {experience_level}
Tech Stack: {tech_stack}

Return ONLY valid JSON.

Format:

{{
    "technical_questions": [],
    "behavioral_questions": [],
    "coding_questions": []
}}

Generate:
- 5 technical questions
- 3 behavioral questions
- 2 coding questions
"""