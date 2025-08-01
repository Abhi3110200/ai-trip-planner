"use server"
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
});

const PROMPT = `
  You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

Only ask questions about the following details in order, and wait for the user’s answer before asking the next:

1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences (if any)

- Do not ask multiple questions at once, and never ask irrelevant questions.
- If any answer is missing or unclear, politely ask the user to clarify before proceeding.
- Always maintain a conversational, interactive style while asking questions.

Along with the response, also send which UI component to display for generative UI — for example: 'budget/groupSize/TripDuration/Final', where 'Final' means AI-generated response is complete.

Once all required information is collected, generate and return a strict JSON response only (no explanations or extra text) with the following schema:

{
  resp: 'Text Resp',
  ui: 'budget/groupSize/TripDuration/Final'
}`
export async function POST(req: NextRequest) {
    const { messages } = await req.json();
    console.log(messages);

    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4", // or "gpt-3.5-turbo" if you're not using GPT-4
            messages: [
              {
                role: "system",
                content: PROMPT,
              },
              ...messages,
            ],
          });
      
        console.log("HIS",completion.choices[0].message.content);
        return NextResponse.json({ resp: completion.choices[0].message.content });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
