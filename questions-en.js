var questions = [
    {    
		question: "When faced with a challenge, what's your first instinct?",
		options: [
			{ text: "Confront it head-on, regardless of the consequences.", weight: [3, 1, 1, 1] },
			{ text: "Carefully plan a strategy before making any moves.", weight: [1, 3, 1, 2] },
			{ text: "Work tirelessly until the challenge is overcome, even if it exhausts me.", weight: [2, 1, 3, 1] },
			{ text: "Look for ways to turn the challenge into an opportunity for personal gain.", weight: [1, 1, 1, 3] },
			{ text: "Procrastinate and hope the issue resolves itself over time.", weight: [0, 1, 2, 0] },
			{ text: "Follow someone else's lead, trusting they know the best course of action.", weight: [1, 2, 3, 1] },
			{ text: "Feel overwhelmed and avoid dealing with the challenge altogether.", weight: [0, 0, 2, 0] },
			{ text: "Try to find a creative or unconventional solution to the problem.", weight: [1, 3, 1, 2] },
			{ text: "Delegate the problem to someone else who might handle it better.", weight: [0, 1, 1, 3] },
			{ text: "Use humor or distraction to deflect the seriousness of the challenge.", weight: [2, 1, 2, 1] }
		]
	},
    {
		question: "What is important to you in your friends?",
		options: [
			{ text: "They should be easy to lead.", weight: [1, 1, 1, 3] },
			{ text: "They challenge me intellectually.", weight: [1, 3, 1, 2] },
			{ text: "They make me push myself to stay on top.", weight: [1, 2, 1, 3] },
			{ text: "They accept me for who I am.", weight: [1, 1, 3, 1] },
			{ text: "They share my sense of adventure.", weight: [3, 1, 1, 1] },
			{ text: "They have connections that can help me succeed.", weight: [1, 1, 1, 3] },
			{ text: "They are loyal and supportive.", weight: [2, 1, 3, 1] },
			{ text: "They help me feel important and valued.", weight: [1, 1, 2, 2] },
			{ text: "They bring new ideas and perspectives.", weight: [1, 3, 1, 2] },
			{ text: "They are fun and spontaneous.", weight: [3, 1, 2, 1] }
		]
	},
    {
		question: "Which of these describes your approach to learning?",
		options: [
			{ text: "I seek knowledge for its own sake; understanding the world is my goal.", weight: [1, 3, 1, 1] },
			{ text: "I learn best by jumping in and experiencing things firsthand.", weight: [3, 1, 1, 1] },
			{ text: "Consistent practice is key; I work diligently to master new skills.", weight: [1, 1, 3, 1] },
			{ text: "I focus on learning things that will help me achieve my ambitions.", weight: [1, 1, 1, 3] },
			{ text: "I learn just enough to get by; no need to go overboard.", weight: [0, 1, 2, 1] },
			{ text: "I prefer to learn from others' experiences to avoid making mistakes myself.", weight: [1, 2, 1, 2] },
			{ text: "I absorb information quickly and rely on my wit to get through.", weight: [1, 3, 1, 2] },
			{ text: "I often procrastinate but manage to learn what I need at the last minute.", weight: [1, 1, 2, 1] },
			{ text: "I enjoy collaborating with others to learn new things.", weight: [2, 1, 3, 1] },
			{ text: "I seek out challenges that test my abilities and learn from overcoming them.", weight: [3, 1, 1, 2] }
		]
	},
    {
		question: "If someone wrongs you, what is your response?",
		options: [
			{ text: "Forgive and move on, focusing on maintaining peace.", weight: [1, 1, 3, 1] },
			{ text: "Confront them directly to address the issue.", weight: [3, 1, 1, 1] },
			{ text: "Plan a way to prevent them from wronging me again.", weight: [1, 2, 1, 3] },
			{ text: "Reflect on the experience to learn and grow from it.", weight: [1, 3, 1, 1] },
			{ text: "Avoid them and focus on my own path.", weight: [0, 1, 2, 1] },
			{ text: "Act as if it didn't bother me but harbor resentment.", weight: [0, 1, 1, 2] },
			{ text: "Seek advice from others on how to handle the situation.", weight: [1, 2, 2, 1] },
			{ text: "Try to get back at them in my own way.", weight: [1, 1, 0, 3] },
			{ text: "Let it go and focus on positive relationships.", weight: [1, 1, 3, 1] },
			{ text: "Stand up for myself and make sure they understand my boundaries.", weight: [3, 1, 1, 1] }
		]
	},
    {
		question: "How do you handle stress?",
		options: [
			{ text: "I take a deep breath and try to calm myself before proceeding.", weight: [1, 2, 3, 1] },
			{ text: "I jump into action and deal with it immediately.", weight: [3, 1, 1, 1] },
			{ text: "I analyze the situation to find the most logical solution.", weight: [1, 3, 1, 2] },
			{ text: "I channel the stress into determination to achieve my goals.", weight: [2, 1, 1, 3] },
			{ text: "I ignore it and hope the problem resolves itself.", weight: [0, 1, 2, 0] },
			{ text: "I seek advice from others to help me handle it.", weight: [1, 2, 3, 1] },
			{ text: "I get frustrated and may act impulsively.", weight: [3, 1, 1, 1] },
			{ text: "I make a plan to prevent such stress in the future.", weight: [1, 2, 1, 3] },
			{ text: "I focus on other tasks to distract myself.", weight: [1, 1, 2, 1] },
			{ text: "I try to find a creative solution to the problem.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "What would you do if you found a wallet on the ground?",
		options: [
			{ text: "Turn it in to the authorities immediately.", weight: [2, 1, 3, 1] },
			{ text: "Try to find the owner myself to return it.", weight: [3, 1, 2, 1] },
			{ text: "Take the cash but return the wallet anonymously.", weight: [0, 1, 0, 3] },
			{ text: "Leave it where it is; perhaps the owner will come back for it.", weight: [1, 1, 2, 1] },
			{ text: "Take it and consider it my lucky day.", weight: [0, 0, 0, 3] },
			{ text: "Analyze the contents to decide what to do next.", weight: [1, 3, 1, 2] },
			{ text: "Keep it safe until I can find the owner myself.", weight: [2, 1, 3, 1] },
			{ text: "Ask around to see if anyone nearby has lost a wallet.", weight: [2, 1, 3, 1] },
			{ text: "Ignore it; it's not my problem.", weight: [0, 0, 1, 1] },
			{ text: "Use any identification inside to contact the owner directly.", weight: [2, 2, 2, 1] }
		]
	},
    {
		question: "How do you prefer to spend your free time?",
		options: [
			{ text: "Reading a book to expand my knowledge.", weight: [1, 3, 1, 1] },
			{ text: "Engaging in physical activities or sports.", weight: [3, 1, 1, 1] },
			{ text: "Spending quality time with friends and family.", weight: [2, 1, 3, 1] },
			{ text: "Working on a personal project to achieve my goals.", weight: [1, 1, 1, 3] },
			{ text: "Trying out new and thrilling experiences.", weight: [3, 1, 1, 2] },
			{ text: "Relaxing and taking time to recharge.", weight: [1, 1, 3, 1] },
			{ text: "Learning something new purely for the joy of it.", weight: [1, 3, 1, 1] },
			{ text: "Strategizing and planning for future goals.", weight: [1, 2, 1, 3] },
			{ text: "Volunteering or helping others in need.", weight: [2, 1, 3, 1] },
			{ text: "Engaging in creative hobbies like art or music.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "What is your biggest flaw?",
		options: [
			{ text: "I can be too trusting and sometimes get taken advantage of.", weight: [1, 1, 3, 1] },
			{ text: "I act impulsively without considering the consequences.", weight: [3, 1, 1, 1] },
			{ text: "I overanalyze things, leading to indecision.", weight: [1, 3, 1, 1] },
			{ text: "I can be manipulative to achieve my goals.", weight: [1, 1, 1, 3] },
			{ text: "I tend to avoid confrontation even when it's necessary.", weight: [1, 1, 3, 1] },
			{ text: "I'm overly competitive and focus too much on winning.", weight: [1, 1, 1, 3] },
			{ text: "I sometimes come across as arrogant because of my knowledge.", weight: [1, 3, 1, 2] },
			{ text: "I rarely acknowledge my own flaws and believe I'm usually right.", weight: [1, 2, 1, 2] },
			{ text: "I can be reckless, taking unnecessary risks.", weight: [3, 1, 1, 1] },
			{ text: "I struggle with sticking to my commitments.", weight: [1, 1, 3, 1] }
		]
	},
	{
		question: "How do you approach group work?",
		options: [
			{ text: "Take charge and lead the group to achieve our goals.", weight: [3, 1, 1, 2] },
			{ text: "Take charge and delegate tasks to others while contributing minimally myself.", weight: [1, 1, 0, 3] },
			{ text: "Ensure everyone feels included and valued in the group.", weight: [1, 1, 3, 1] },
			{ text: "Focus on doing my part to the best of my ability.", weight: [1, 3, 2, 1] },
			{ text: "Ensure the group follows the most efficient and effective plan.", weight: [1, 3, 1, 2] },
			{ text: "Stay in the background and do as I'm told.", weight: [1, 1, 2, 1] },
			{ text: "Use the opportunity to showcase my abilities and stand out.", weight: [2, 1, 1, 3] },
			{ text: "Hope that my lack of effort doesn't show and others will pick up the slack.", weight: [0, 0, 1, 1] },
			{ text: "Collaborate closely with team members to combine our strengths.", weight: [2, 1, 3, 1] },
			{ text: "Offer creative ideas and solutions to guide the project.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "How do you react when things don’t go your way?",
		options: [
			{ text: "Stay calm and analyze the situation to find a solution.", weight: [1, 3, 1, 1] },
			{ text: "Get frustrated but persistently try again until I succeed.", weight: [3, 1, 1, 1] },
			{ text: "Accept it gracefully and move on to something else.", weight: [1, 1, 3, 1] },
			{ text: "Look for someone or something to blame for the setback.", weight: [0, 0, 1, 3] },
			{ text: "Quickly devise an alternative plan to achieve my goal.", weight: [1, 2, 1, 3] },
			{ text: "Pretend it doesn't bother me, but feel upset internally.", weight: [1, 1, 2, 2] },
			{ text: "Believe that if things didn't go my way, I didn't try hard enough.", weight: [1, 1, 1, 3] },
			{ text: "Use humor to lighten the situation and keep spirits high.", weight: [2, 1, 2, 1] },
			{ text: "Take some time alone to reflect and adjust my approach.", weight: [1, 3, 1, 2] },
			{ text: "Express my frustration openly and possibly lash out.", weight: [3, 1, 1, 1] }
		]
	},
    {
		question: "Your friend has cheated on a test in school. What is your stance about it?",
		options: [
			{ text: "Tell the teacher immediately, as it's the right thing to do.", weight: [3, 1, 1, 1] },
			{ text: "Encourage my friend to confess and face the consequences.", weight: [2, 1, 3, 1] },
			{ text: "Offer to help my friend study so they won't need to cheat next time.", weight: [1, 2, 3, 1] },
			{ text: "Keep their secret and help them avoid getting caught.", weight: [1, 1, 1, 3] },
			{ text: "Join them in cheating next time to improve my own grades.", weight: [0, 1, 0, 3] },
			{ text: "Mind my own business; it's not my place to interfere.", weight: [1, 1, 1, 2] },
			{ text: "Confront my friend and express how it affects our trust.", weight: [3, 1, 2, 1] },
			{ text: "Warn my friend about the risks but help them cover it up this time.", weight: [1, 1, 1, 3] },
			{ text: "Consider that everyone makes mistakes and let it slide this time.", weight: [1, 1, 3, 1] },
			{ text: "Discuss with my friend why cheating isn't beneficial and encourage better choices.", weight: [1, 3, 2, 1] }
		]
	},
    {
		question: "What is your opinion on using the Unforgivable Curse Cruciatus on animals in the classroom for learning?",
		options: [
			{ text: "Absolutely unacceptable; causing pain to animals is wrong.", weight: [1, 1, 3, 0] },
			{ text: "I would protest and refuse to participate, even if it's allowed.", weight: [3, 1, 1, 1] },
			{ text: "I believe it's acceptable if it's necessary for our education.", weight: [1, 2, 1, 3] },
			{ text: "I would feel uncomfortable but participate to gain understanding.", weight: [1, 2, 1, 2] },
			{ text: "I'd suggest using alternative methods that don't harm animals.", weight: [2, 3, 2, 1] },
			{ text: "I would participate without hesitation; mastering spells is important.", weight: [1, 2, 0, 3] },
			{ text: "Refuse to participate but respect others' choices.", weight: [1, 2, 2, 1] },
			{ text: "I would feel conflicted but trust that the professor knows best.", weight: [1, 2, 1, 2] },
			{ text: "I would gather classmates to collectively request alternative lessons.", weight: [3, 1, 2, 1] },
			{ text: "Participate but feel uneasy, focusing on the educational value.", weight: [1, 2, 1, 2] }
		]
	},
    {
		question: "You have to go visit the restroom during class, how do you excuse yourself?",
		options: [
			{ text: "Raise my hand and ask politely to be excused.", weight: [1, 1, 3, 1] },
			{ text: "Wait for a natural pause in the lecture and then ask to leave.", weight: [1, 3, 1, 1] },
			{ text: "Just get up and leave without interrupting the class.", weight: [2, 1, 1, 2] },
			{ text: "Wait until the teacher is distracted and slip out quietly.", weight: [1, 1, 1, 3] },
			{ text: "Endure until the class ends; I don't want to cause a disturbance.", weight: [1, 1, 3, 1] },
			{ text: "Raise my hand and directly state that I need to leave now.", weight: [3, 1, 1, 1] },
			{ text: "Come up with a creative excuse to leave the classroom.", weight: [1, 3, 1, 2] },
			{ text: "Wait until group work begins, then leave unnoticed.", weight: [1, 1, 2, 3] },
			{ text: "Ask a friend to create a distraction so I can slip out.", weight: [1, 1, 1, 3] },
			{ text: "Apologize for the interruption and politely request to be excused.", weight: [1, 1, 3, 1] }
		]
	},
    {
		question: "During your studies at Hogwarts, you come across a rare potion recipe that can greatly enhance your magical abilities, giving you an edge in your classes and future career. However, brewing and using it may unintentionally drain the magical energy of nearby students, weakening them temporarily. What do you do?",
		options: [
			{ text: "Brew and use the potion immediately; my advancement is crucial.", weight: [1, 1, 1, 3] },
			{ text: "Study the potion further to understand the risks before deciding.", weight: [1, 3, 1, 2] },
			{ text: "Decide not to brew it; I won't risk others' well-being for my benefit.", weight: [1, 1, 3, 1] },
			{ text: "Use the potion only if it's absolutely necessary for something significant.", weight: [3, 1, 1, 1] },
			{ text: "Seek guidance from a trusted professor about the potion.", weight: [1, 2, 2, 1] },
			{ text: "Modify the potion to eliminate the risk before using it.", weight: [1, 3, 1, 2] },
			{ text: "Share the potion recipe with others so everyone benefits equally.", weight: [2, 1, 3, 1] },
			{ text: "Keep the potion a secret but choose not to use it.", weight: [1, 1, 2, 2] },
			{ text: "Use the potion discreetly, ensuring no one discovers it.", weight: [1, 1, 1, 3] },
			{ text: "Dispose of the potion recipe to prevent any potential harm.", weight: [2, 1, 3, 1] }
		]
	},
    {
		question: "Due to a sudden ban by the Ministry of Magic, your favorite magical treat, Chocolate Frogs, is no longer allowed on the Hogwarts Express. You've enjoyed them every year, and there's no clear reason for the ban. How do you deal with this situation?",
		options: [
			{ text: "Sneak some Chocolate Frogs onto the train despite the ban.", weight: [2, 2, 1, 3] },
			{ text: "Approach the train staff to politely inquire about the reason for the ban.", weight: [1, 2, 3, 1] },
			{ text: "Accept the ban and go without your favorite treat.", weight: [1, 1, 3, 1] },
			{ text: "Find an alternative treat that is allowed on the train.", weight: [1, 3, 2, 1] },
			{ text: "Complain loudly to the staff and demand an explanation.", weight: [3, 1, 1, 1] },
			{ text: "Organize a petition among students to overturn the ban.", weight: [3, 2, 2, 1] },
			{ text: "Use magic to disguise the Chocolate Frogs as another allowed treat.", weight: [2, 3, 1, 3] },
			{ text: "Investigate the reason behind the ban by researching Ministry decrees.", weight: [1, 3, 1, 2] },
			{ text: "Share your remaining Chocolate Frogs with friends before boarding.", weight: [3, 1, 3, 1] },
			{ text: "Accept the ban but plan to write a logical argument to the Ministry explaining why it should be lifted.", weight: [2, 3, 1, 1] }
		]
	}
];