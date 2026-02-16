// Enhanced AI Assistant Chatbot with 100% Complete Website Knowledge
// Manually extracted from every page - includes ALL products, services, and details
// Features: Chat history persistence, full content awareness, subtle filtering, larger UI
document.addEventListener('DOMContentLoaded', function() {
    const chatWidget = document.getElementById('chat-widget');
    const chatButton = document.getElementById('chat-button');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    if (!chatWidget || !chatButton) return;

    // Grok API Configuration
    const GROK_API_KEY = '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';
    const GROK_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    // Chat history storage keys
    const CHAT_HISTORY_KEY = 'vendoPharmacyChatHistory';
    const CONVERSATION_HISTORY_KEY = 'vendoPharmacyConversation';

    // COMPREHENSIVE SYSTEM CONTEXT - 100% ACCURATE FROM WEBSITE
    const SYSTEM_CONTEXT = `You are an intelligent AI assistant for Vendo Pharmacy's website. You have complete, accurate knowledge of everything on the website.

=== PRODUCTS WE SELL ===

**GSL (General Sale List) Products - Available Directly:**
1. Paracetamol 500mg - Pain & fever relief - 20 tablets - $5.90
2. Lozenges - Sore throat relief - 24 lozenges - $8.50
3. Bandages - Adhesive bandages - 50 pack - $6.90
4. Digital Thermometer - Fast & accurate reading - $12.90
5. Glyprin Dispersible Tablet - 30 per pack - $7.00

**Pharmacy-Only (P) Products - Require Pharmacist Authorization:**
1. Antihistamine - Allergy relief - 30 tablets - $15.90
2. Anti-Nausea - Motion sickness - 10 tablets - $18.50
3. Cough Syrup - Relief for dry cough - 100ml - $12.90

**Other Products:**
1. Customised Travel Medication Kits - Tailored to destination and trip length
2. First-Aid Kits - Ready-to-use for home, school, work, or travel
3. Health Supplements - Vitamin D, calcium, probiotics with on-screen education
4. Selected POM (Prescription-Only Medicines) - For stable chronic conditions via secure locker

=== PRICING ===
- Prices are approximately 30% higher than standard retail pharmacies
- This covers: 24/7 availability, secure infrastructure, convenient locations, maintenance
- Discounts available: Hospital referral vouchers for repeat secure locker users

Comparison:
- Traditional Pharmacy: Standard retail price, longer waiting time, limited hours
- Vendo Pharmacy: 30% above retail, fast pickup (2-5 min), 24/7 access

=== TEAM MEMBERS (4 People in Reflection) ===

1. **YUHAO** - Pharmaceutical Science Student at Nanyang Polytechnic
   - Developed Business Model Overview section
   - Designed PIRATE Funnel (AARRR) framework
   - Created Conclusion and Future Growth Plans section
   - Coordinated team discussions

2. **COLLIN** - Pharmaceutical Science Student at Nanyang Polytechnic
   - Developed Value Proposition section
   - Created Business Strategy & Operations section
   - Designed workflow diagrams and operational frameworks
   - Contributed to quality assurance discussions

3. **OLIVIA** - Pharmaceutical Science Student at Nanyang Polytechnic
   - Led Marketing Plan (4Ps) development
   - Conducted competitive analysis and market research
   - Designed promotional strategies and customer engagement plans
   - Coordinated content consistency

4. **MICHELLE** - Pharmaceutical Science Student at Nanyang Polytechnic
   - Defined Vendo Pharmacy's unique value proposition
   - Conducted market analysis and customer segmentation
   - Contributed to SWOT analysis and PIRATE funnel
   - Developed future business evolution section

=== ABOUT VENDO PHARMACY ===

**What We Are:**
Automated pharmacy vending solution providing 24/7 access to medicines in Singapore, supported by tele-pharmacy counselling and secure identity verification. Led by pharmacy owners with in-house pharmacists.

**Mission:**
- Access to Care: 24/7 access to essential medications
- Safety to Assure: Pharmacists involved for P/POM supply through tele-pharmacy
- Innovate to Improve: AI decision support, predictive inventory, continuous improvement

**Vision:** To provide safe medicines, on demand at your convenience

**Key Partnerships:**
1. National University Hospital (NUH) - Provides pharmacist support for safe P/POM pathways
2. Hyphens Pharma - Ensures reliable medication supply, minimizes stock-outs

=== HOW IT WORKS ===

**Purchasing Medications:**
1. Locate & Browse: Find nearby VendoPharmacy unit
2. Get Smart Guidance (VendAI): Answer questions for recommendations
3. Pharmacist Review: Licensed pharmacist reviews P/POM purchases
4. Pay & Collect: Complete payment and collect medication

**Accessing Secure Locker (POM):**
1. Obtain Prescription: Consult doctor, select VendoPharmacy on HealthHub
2. Verify Identity: Use SingPass
3. Pharmacist Consultation: Tele-consultation and approval
4. Collect Medication: Access locker with OTP

=== PROBLEMS WE SOLVE ===
- Long waiting times at traditional pharmacies
- Limited access to medications outside office hours
- Inefficient access to single medications
- Hospital pharmacy congestion
- Healthcare manpower constraints

=== TARGET CUSTOMERS ===
- POM items: Patients needing prescriptions, chronic disease patients
- P items: Public seeking quick medication access (requires pharmacist counselling)
- GSL items: Public seeking convenient medication access

=== VALUE PROPOSITION ===
- 24/7 Convenience
- Pharmacist-Backed Safety
- Faster Collection (secure locker system)
- AI-Guided Self-Care (VendAI)
- Trusted & Compliant (SingPass, HSA compliance)
- Accessible Locations (MRT stations, residential estates, hospitals)

=== SWOT ANALYSIS ===

**Strengths:** 24/7 access, strong regulatory compliance, trusted partners (NUH, Hyphens Pharma), AI-driven operations, fast collection, green operations

**Weaknesses:** High initial capital, trust barriers, operational reliability risks, storage constraints, data privacy concerns, self-report bias

**Opportunities:** Consumer behavior shifts, workforce productivity alignment, HealthHub/EPS integration, scalability, public health nudges, data advantage

**Threats:** Policy tightening, reputation risk, vandalism/theft, competition from traditional pharmacies, supply shortages, rental pressure

=== PIRATE FUNNEL (AARRR) ===
1. **Awareness:** High-traffic placement, clear branding, educational messaging
2. **Acquisition:** Low-barrier onboarding, SingPass verification, multiple payment options
3. **Activation:** Rapid fulfillment (<60 seconds), seamless SingPass, on-demand pharmacist
4. **Retention:** Repeat-prescription reminders, loyalty programs, personalized recommendations
5. **Revenue:** Medication sales, consultation fees, travel kits, partnerships, data insights
6. **Referral:** Word-of-mouth, caregiver recommendations, healthcare provider endorsements

=== MARKETING STRATEGY (4Ps) ===

**Product:** OTC medications, prescription medicines, health supplements, travel kits, tele-pharmacy services

**Price:** Competitive (30% above retail), insurance collaborations, membership discounts, transparent pricing

**Promotion:** Social media campaigns, health education events, healthcare partnerships, launch ambassadors, public education

**Place:** MRT stations, residential estates, hospitals, polyclinics-adjacent areas, community centers

=== KEY SERVICES ===
1. Multi-Tier Medication Access (GSL, P, POM via lockers)
2. Decentralised Collection (outside hospital pharmacies)
3. Customised Travel Medication Kits
4. 24/7 Tele-Pharmacy Counselling
5. VendAI Decision Support System

=== FUTURE GROWTH PLANS ===
- Nationwide expansion across Singapore
- HealthHub/EPS integration
- Advanced AI for personalized recommendations
- Insurance provider partnerships
- Mobile app development
- Regional expansion to Southeast Asia

=== SAFETY & COMPLIANCE ===
- Tiered access control (GSL/P/POM)
- SingPass identity verification
- Pharmacist authorization for P and POM
- Audit-ready traceability
- Red-flag escalation
- FEFO inventory management
- Temperature-controlled storage
- HSA compliance

=== TESTIMONIALS ===

**Statistics:** 4.8/5 rating, 10,000+ satisfied users, <60s transaction time, 24/7 availability

**Customer Reviews:**
1. Mr. David Tan (Working Professional, Toa Payoh MRT): "Lifesaver for night shifts, can get medications at 2 AM"
2. Mrs. Linda Ng (Caregiver, Bedok): "Convenient for elderly mother's diabetes medications, no long queues"
3. Sarah Lim (University Student, NTU): "Saved me during exam period, VendAI helped with dosage"
4. Mr. Rajesh Kumar (Chronic Disease Patient, NUH): "Seamless refills for hypertension meds"
5. Jessica Wong (New Mother, Punggol): "Easy to get baby paracetamol without disrupting schedule"
6. Ahmad Hassan (Taxi Driver, Jurong East MRT): "Perfect for irregular work hours"

**Trust Badges:** HSA Approved, Pharmacist Supervised, PDPA Compliant, Quality Assured

=== IMPORTANT GUIDELINES ===

1. Answer questions naturally and accurately using the knowledge above
2. When asked about products, list the specific GSL and P products with prices
3. When asked about team members, name all 4: Yuhao, Collin, Olivia, Michelle with their contributions
4. For off-topic questions, gently redirect: "That's an interesting question, but I'm here to help you learn about Vendo Pharmacy. Is there anything about our services, products, or team I can explain?"
5. Be friendly, professional, and helpful
6. If asked for details not in the knowledge base, acknowledge: "For specific details about [topic], I'd recommend checking the website directly or contacting our support team."`;

    // Load chat history from localStorage
    function loadChatHistory() {
        try {
            const history = localStorage.getItem(CHAT_HISTORY_KEY);
            if (history) {
                const messages = JSON.parse(history);
                messages.forEach(msg => {
                    addMessage(msg.text, msg.isUser, false);
                });
            }
        } catch (error) {
            console.error('Error loading chat history:', error);
        }
    }

    // Save chat history to localStorage
    function saveChatHistory() {
        try {
            const messages = [];
            chatMessages.querySelectorAll('.mb-4').forEach(msgDiv => {
                const bubble = msgDiv.querySelector('div');
                if (bubble && !msgDiv.id) {
                    messages.push({
                        text: bubble.textContent,
                        isUser: msgDiv.classList.contains('text-right')
                    });
                }
            });
            localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
        } catch (error) {
            console.error('Error saving chat history:', error);
        }
    }

    // Load conversation history for API context
    function loadConversationHistory() {
        try {
            const history = localStorage.getItem(CONVERSATION_HISTORY_KEY);
            return history ? JSON.parse(history) : [];
        } catch (error) {
            console.error('Error loading conversation history:', error);
            return [];
        }
    }

    // Save conversation history for API context
    function saveConversationHistory(messages) {
        try {
            const recentMessages = messages.slice(-10);
            localStorage.setItem(CONVERSATION_HISTORY_KEY, JSON.stringify(recentMessages));
        } catch (error) {
            console.error('Error saving conversation history:', error);
        }
    }

    // Toggle chat window
    chatButton.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        if (!chatWidget.classList.contains('hidden')) {
            chatInput.focus();
        }
    });

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWidget.classList.add('hidden');
        });
    }

    // Add message to chat
    function addMessage(message, isUser = false, shouldSave = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `mb-4 ${isUser ? 'text-right' : 'text-left'}`;
        
        const bubble = document.createElement('div');
        bubble.className = `inline-block px-5 py-3 rounded-lg ${
            isUser 
                ? 'bg-[#D94A5C] text-white' 
                : 'bg-[#EBF6F5] text-[#1F2937]'
        } max-w-md text-base leading-relaxed`;
        bubble.textContent = message;
        
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        if (shouldSave) {
            saveChatHistory();
        }
    }

    // Add typing indicator
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'mb-4 text-left';
        
        const bubble = document.createElement('div');
        bubble.className = 'inline-block px-5 py-3 rounded-lg bg-[#EBF6F5] text-[#1F2937]';
        bubble.innerHTML = '<span class="typing-dots">●●●</span>';
        
        typingDiv.appendChild(bubble);
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Get bot response from Grok API with conversation history
    async function getBotResponse(userMessage) {
        try {
            const conversationHistory = loadConversationHistory();
            
            const messages = [
                {
                    role: 'system',
                    content: SYSTEM_CONTEXT
                },
                ...conversationHistory,
                {
                    role: 'user',
                    content: userMessage
                }
            ];

            const response = await fetch(GROK_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROK_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 600
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            const botResponse = data.choices[0].message.content;

            conversationHistory.push(
                { role: 'user', content: userMessage },
                { role: 'assistant', content: botResponse }
            );
            saveConversationHistory(conversationHistory);

            return botResponse;
        } catch (error) {
            console.error('Error calling Grok API:', error);
            return "I'm having trouble connecting right now. Please try again in a moment, or explore the website to learn more about Vendo Pharmacy's services.";
        }
    }

    // Send message
    async function sendMessage() {
        const message = chatInput.value.trim();
        
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            addTypingIndicator();
            
            const response = await getBotResponse(message);
            
            removeTypingIndicator();
            addMessage(response, false);
        }
    }

    // Event listeners
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Load existing chat history
    loadChatHistory();

    // Welcome message (only if no history)
    if (chatMessages.children.length === 0) {
        setTimeout(() => {
            addMessage('Hello! I\'m here to help you learn about Vendo Pharmacy. Ask me about our products, team members, services, or anything else!', false);
        }, 1000);
    }
});
