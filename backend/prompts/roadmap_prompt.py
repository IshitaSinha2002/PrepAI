ROADMAP_PROMPT = """
You are an expert technical interview coach.

Generate a detailed interview preparation roadmap.

Candidate Details:
Role: {role}
Experience Level: {experience_level}
Tech Stack: {tech_stack}

Return ONLY valid JSON.

Expected JSON format:

{{
    "core_subjects": [],
    "important_topics": [],
    "preparation_sequence": [],
    "interview_tips": [],
    "common_mistakes": []
}}
"""