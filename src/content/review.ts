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
    quote:
      "The face stayed consistent across selfies. That alone beat three other apps I tried the same month.",
    source: "Public review theme · image users",
    stars: 5,
  },
  {
    quote:
      "Annual plan felt fair for the visuals. Tokens ran out once Live Action clips entered the daily mix.",
    source: "Public review theme · paying subscribers",
    stars: 4,
  },
  {
    quote:
      "Chat matched the personality I set. Voice sounded flat next to the text replies.",
    source: "Public review theme · voice testers",
    stars: 4,
  },
  {
    quote:
      "Bank statement used a discreet company name. Signup asked for email, not a legal ID.",
    source: "Public review theme · privacy-minded users",
    stars: 5,
  },
  {
    quote:
      "Browser on phone worked fine for a month. Missing a native iPhone app still annoyed me.",
    source: "Public review theme · mobile users",
    stars: 4,
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
  "Open the Candy AI site in a browser and create an account with email.",
  "Browse the gallery or open the Create my AI Girl builder.",
  "Set personality, relationship tone, and voice before the first long chat.",
  "Start text chat. Free limits apply until you subscribe.",
  "Ask for a selfie or scene. Images cost tokens from the plan wallet.",
  "Try voice messages, a short call, or a Live Action clip when you want media.",
  "Open Story Mode for guided scenes when freeform chat stalls.",
];

export const features = [
  {
    title: "Uncensored chat",
    body: "Paid plans keep NSFW scenes in character without the constant refusals common on mainstream chatbots. Replies stay tied to the personality you set.",
  },
  {
    title: "Photorealistic image generation",
    body: "The V2 image path is the reason most people stay. Faces lock to the character seed. Expect about 4 tokens per still in current pricing notes.",
  },
  {
    title: "Voice messages & calls",
    body: "You can listen to replies and place calls. Quality works for short check-ins. Specialists still sound clearer for long voice sessions.",
  },
  {
    title: "Live Action video",
    body: "Short animated clips of your character arrived late 2025 and improved into 2026, with longer clip lengths on newer builds. Video burns tokens faster than stills.",
  },
  {
    title: "Deep customization & memory",
    body: "The builder covers body, hair, clothing, personality, and voice. Memory holds recent details well. Heavy daily use can blur older facts after about a week.",
  },
  {
    title: "Story Mode & Discovery",
    body: "Story Mode guides roleplay beats. Discovery works like a swipe feed for new characters when one companion gets stale.",
  },
];
