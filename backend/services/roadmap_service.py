import json
import os
from dotenv import load_dotenv

from langchain_core.prompts import PromptTemplate
from langchain_groq import ChatGroq

from prompts.roadmap_prompt import ROADMAP_PROMPT

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0.7
)

prompt = PromptTemplate(
    input_variables=[
        "role",
        "experience_level",
        "tech_stack"
    ],
    template=ROADMAP_PROMPT
)


def generate_roadmap(data):

    chain = prompt | llm

    response = chain.invoke({
        "role": data.role,
        "experience_level": data.experience_level,
        "tech_stack": data.tech_stack
    })

    print("RAW RESPONSE:")
    print(response.content)

    cleaned_response = (
        response.content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    roadmap = json.loads(cleaned_response)

    return roadmap