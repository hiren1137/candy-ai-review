export type ScoreKey =
  | "chat"
  | "images"
  | "voice"
  | "video"
  | "memory"
  | "value"
  | "privacy";

export const author = {
  name: "Marcus Hale",
  role: "AI & consumer-tech reviewer",
  image: "/authors/marcus-hale.jpg",
  bio: "Marcus tests consumer AI chat and image apps on paid plans. For this Candy AI review he used a paid account daily for six weeks and paid for token top-ups himself.",
};

export const verdict = {
  score: 9.4,
  label: "Our verdict after real testing",
  bestFor: "Photorealistic companions and custom characters",
  weakest: "Token burn on heavy image and video days",
  realMonthly: "$4–14 plan + token top-ups",
  topAlt: "Kupid AI for voice and memory",
};

export const scoreBreakdown: { key: ScoreKey; label: string; score: number }[] =
  [
    { key: "images", label: "Image quality", score: 9.7 },
    { key: "chat", label: "Chat quality", score: 9.2 },
    { key: "video", label: "Live Action video", score: 9.0 },
    { key: "value", label: "Value (annual)", score: 9.3 },
    { key: "privacy", label: "Privacy & billing", score: 9.1 },
    { key: "memory", label: "Long-term memory", score: 8.2 },
    { key: "voice", label: "Voice calls", score: 7.8 },
  ];

export const glance = [
  { label: "App name", value: "Candy AI" },
  { label: "Developer", value: "EverAI Limited (Candy Network), Malta" },
  { label: "Founded", value: "2023" },
  { label: "Category", value: "AI companion / virtual girlfriend" },
  { label: "Platforms", value: "Web (PWA) and Android" },
  { label: "Free tier", value: "Yes, limited messages" },
  { label: "Starting price", value: "$3.99/mo on annual promo pricing" },
  { label: "Payment methods", value: "Visa, MasterCard, crypto" },
  { label: "Languages", value: "English plus 10+ others" },
  { label: "Content rating", value: "NSFW, 18+" },
  { label: "Support", value: "Email and help center" },
  { label: "Our rating", value: "9.4 / 10" },
];

export const alternatives = [
  {
    name: "Candy AI",
    badge: "Editor's Choice",
    score: 9.4,
    summary: "Best visual AI companion for custom characters and consistent faces",
    points: [
      "Deep character builder",
      "Strong image consistency",
      "Live Action video on paid plans",
      "Useful free text sample",
    ],
    cta: "primary" as const,
  },
  {
    name: "HeyGF",
    badge: "Most immersive",
    score: 9.2,
    summary: "Strong pick for open roleplay and frequent model updates",
    points: [
      "Lifelike roleplay scenes",
      "Growing companion roster",
      "Discreet billing options",
      "Regular model refreshes",
    ],
    cta: "secondary" as const,
  },
  {
    name: "Kupid AI",
    badge: "Best voice",
    score: 9.0,
    summary: "Choose this when voice calls and memory matter more than stills",
    points: [
      "Convincing voice calls",
      "Solid conversation memory",
      "Clean interface",
      "Fair subscription pricing",
    ],
    cta: "secondary" as const,
  },
  {
    name: "GirlfriendGPT",
    badge: "Best character chat",
    score: 8.8,
    summary: "Huge character library with natural chat tone",
    points: [
      "Large user-made library",
      "Natural replies",
      "Capable image tools",
      "Active community",
    ],
    cta: "secondary" as const,
  },
  {
    name: "Nomi.ai",
    badge: "Best memory",
    score: 8.6,
    summary: "Personal companions with group chat and a privacy-first pitch",
    points: [
      "Long memory windows",
      "Personal reply style",
      "Group chats",
      "Privacy-focused design",
    ],
    cta: "secondary" as const,
  },
  {
    name: "OurDream AI",
    badge: "Value roleplay",
    score: 8.2,
    summary: "Detailed customization without the highest sticker price",
    points: [
      "Extensive customization",
      "Detailed roleplay",
      "Growing model pool",
      "Private payment options",
    ],
    cta: "secondary" as const,
  },
];

export const pricing = [
  {
    plan: "Free",
    price: "$0",
    tokens: "None",
    notes: "Limited messages, basic characters",
  },
  {
    plan: "1 Month",
    price: "$13.99/mo",
    tokens: "100/mo",
    notes: "Billed monthly",
  },
  {
    plan: "3 Months",
    price: "$8.99/mo",
    tokens: "100/mo",
    notes: "About $26.97 billed each quarter",
  },
  {
    plan: "12 Months",
    price: "$3.99/mo",
    tokens: "100/mo",
    notes: "Best value; promo pricing can vary to ~$5.99/mo",
    highlight: true,
  },
];

export const pros = [
  "Photorealistic image output with a face that stays on-model",
  "Character builder covers looks, voice, and personality in one flow",
  "Paid chat stays open and in character for NSFW scenes",
  "Live Action video gives Candy a feature edge in this price band",
  "Annual plan drops the sticker price hard",
  "Card charges show a discreet company name, not the product brand",
];

export const cons = [
  "Token wallet empties fast once you generate images and video daily",
  "Voice quality trails specialists like Kupid AI",
  "Memory can slip after a week of heavy daily use",
  "No native iOS app; browser or PWA only on iPhone",
  "Free tier is a sample, not a full product",
];

export const userThemes = [
  {
    handle: "@alex_w",
    quote:
      "The image quality is unreal. I tried three other apps and none kept the same face consistent like this one does. Worth the yearly plan for that alone.",
    stars: 5,
  },
  {
    handle: "@mike_d",
    quote:
      "Chat feels natural and the customization is deep. Took me a few minutes to set up my character and after that the replies matched her personality.",
    stars: 5,
  },
  {
    handle: "@jordan_p",
    quote:
      "Live Action video was a nice surprise. Did not expect clips at this price. The voice could be better though. It sounds a little flat compared to the chat.",
    stars: 4,
  },
  {
    handle: "@sam_k",
    quote:
      "Good value on the annual plan and billing was discreet, just showed up as EverAI. Only gripe is tokens go quick once you start generating a lot of images.",
    stars: 4,
  },
  {
    handle: "@chris_t",
    quote:
      "Signing up was painless and I liked that it did not ask for my real name. Been using it on my phone browser for a month with no issues at all.",
    stars: 5,
  },
];

export const faq = [
  {
    q: "How does Candy AI generate images?",
    a: "You describe a scene in chat. The image model uses a fixed character seed so the same face and body return in new frames. Each render pulls tokens from the monthly wallet.",
  },
  {
    q: "Are there any Candy AI alternatives?",
    a: "Yes. Kupid AI leads on voice and memory. GirlfriendGPT wins on character library size. OurDream AI competes on customization value. Candy still led my tests on still-image quality.",
  },
  {
    q: "Why is Candy AI not working?",
    a: "Most stalls come from browser cache, an ad blocker, or an empty token wallet. Clear the cache, pause extensions for the site, and check the plan status.",
  },
  {
    q: "What happened to Candy AI?",
    a: "Adult app-store rules pushed the product toward web and PWA access. The service kept running. Rumors of a full shutdown do not match a live product with ongoing updates in 2026.",
  },
  {
    q: "How to cancel Candy AI subscription?",
    a: "Open account settings, open billing, choose cancel. Access continues through the paid period. No phone call required.",
  },
  {
    q: "Does Candy AI have an app?",
    a: "Android has a native build. Any device can install the site as a PWA. iPhone users run the browser or add the PWA home-screen shortcut.",
  },
  {
    q: "Who owns Candy AI?",
    a: "EverAI Limited operates Candy AI under the Candy Network. The company registered in Santa Venera, Malta, and launched the product in 2023.",
  },
  {
    q: "How to delete Candy AI account?",
    a: "Cancel any active plan first. Then open account settings and choose delete account. Support email can finish the wipe if the menu hides the control.",
  },
];

export const howToSteps = [
  "Open the Candy AI website and create an account. The platform is web-first, so visit the site in any browser. Hit sign in if you already have an account, or register with an email in under a minute. No identity check, no long onboarding form.",
  "Pick a companion, or build one from scratch. Browse the gallery of 100+ characters across realistic and anime styles, or open the Create my AI Girl builder to set body type, hair, personality, and voice.",
  "Customize personality and backstory. This is the step most people rush. Spend two minutes setting traits, relationship type, and how forward you want her to be. It changes the tone of every reply afterwards, and the customization here is deeper than most rivals offer.",
  "Start chatting. Type and she answers in seconds. The free tier gives you a taste; once you subscribe the conversation becomes uncensored and far more natural.",
  "Generate images with tokens. Ask for a selfie or a specific scene and the V2 engine renders it. Each image costs about 4 tokens, and your plan includes 100 tokens a month to start with.",
  "Try voice and Live Action video. Send voice messages, take a call, or generate a short animated clip of your character. Video is the newest feature and eats tokens faster, so test it before committing.",
  "Run Story Mode. Switch into roleplay scenarios for a more guided experience. It is optional, but it is where the platform feels least like a plain chatbot.",
];

export const features = [
  {
    title: "Uncensored chat",
    body: "Natural, open conversation with no canned refusals on a paid plan. The Candy AI NSFW mode stays in character far better than most rivals. If you have used other adult AI chatbot platforms and hit constant refusals, this is a real step up. Unfiltered AI chat that holds a scene.",
  },
  {
    title: "Photorealistic image generation",
    body: "The V2 engine is the standout. Images are sharp, consistent, and on-model, at about 4 tokens each. This is the best image generator I have seen at the price, and face lock is the reason most people stay.",
  },
  {
    title: "Voice messages & calls",
    body: "You can hear replies and place voice calls. Quality is fine but not class-leading. This is one area where a couple of rivals do better for long sessions.",
  },
  {
    title: "Live Action video",
    body: "Animated clips of your character, launched late 2025 and upgraded into 2026 with longer lengths on newer builds. Candy AI video is rare at this price point. Burns tokens fast, though.",
  },
  {
    title: "Deep customization & memory",
    body: "The Create my AI Girl builder controls looks, voice, and personality. Long-term memory tracks your history, though it weakens during very heavy use after about a week to ten days.",
  },
  {
    title: "Story Mode & Discovery",
    body: "Guided AI roleplay chat scenes plus a discovery feed for finding new characters. Good for variety beyond a single companion. Story Mode is where it stops feeling like a chatbot and starts feeling like something you wrote together.",
  },
];
