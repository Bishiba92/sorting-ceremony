var questions = [
    {
        question: "When faced with a challenge, what's your first instinct?",
        options: [
            { text: "Confront it head-on!", house: "Gryffindor", weight: 3 },
            { text: "Plan a strategic approach.", house: "Ravenclaw", weight: 3 },
            { text: "Work hard until I overcome it.", house: "Hufflepuff", weight: 3 },
            { text: "Find a way to turn the challenge to my advantage.", house: "Slytherin", weight: 3 },
            { text: "Avoid it and hope it resolves itself.", house: "Hufflepuff", weight: 3 },
            { text: "Follow someone else's lead on how to deal with it.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "What do you value most in your friends?",
        options: [
            { text: "Loyalty", house: "Hufflepuff", weight: 3 },
            { text: "Courage", house: "Gryffindor", weight: 3 },
            { text: "Intelligence", house: "Ravenclaw", weight: 3 },
            { text: "Ambition", house: "Slytherin", weight: 3 },
            { text: "Dependability", house: "Hufflepuff", weight: 3 },
            { text: "Gullibility", house: "Slytherin", weight: 3 },
            { text: "A good sense of humor", house: "Ravenclaw", weight: 3 },
        ]
    },
    {
        question: "Which of these describes your approach to learning?",
        options: [
            { text: "Knowledge is power.", house: "Ravenclaw", weight: 3 },
            { text: "Learning by doing.", house: "Gryffindor", weight: 3 },
            { text: "Practice makes perfect.", house: "Hufflepuff", weight: 3 },
            { text: "Learn what will get you ahead.", house: "Slytherin", weight: 3 },
            { text: "I learn what I need to just to get by.", house: "Hufflepuff", weight: 3 },
            { text: "I prefer to learn from others' mistakes.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "If someone wrongs you, what is your response?",
        options: [
            { text: "Forgive and move on.", house: "Hufflepuff", weight: 3 },
            { text: "Find a way to make sure they don't do it again.", house: "Slytherin", weight: 3 },
            { text: "Challenge them directly.", house: "Gryffindor", weight: 3 },
            { text: "Use it as a learning experience.", house: "Ravenclaw", weight: 3 },
            { text: "Avoid them and move on with my life.", house: "Hufflepuff", weight: 3 },
            { text: "Pretend it didn't bother me but be passive aggressive about it.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "How do you handle stress?",
        options: [
            { text: "I take a moment to collect myself.", house: "Hufflepuff", weight: 3 },
            { text: "I tackle the problem right away.", house: "Gryffindor", weight: 3 },
            { text: "I think my way through it logically.", house: "Ravenclaw", weight: 3 },
            { text: "I turn it into motivation to succeed.", house: "Slytherin", weight: 3 },
            { text: "I procrastinate and hope it goes away.", house: "Hufflepuff", weight: 3 },
            { text: "I look for someone that can fix it for me.", house: "Hufflepuff", weight: 3 }
        ]
    },
    {
        question: "What would you do if you found a wallet on the ground?",
        options: [
            { text: "Turn it in to the authorities immediately.", house: "Hufflepuff", weight: 3 },
            { text: "Look through it to try to find the owner myself.", house: "Gryffindor", weight: 3 },
            { text: "Take the cash and leave the rest.", house: "Slytherin", weight: 3 },
            { text: "Leave it where it is, maybe the owner will come back.", house: "Hufflepuff", weight: 3 },
            { text: "Analyze the situation to determine the best course of action.", house: "Ravenclaw", weight: 3 },
            { text: "Keep it until someone asks about it.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "How do you prefer to spend your free time?",
        options: [
            { text: "Reading a book.", house: "Ravenclaw", weight: 3 },
            { text: "Learning something new.", house: "Ravenclaw", weight: 3 },
            { text: "Playing a game.", house: "Gryffindor", weight: 3 },
            { text: "Hanging out with friends.", house: "Hufflepuff", weight: 3 },
            { text: "Trying out a new, thrilling activity.", house: "Gryffindor", weight: 3 },
            { text: "Working on a personal project.", house: "Slytherin", weight: 3 },
            { text: "Doing absolutely nothing and relaxing.", house: "Hufflepuff", weight: 3 },
            { text: "Use my time for something beneficial.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "What is your biggest flaw?",
        options: [
            { text: "I can be too trusting of others.", house: "Hufflepuff", weight: 3 },
            { text: "I can be impulsive and act without thinking.", house: "Gryffindor", weight: 3 },
            { text: "I can be overly analytical and indecisive.", house: "Ravenclaw", weight: 3 },
            { text: "I can be manipulative to get what I want.", house: "Slytherin", weight: 3 },
            { text: "I tend to avoid confrontation.", house: "Hufflepuff", weight: 3 },
            { text: "I can be too focused on my own goals.", house: "Slytherin", weight: 3 },
            { text: "I take pleasure in the ridicule of others.", house: "Slytherin", weight: 3 },
            { text: "I don't really have any flaws that I can think of.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "How do you approach group work?",
        options: [
            { text: "Take charge and lead the group.", house: "Gryffindor", weight: 3 },
            { text: "Take charge and delegate most work to someone else.", house: "Slytherin", weight: 3 },
            { text: "Make sure everyone feels included and valued.", house: "Hufflepuff", weight: 3 },
            { text: "Focus on doing my part to the best of my ability.", house: "Ravenclaw", weight: 3 },
            { text: "Ensure the group follows the most efficient plan.", house: "Slytherin", weight: 3 },
            { text: "Stay in the background and do as I'm told.", house: "Hufflepuff", weight: 3 },
            { text: "Use the opportunity to show my capabilities.", house: "Slytherin", weight: 3 },
            { text: "Hope that my lack of effort doesn't show.", house: "Hufflepuff", weight: 3 },
        ]
    },
    {
        question: "How do you react when things don’t go your way?",
        options: [
            { text: "Keep calm and try to find a solution.", house: "Ravenclaw", weight: 3 },
            { text: "Get frustrated but try again.", house: "Gryffindor", weight: 3 },
            { text: "Accept it and move on.", house: "Hufflepuff", weight: 3 },
            { text: "Find someone to blame.", house: "Slytherin", weight: 3 },
            { text: "Look for an alternative path to success.", house: "Slytherin", weight: 3 },
            { text: "Pretend it doesn’t bother me.", house: "Hufflepuff", weight: 3 },
            { text: "If things don't go my way, I haven't tried.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "Your friend has cheated on a test in school. What is your stance about it?",
        options: [
            { text: "Tell the teacher immediately.", house: "Gryffindor", weight: 3 },
            { text: "Encourage your friend to confess.", house: "Hufflepuff", weight: 3 },
            { text: "Help your friend avoid getting caught.", house: "Slytherin", weight: 3 },
            { text: "Stay out of it, it's none of my business.", house: "Ravenclaw", weight: 3 }
        ]
    },
    {
        question: "What is your opinion on using the unforgivable spell Cruciatus on animals in the classroom for learning?",
        options: [
            { text: "Absolutely unacceptable under any circumstances.", house: "Hufflepuff", weight: 3 },
            { text: "Only if there is no other way to learn it.", house: "Ravenclaw", weight: 3 },
            { text: "If it serves a greater purpose, it's fine.", house: "Slytherin", weight: 3 },
            { text: "I would challenge the professor and refuse to do it.", house: "Gryffindor", weight: 3 }
        ]
    },
    {
        question: "You have to go visit the restroom during class, how do you excuse yourself?",
        options: [
            { text: "Raise my hand and ask politely.", house: "Hufflepuff", weight: 3 },
            { text: "Just get up and go without asking.", house: "Gryffindor", weight: 3 },
            { text: "Wait until the teacher is distracted and slip out quietly.", house: "Slytherin", weight: 3 },
            { text: "Ask at a logical break in the lecture.", house: "Ravenclaw", weight: 3 }
        ]
    },
    {
        question: "A situation has come up where you can get ahead, but in doing so, a few people may get hurt. What do you do?",
        options: [
            { text: "Take the opportunity without a second thought.", house: "Slytherin", weight: 3 },
            { text: "Weigh the benefits against the consequences.", house: "Ravenclaw", weight: 3 },
            { text: "Refuse to do it if it means hurting others.", house: "Hufflepuff", weight: 3 },
            { text: "Only proceed if it means something significant to me.", house: "Gryffindor", weight: 3 }
        ]
    },
    {
        question: "There's a ban on your favorite food on the Hogwarts express, you've eaten this food every year so far. How do you deal with this?",
        options: [
            { text: "Sneak it in despite the ban.", house: "Slytherin", weight: 3 },
            { text: "Complain to the staff and demand an explanation.", house: "Gryffindor", weight: 3 },
            { text: "Find an alternative food that is allowed.", house: "Ravenclaw", weight: 3 },
            { text: "Accept it and go without my favorite food.", house: "Hufflepuff", weight: 3 }
        ]
    }
];