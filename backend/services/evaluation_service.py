from langchain_core.prompts import PromptTemplate

from langchain_groq import ChatGroq


llm = ChatGroq(

    model="llama-3.3-70b-versatile",

    temperature=0.5
)


prompt = PromptTemplate(

    input_variables=[
        "question",
        "answer"
    ],

    template="""
You are an interview evaluator.

Question:
{question}

Candidate Answer:
{answer}

Evaluate the answer professionally.

Give:
1. Strengths
2. Missing points
3. Improvement suggestion

Keep response within 5-6 lines.
"""
)


chain = prompt | llm


def evaluate_answer(data):

    response = chain.invoke({

        "question": data.question,

        "answer": data.answer

    })

    return response.content