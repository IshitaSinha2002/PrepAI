from fastapi import APIRouter

from models.roadmap_model import RoadmapRequest
from services.roadmap_service import generate_roadmap

router = APIRouter()

@router.post("/generate-roadmap")
def generate(data: RoadmapRequest):

    roadmap = generate_roadmap(data)

    return {
        "success": True,
        "data": roadmap
    }