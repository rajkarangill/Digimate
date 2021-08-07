// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "hlo", "hi there", ],
    ["good morning"],
    ["good afternoon"],
    ["good night", "gn"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what you call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", ],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe", "funny", "joke"],
    ["google"],
    //1
    ["how can you help me"],
    //2
    ["do i have any schedule for today","any schedule for today","am i free today"],
    //3
    ["what"],
    //4
    ["oh no how many"],
    //5
    ["how can i wish alex in french"],
    //6
    ["can you give me the link of yesterday chemistry class"],
    //7
    ["how much did i score overall this year"],
    //8
    ["thanks"],
    
]

// Possible responses, in corresponding order

const replies = [
    ["Hello! How can I help you?", "Hi! How can I help you?", "Hey! How can I help you?", "Hi there! How can I help you?", ],
    ["Good Morning"],
    ["Good Evening"],
    ["Sweet dreams", "Good Night"],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am a 2 day old"],
    ["I am Jarvis, here to help with your queries "],
    ["The one true God, JavaScript"],
    ["I am Jarvis, here to help with your queries "],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["hamburger", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok", "I understand", "What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!", "Good one!"],
    ["Go to www.google.com"],
    //1
    ["I can help you with various number of things like affordable accomodations, Great locations to visit in the city, Restaurants and grocery around the city"],
    //2
    ["it's Alex's birthday today! But.....there is something else you need to do...😅" ],
    //3
    ["ASSIGNMENTS!"],
    //4
    ["3.(i)English (ii)Math (iii)Chemistry andddd the deadline is next hour"],
    //5
    ["Bon anniversaire Alex!🎉"],
    //6
    ["Here it is https://youtu.be/hnKk9iE28fs"],
    //7
    ["This year you got first position in your class with overall percentage of 98.02%"],
    //8
    ["Glad to help.😊"]
]

// Random for any other user input

const alternative = [
    "I don't understand ",
    "Pardon",
    "I didn't get it. Come Again."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]