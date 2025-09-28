import os
from openai import OpenAI

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY", "your-api-key-here"))

def get_chatbot_response(user_message: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful customer service chatbot for an automotive company. Answer questions about cars, services, maintenance, and provide friendly assistance."},
                {"role": "user", "content": user_message}
            ],
            max_tokens=150,
            temperature=0.7
        )
        content = response.choices[0].message.content
        if content:
            return content.strip()
        else:
            return "I received no response from the AI. Please try again."
    except Exception as e:
        return "Sorry, I'm having trouble responding right now. Please try again later."
