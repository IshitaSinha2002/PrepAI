from fastapi import APIRouter

from models.question_model import QuestionRequest
from services.question_service import generate_questions

router = APIRouter()


@router.post("/generate-questions")
def generate(data: QuestionRequest):

    questions = generate_questions(data)

    return {
        "questions": questions
    }