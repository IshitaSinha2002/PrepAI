ROADMAP_PROMPT = """
You are an AI interview preparation expert.

Generate an interview preparation roadmap.

Role: {role}
Experience Level: {experience_level}
Tech Stack: {tech_stack}

Return ONLY valid JSON array.

Format:

[
  {{
    "label": "",
    "status": "",
    "progress": 0
  }}
]

Rules:
- Generate 4 roadmap stages
- status must be:
  "complete"
  "inprogress"
  "locked"
- Only one stage should be "inprogress"
- progress only for inprogress stage
"""