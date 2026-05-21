import json

from langchain_core.prompts import PromptTemplate

from langchain_groq import ChatGroq

from prompts.schedule_prompt import schedule_prompt


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

    template=schedule_prompt
)


chain = prompt | llm


def generate_schedule(data):

    response = chain.invoke({

        "role": data.role,

        "experience_level": data.experience_level,

        "tech_stack": data.tech_stack

    })

    content = response.content.strip()

    content = content.replace("```json", "")
    content = content.replace("```", "")

    parsed_json = json.loads(content)

    return parsed_json