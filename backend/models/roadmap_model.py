from pydantic import BaseModel

class RoadmapRequest(BaseModel):
    role: str
    experience_level: str
    tech_stack: str