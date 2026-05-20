import os
import json

from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate

from prompts.question_prompt import QUESTION_PROMPT

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model_name="llama-3.1-8b-instant"
)

prompt = PromptTemplate(
    input_variables=[
        "role",
        "experience_level",
        "tech_stack"
    ],
    template=QUESTION_PROMPT
)

def generate_questions(data):

    chain = prompt | llm

    response = chain.invoke({
        "role": data.role,
        "experience_level": data.experience_level,
        "tech_stack": data.tech_stack
    })

    cleaned_response = (
        response.content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(cleaned_response)