from pydantic import BaseModel

class ScheduleRequest(BaseModel):

    role: str

    experience_level: str

    tech_stack: str