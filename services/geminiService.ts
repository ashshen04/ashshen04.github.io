import { GoogleGenAI } from "@google/genai";

export const fetchWelcomeMessage = async (): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      // Fallback if no API key is present in this demo environment
      return "Welcome to the digital garden, where ideas bloom.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Write a short, poetic, and welcoming sentence for a digital garden portfolio website. It should feel calm, organic, and inspiring. Max 15 words. Do not use quotes.",
    });

    return response.text || "Welcome to my digital garden.";
  } catch (error) {
    console.error("Error fetching welcome message:", error);
    return "A space for thoughts to grow.";
  }
};