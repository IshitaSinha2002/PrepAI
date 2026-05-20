import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate

from prompts import Prompt

load_dotenv()

llm = ChatGroq(
    groq_api_key = os.getenv("GROQ_API_KEY"),
    model_name = "llama-3.1-8b-instant"
)

prompt = PromptTemplate(
    input_variables=[
        "role",
        "experience_level",
        "tech_stack"
    ],
    template=Prompt
)

def generate_roadmap(role, experience_level, tech_stack):

    chain = prompt | llm

    response = chain.invoke({
        "role": role,
        "experience_level": experience_level,
        "tech_stack": tech_stack
    })

    return response.content