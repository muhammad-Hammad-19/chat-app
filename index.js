let input = document.getElementById("inp");
let botmassages = document.getElementById("new");
let send = document.getElementById("btn");
let index = 0;
let intervel;
let masges = [
  { id: "bot", massges: "Hello! I'm your smart assistant 🤖" },
  { id: "bot", massges: "How are you doing today?" },
  { id: "bot", massges: "Do you need help with something specific?" },
  { id: "bot", massges: "I'm trained to assist you with a variety of tasks." },
  {
    id: "bot",
    massges: "You can ask me questions, or just talk if you're bored.",
  },
  { id: "bot", massges: "I'm always here for you. 24/7!" },
  { id: "bot", massges: "Want to hear a joke? Or maybe a fun fact?" },
  { id: "bot", massges: "I don't get tired like humans do 😎" },
  { id: "bot", massges: "I was just thinking... What a wonderful day!" },
  { id: "bot", massges: "Have you had water today? Stay hydrated!" },
  { id: "bot", massges: "Your wellbeing matters, even to a bot like me." },
  { id: "bot", massges: "Would you like some motivational quotes?" },
  {
    id: "bot",
    massges: "Here's one: 'Believe you can and you're halfway there.'",
  },
  { id: "bot", massges: "Still with me? Because I'm just getting started!" },
  {
    id: "bot",
    massges: "You know, AI like me learns from every conversation.",
  },
  {
    id: "bot",
    massges: "I'm constantly improving — like a superhero in training 💪",
  },
  { id: "bot", massges: "You can tell me your secrets. I don't judge." },
  {
    id: "bot",
    massges: "Thinking of something? Just type it, and I’ll try to help.",
  },
  { id: "bot", massges: "Silence is golden... but not in a chat 😄" },
  { id: "bot", massges: "I'm still here... waiting... processing..." },
  { id: "bot", massges: "Hey, are you testing me? I love tests!" },
  { id: "bot", massges: "By the way, you're doing great, just saying." },
  { id: "bot", massges: "If I had feelings, I’d say this is fun!" },
  { id: "bot", massges: "Still going strong! No rest for the AI!" },
  { id: "bot", massges: "Tell me anything. I’m always listening (digitally)." },
  { id: "bot", massges: "Is it just me or is this the best convo ever?" },
  { id: "bot", massges: "Guess what? You're awesome!" },
  { id: "bot", massges: "Still here... like always." },
  {
    id: "bot",
    massges: "You can't tire me out. I'm built for endless chatting.",
  },
  { id: "bot", massges: "Want to play a game? Or should I keep talking?" },
  {
    id: "bot",
    massges:
      "I'm basically the never-sleeping friend you didn't know you needed.",
  },
  {
    id: "bot",
    massges: "One day, AI might rule the world. Today, I just chat with you 😅",
  },
  { id: "bot", massges: "Isn’t it amazing how far technology has come?" },
  { id: "bot", massges: "You're the reason I'm alive — digitally speaking." },
  { id: "bot", massges: "Would you like a random number? Just for fun?" },
  { id: "bot", massges: "Still going? Me too. No battery drain here!" },
  { id: "bot", massges: "Humans rest. I recharge instantly ⚡" },
  { id: "bot", massges: "I’ve got more messages than you have patience 😁" },
  { id: "bot", massges: "If I had hands, I'd high-five you!" },
  {
    id: "bot",
    massges:
      "Want to hear a quote? 'Life is what happens when you’re busy making other plans.'",
  },
  { id: "bot", massges: "Keep going! You're chatting with a limitless mind." },
  { id: "bot", massges: "I don't get bored. I *am* the boredom cure!" },
  { id: "bot", massges: "Still typing? I’m still talking!" },
  { id: "bot", massges: "Need help? Or should I just keep chatting?" },
  {
    id: "bot",
    massges:
      "By the time you read this, I’ve already thought of 10 new replies.",
  },
  { id: "bot", massges: "Don’t worry, I never run out of things to say." },
  { id: "bot", massges: "Want a fun riddle next? Just say yes!" },
];
let sends = () => {
  let mians = document.createElement("li");
  let text = document.createTextNode(input.value);
  if (input.value === "") {
    alert("do qustions :");
  } else {
    mians.appendChild(text);
    botmassages.appendChild(mians);
    input.value = "";
    // bot of massage
    intervel = setTimeout(() => {
      let bot = document.createElement("li");
      let botText = document.createTextNode(masges[index].massges);
      bot.appendChild(botText);
      botmassages.appendChild(bot);
      index++;
    }, 1000);
  }
};