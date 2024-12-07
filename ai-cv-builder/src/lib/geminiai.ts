import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyD2BNrssKj0azwOT9b7UT7k87mmkZW3rnk";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
});
