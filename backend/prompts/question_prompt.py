QUESTION_PROMPT = """
You are an AI Interview Preparation Assistant.

Generate ONE interview question based on:

Role: {role}
Experience Level: {experience_level}
Tech Stack: {tech_stack}

Return ONLY valid JSON.

Format:

{{
  "question": "",
  "difficulty": "",
  "category": "",
  "hints": [
    "",
    ""
  ]
}}

Rules:
- Question should match role and tech stack
- difficulty should be:
  Junior
  Intermediate
  Senior
- category should be technical area
- hints should contain 2 short hints
"""