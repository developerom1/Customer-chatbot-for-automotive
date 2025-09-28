# Realtime Customer Chatbot for Automotive Industry

This is a fully operational realtime customer support chatbot tailored for the automotive industry. It uses FastAPI for the backend, WebSockets for realtime communication, OpenAI's GPT-3.5-turbo for AI-powered responses focused on cars, services, maintenance, and general assistance, and a modern web UI built with HTML, CSS, and JavaScript.

## Features
- **Realtime Chat**: Instant messaging via WebSockets.
- **AI-Powered Responses**: Handles automotive-specific queries (e.g., "How do I change my oil?" or "What are your service hours?"). Falls back gracefully if no OpenAI API key is provided.
- **Responsive UI**: Clean, user-friendly chat interface with auto-scrolling, user/bot message styling, and input validation (ignores empty messages).
- **Easy Setup**: Runs locally with a virtual environment; no complex configuration needed.
- **Tested**: Server startup, UI rendering, WebSocket connection, message sending/receiving, edge cases (empty inputs, disconnects), and favicon handling.

## Project Structure
- `main.py`: FastAPI application with WebSocket endpoint (`/ws`), static file serving, and root route (`/`) for the UI.
- `chatbot.py`: OpenAI integration for generating responses with an automotive-focused system prompt.
- `requirements.txt`: Dependencies (FastAPI, Uvicorn, OpenAI, etc.).
- `static/`:
  - `index.html`: Chat interface layout.
  - `styles.css`: Styling for a professional look (centered container, blue user messages, gray bot messages).
  - `script.js`: WebSocket connection, message handling, and UI interactions (Enter key support).
- `.gitignore`: Ignores virtual environments, caches, and IDE files.
- `TODO.md`: Tracks project tasks (all completed).

## Prerequisites
- Python 3.8+.
- OpenAI API key (optional for full AI; get from [OpenAI Dashboard](https://platform.openai.com/api-keys)). Without it, the bot uses a fallback response.

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone https://github.com/developerom1/Customer-chatbot-for-automotive.git
   cd Customer-chatbot-for-automotive
   ```

2. **Create Virtual Environment**:
   ```
   python -m venv venv
   ```

3. **Activate Virtual Environment**:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

4. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

5. **Set OpenAI API Key (Optional)**:
   - Windows: `set OPENAI_API_KEY=your_api_key_here`
   - macOS/Linux: `export OPENAI_API_KEY=your_api_key_here`

6. **Run the Server**:
   ```
   python main.py
   ```
   The server starts on `http://localhost:8001`.

7. **Access the Chatbot**:
   Open `http://localhost:8001` in your browser. Type a message (e.g., "Tell me about electric vehicles") and press Send or Enter. Responses appear in realtime.

## Testing
- **Server & UI**: Loads without errors; WebSocket connects automatically.
- **Chat Functionality**: Messages send/receive instantly; bot responds contextually (AI or fallback).
- **Edge Cases**: Empty messages ignored; multiple messages handled; disconnects logged.
- **Browser Compatibility**: Tested in Chrome (resolution 900x600); responsive design.

## Usage Example
- User: "What maintenance do I need for my SUV?"
- Bot: "For your SUV, regular maintenance includes oil changes every 5,000-7,500 miles, tire rotations every 6,000 miles, and brake inspections annually. Schedule a service at our dealership for a full check-up!"

## Deployment
- Deploy FastAPI to platforms like Heroku, Vercel, or AWS (use Uvicorn for production).
- Set `OPENAI_API_KEY` as an environment variable.
- Serve static files via CDN if scaling.

## Contributing
Fork the repo, create a branch, make changes, and submit a pull request. Ensure code follows PEP 8 standards.

## License
This project is open-source under the MIT License.

---

Built with ❤️ for automotive customer support. Questions? Open an issue on GitHub!
