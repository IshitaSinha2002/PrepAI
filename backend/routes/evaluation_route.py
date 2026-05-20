from fastapi import APIRouter

from models.evaluation_model import EvaluationRequest
from services.evaluation_service import evaluate_answer

router = APIRouter()

@router.post("/evaluate-answer")
def evaluate(data: EvaluationRequest):

    result = evaluate_answer(data)

    return {
        "success": True,
        "data": result
    }