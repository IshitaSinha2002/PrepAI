import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const generateRoadmap = async (data) => {

  const response = await axios.post(
    `${BASE_URL}/generate-roadmap`,
    data
  );

  return response.data;
};

export const generateQuestions = async (data) => {

  const response = await axios.post(
    `${BASE_URL}/generate-questions`,
    data
  );

  return response.data;
};

export const evaluateAnswer = async (data) => {

  const response = await axios.post(
    `${BASE_URL}/evaluate-answer`,
    data
  );

  return response.data;
};