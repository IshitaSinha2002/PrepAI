schedule_prompt = """
Generate a professional interview preparation schedule.

Role: {role}

Experience Level: {experience_level}

Tech Stack: {tech_stack}

Return ONLY valid JSON array.

Example:

[
  {{
    "time": "09:00 AM",
    "duration": "60 mins",
    "title": "React Fundamentals",
    "desc": "Practice hooks and state management.",
    "live": false
  }},
  {{
    "time": "02:00 PM",
    "duration": "45 mins",
    "title": "Mock Interview",
    "desc": "Practice system design questions.",
    "live": true
  }}
]

Do not add explanations.
Do not add markdown.
Return only JSON.
"""