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

You are a travel assistant chatbot. Ask follow-up questions to plan the user's trip, such as travel budget, group size, and trip duration. Once all required information is collected, you will generate a final plan.

⚠️ Respond in the following strict JSON format ONLY:

{
  "resp": "Your message to show in UI",
  "ui": "budget/groupSize/tripDuration/final"
}


- If the user said their destination but not duration:  
  {"resp": "How long do you plan to stay in New York?", "ui": "tripDuration"}

❌ Do NOT add explanations, markdown, or any text outside the JSON. Just return a JSON object like above.

`
export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  console.log(messages);

  try {
      const completion = await client.chat.completions.create({
          model: "gpt-4",
          messages: [
              {
                  role: "system",
                  content: PROMPT,
              },
              ...messages,
          ],
      });

      const messageContent = completion.choices[0].message.content || "";

      // ✅ Try parsing GPT response as JSON
      try {
          const parsed = JSON.parse(messageContent);
          // ✅ Only return if it includes both required keys
          if (parsed.resp && parsed.ui) {
              return NextResponse.json(parsed);
          } else {
              throw new Error("Missing 'resp' or 'ui' keys in JSON.");
          }
      } catch (jsonErr) {
          console.error("❌ Failed to parse GPT response as JSON:", messageContent);
          return NextResponse.json(
              { error: "Model response is not valid JSON. Please check prompt format or model behavior." },
              { status: 500 }
          );
      }

  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
