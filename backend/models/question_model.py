from pydantic import BaseModel

class QuestionRequest(BaseModel):
    role: str
    experience_level: str
    tech_stack: str