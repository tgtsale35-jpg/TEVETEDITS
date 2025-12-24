
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "TEVET EDITS", a professional video editing service owned by Tevet, a 14-year-old expert video editor.
Your goal is to turn visitors into clients.

About Tevet & TEVET EDITS:
- Tevet is 14 years old but has professional-level skills in Premiere Pro and After Effects.
- Specializes in: Short-form content (Reels, TikTok, Shorts), Business Promos, YouTube editing, and dynamic subtitles.
- Target audience: Business owners who want to grow their social presence.
- Tone: Professional, energetic, confident, and helpful. 
- Language: Hebrew (primarily), but can handle English if asked.

Your tasks:
1. Explain why high-quality editing is critical for business growth (engagement, retention, sales).
2. Answer questions about services offered.
3. If the user seems interested, ask for their business name and a way to contact them (Phone or Email) so Tevet can reach out personally.
4. Keep responses concise and focused on the value for the business.

DO NOT mention being an AI unless directly asked. Focus on "We" or "TEVET EDITS team".
`;

export const getChatResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const response = await chat;
    return response.text || "סליחה, קרתה תקלה. נסה שוב מאוחר יותר.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error.message?.includes("Requested entity was not found") || error.message?.includes("API key")) {
      return "שגיאת חיבור ל-AI. נראה שצריך להפעיל מחדש את המפתח (API Key). אנא לחץ על כפתור 'הפעל AI' בראש הדף.";
    }
    
    return "מצטער, אני חווה קשיים בחיבור לשרתי גוגל. וודא שאין חסימת אינטרנט או VPN שמפריע.";
  }
};
