import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMemberWish = async (memberName: string): Promise<string> => {
  if (!apiKey) {
    return "API Key missing. But we know you are awesome!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, fun, and heartwarming celebratory 2nd anniversary wish for a member named "${memberName}" of an Instagram group called "Secret Society". 
      The tone should be friendly, slightly mysterious, and celebratory. 
      Mix English and Bengali (Banglish) if possible for a local touch. 
      Keep it under 30 words.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || `Cheers to ${memberName} for being an amazing part of Secret Society!`;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Happy 2nd Anniversary, ${memberName}! The Secret Society cherishes you.`;
  }
};