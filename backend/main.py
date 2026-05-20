from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.roadmap import router as roadmap_router
from routes.question_route import router as question_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(roadmap_router)
app.include_router(question_router)
@app.get("/")
def home():
    return {
        "message": "AI Interview Prep Backend Running"
    }