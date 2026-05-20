import json

from langchain_core.prompts import PromptTemplate
from langchain_groq import ChatGroq


llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7
)


prompt = PromptTemplate(

    input_variables=[
        "role",
        "experience_level",
        "tech_stack"
    ],

    template="""
Generate 5 interview questions.

Role: {role}
Experience Level: {experience_level}
Tech Stack: {tech_stack}

Return ONLY valid JSON array.

Example:

[
  {{
    "question": "Explain React Virtual DOM.",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Technical"
  }}
]

DO NOT write explanations.
DO NOT use markdown.
DO NOT use ```json.
"""
)


chain = prompt | llm


def generate_questions(data):

    response = chain.invoke({

        "role": data.role,
        "experience_level": data.experience_level,
        "tech_stack": data.tech_stack

    })

    content = response.content.strip()

    content = content.replace("```json", "")
    content = content.replace("```", "")

    # THIS IS THE IMPORTANT FIX

    parsed_json = json.loads(content)

    return {
        "questions": parsed_json
    }