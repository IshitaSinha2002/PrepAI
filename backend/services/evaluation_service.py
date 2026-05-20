import os
import json

from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate

from prompts.evaluation_prompt import EVALUATION_PROMPT

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model_name="llama-3.3-70b-versatile"
)

prompt = PromptTemplate(
    input_variables=[
        "question",
        "answer"
    ],
    template=EVALUATION_PROMPT
)

def evaluate_answer(data):

    chain = prompt | llm

    response = chain.invoke({
        "question": data.question,
        "answer": data.answer
    })

    cleaned_response = (
        response.content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(cleaned_response)