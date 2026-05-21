from fastapi import APIRouter

from models.schedule_model import ScheduleRequest

from services.schedule_service import generate_schedule


router = APIRouter()


@router.post("/generate-schedule")
def generate(data: ScheduleRequest):

    schedule = generate_schedule(data)

    return {

        "schedule": schedule

    }