# Vendo Pharmacy - Grok API Chatbot Integration

## Overview

This updated version of your Vendo Pharmacy website now includes an **intelligent AI chatbot powered by Grok API** that strictly answers questions related to Vendo Pharmacy and the business proposal.

---

## What's Changed

### 1. **Enhanced Chatbot (`js/chatbot.js`)**
- **Grok API Integration**: The chatbot now uses Grok's `llama-3.3-70b-versatile` model for intelligent responses
- **Context-Aware**: Configured with comprehensive context about Vendo Pharmacy's business model, services, and operations
- **Strict Topic Filtering**: The AI will ONLY answer questions about Vendo Pharmacy and politely redirect off-topic queries
- **Professional Responses**: Natural, conversational responses based on your proposal content

### 2. **Updated Styling (`css/custom-enhanced.css`)**
- Added typing indicator animation for better user experience
- Smooth loading effect while the AI generates responses

---

## Key Features

### ✅ **Context-Aware Responses**
The chatbot knows about:
- Vendo Pharmacy's 24/7 automated service
- Business model and value proposition
- Target customers and market segments
- SWOT analysis
- Marketing strategy (4Ps)
- Future growth plans
- Partnership with MOH's PNRI

### ✅ **Strict Topic Control**
- Only answers questions about Vendo Pharmacy
- Redirects unrelated questions (e.g., "What's the weather?") back to pharmacy topics
- Maintains professional tone aligned with your business

### ✅ **Simple Integration**
- No backend server required
- Works directly in the browser
- Existing chatbot UI remains the same (bottom-left corner)

---

## Implementation Instructions

### **Option 1: Direct Use (Simplest)**
1. Extract the updated files
2. Open `index.html` in a web browser
3. The chatbot is ready to use immediately!

### **Option 2: Deploy to Web Hosting**
1. Upload all files to your web hosting service (e.g., GitHub Pages, Netlify, Vercel)
2. Ensure all file paths remain intact
3. Access via your domain URL

### **Option 3: Local Testing**
1. Open terminal/command prompt
2. Navigate to the website folder
3. Run a local server:
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   
   # Node.js (if you have http-server installed)
   npx http-server -p 8080
   ```
4. Open browser and go to `http://localhost:8080`

---

## Testing the Chatbot

### **Questions to Try:**
✅ **Relevant Questions** (Will get detailed AI responses):
- "What are your operating hours?"
- "How does the prescription collection work?"
- "What makes Vendo Pharmacy different from traditional pharmacies?"
- "Tell me about your business model"
- "What is your target market?"
- "How do you ensure medication safety?"
- "What are your future growth plans?"

❌ **Off-Topic Questions** (Will be politely redirected):
- "What's the weather today?"
- "Who won the football match?"
- "Tell me a joke"
- The chatbot will respond: *"I'm VendoBot, specialized in answering questions about Vendo Pharmacy. Please ask me about our services, locations, operating hours, or business model."*

---

## Technical Details

### **API Configuration**
- **Provider**: Groq Cloud
- **Model**: `llama-3.3-70b-versatile`
- **API Key**: Already integrated (starts with `gsk_xx05...`)
- **Endpoint**: `https://api.groq.com/openai/v1/chat/completions`

### **Files Modified**
1. **`js/chatbot.js`** - Complete rewrite with Grok API integration
2. **`css/custom-enhanced.css`** - Added typing indicator animation

### **Files Unchanged**
- All HTML pages remain the same
- Existing chatbot UI (bottom-left widget) unchanged
- No changes to other JavaScript or CSS files

---

## Security Notes

⚠️ **API Key Exposure**: The API key is currently embedded in the client-side JavaScript. For production use, consider:
1. **Rate Limiting**: Monitor Groq API usage to prevent abuse
2. **Domain Restrictions**: Configure API key restrictions in Groq dashboard (if available)
3. **Backend Proxy** (Advanced): Move API calls to a backend server to hide the key

For a school project, the current implementation is perfectly fine!

---

## Troubleshooting

### **Chatbot not responding?**
1. Check browser console (F12 → Console tab) for errors
2. Verify internet connection (API requires online access)
3. Ensure the API key is valid

### **Getting generic responses?**
- The AI is working correctly but may need more specific questions
- Try asking about specific features like "prescription collection" or "business model"

### **Chatbot widget not appearing?**
- Ensure `chatbot.js` is properly linked in your HTML files
- Check that the chat widget HTML elements exist in the page

---

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all files are in the correct locations
3. Test with the sample questions provided above

---

## Summary

Your chatbot is now **AI-powered** and will intelligently answer questions about Vendo Pharmacy while staying strictly on-topic. The integration is simple, requires no backend, and works seamlessly with your existing website design.

**Enjoy your smart pharmacy assistant! 🤖💊**
