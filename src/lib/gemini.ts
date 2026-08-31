import { GoogleGenAI } from "@google/genai";

export const GEMINI_MODEL = "gemini-3.6-flash";

export function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    throw new Error("CONFIG_MISSING");
  }
  return new GoogleGenAI({ apiKey });
}
