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
  role: "Consumer AI apps tester",
  image: "/authors/marcus-hale.jpg",
  bio: "Marcus buys the plans he writes about. This Candy AI review comes from six weeks on a paid seat and token packs purchased with his own card.",
};

export const verdict = {
  score: 9.4,
  label: "Score from a six-week paid test",
  bestFor: "People who want consistent photoreal character stills",
  weakest: "Token burn when media runs every day",
  realMonthly: "About $4–14 for the plan, plus media top-ups",
  topAlt: "Kupid AI if voice and recall matter more than photos",
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
  { label: "Platforms", value: "Web (PWA) + Android" },
  { label: "Free tier", value: "Yes, message-capped" },
  { label: "Starting price", value: "~$3.99/mo on annual promos" },
  { label: "Payment methods", value: "Cards + crypto" },
  { label: "Languages", value: "English + 10 more" },
  { label: "Content rating", value: "NSFW, adults only" },
  { label: "Support", value: "Email and help docs" },
  { label: "Our rating", value: "9.4 / 10" },
];

export const alternatives = [
  {
    name: "Candy AI",
    badge: "Editor's Choice",
    score: 9.4,
    summary: "My first pick when face lock and a custom builder matter most",
    points: [
      "Detailed character creator",
      "Strong on-model stills",
      "Live Action on paid plans",
      "Free text sample to start",
    ],
    cta: "primary" as const,
  },
  {
    name: "HeyGF",
    badge: "Most immersive",
    score: 9.2,
    summary: "Better fit for loose roleplay and frequent model refreshes",
    points: [
      "Dense roleplay scenes",
      "Growing companion list",
      "Quiet billing options",
      "Regular model updates",
    ],
    cta: "secondary" as const,
  },
  {
    name: "Kupid AI",
    badge: "Best voice",
    score: 9.0,
    summary: "Choose this when calls and recall beat still photos",
    points: [
      "Clearer voice sessions",
      "Stronger conversation recall",
      "Simple layout",
      "Fair subscription rates",
    ],
    cta: "secondary" as const,
  },
  {
    name: "GirlfriendGPT",
    badge: "Best character chat",
    score: 8.8,
    summary: "Wide library and chatty replies for people who browse a lot",
    points: [
      "Large user-made roster",
      "Natural text tone",
      "Capable image tools",
      "Active community",
    ],
    cta: "secondary" as const,
  },
  {
    name: "Nomi.ai",
    badge: "Best memory",
    score: 8.6,
    summary: "Built for long recall and multi-companion chats",
    points: [
      "Long memory windows",
      "Personal reply style",
      "Group chat support",
      "Privacy-minded design",
    ],
    cta: "secondary" as const,
  },
  {
    name: "OurDream AI",
    badge: "Value roleplay",
    score: 8.2,
    summary: "Customization-heavy roleplay without the top sticker price",
    points: [
      "Many appearance controls",
      "Detailed roleplay",
      "Growing model pool",
      "Private payment paths",
    ],
    cta: "secondary" as const,
  },
];

export const pricing = [
  {
    plan: "Free",
    price: "$0",
    tokens: "None",
    notes: "Capped messages, basic roster",
  },
  {
    plan: "1 Month",
    price: "$13.99/mo",
    tokens: "100/mo",
    notes: "Billed every month",
  },
  {
    plan: "3 Months",
    price: "$8.99/mo",
    tokens: "100/mo",
    notes: "~$26.97 charged each quarter",
  },
  {
    plan: "12 Months",
    price: "$3.99/mo",
    tokens: "100/mo",
    notes: "Lowest rate; some promos near $5.99/mo",
    highlight: true,
  },
];

export const pros = [
  "Photoreal stills with reliable face lock",
  "Single builder for looks, voice, and traits",
  "Paid NSFW chat holds the scene instead of soft-refusing",
  "Live Action clips rare at this price",
  "Annual billing cuts the monthly rate hard",
  "Bank lines often show EverAI, not the product brand",
];

export const cons = [
  "Tokens empty fast when images and video run daily",
  "Voice trails specialists such as Kupid AI",
  "Memory fades after about a week of heavy chat",
  "No native iPhone app; browser or PWA only",
  "Free tier is a sample, not the full product",
];

export const userThemes = [
  {
    handle: "@framekeeper",
    quote:
      "I ran twenty-plus selfies across two weeks and the face stayed recognizable. That alone beat two cheaper apps I tried the same month.",
    stars: 5,
  },
  {
    handle: "@latechat",
    quote:
      "Trait sliders mattered more than I expected. After I set tone and voice, replies stopped sliding into generic chatbot speak.",
    stars: 5,
  },
  {
    handle: "@shortclipfan",
    quote:
      "Live Action was fun for short scenes. Tokens vanished once I queued several clips. Voice still feels thinner than the text.",
    stars: 4,
  },
  {
    handle: "@walleteye",
    quote:
      "Yearly plan is fine. Extra packs hurt if you generate every night. Statement said EverAI, which I preferred for privacy.",
    stars: 4,
  },
  {
    handle: "@safarionly",
    quote:
      "Email signup, no real name. Phone browser held up for a month. Still want a proper iOS app someday.",
    stars: 5,
  },
];

export const faq = [
  {
    q: "How does Candy AI generate images?",
    a: "You request a scene in chat. The image model draws from a character seed so the same face tends to return. Each still spends tokens from the monthly allowance.",
  },
  {
    q: "Are there any Candy AI alternatives?",
    a: "Yes. Kupid AI leads on voice and recall in my tests. GirlfriendGPT wins on library size. OurDream AI competes on customization value. Candy still led on still-image quality.",
  },
  {
    q: "Why is Candy AI not working?",
    a: "Most stalls trace to cache, an ad blocker, or an empty token wallet. Clear site data, pause extensions, and confirm the plan is active.",
  },
  {
    q: "What happened to Candy AI?",
    a: "Adult app-store rules pushed users toward web and PWA access. The product kept running. Full shutdown rumors do not match a live 2026 service with ongoing updates.",
  },
  {
    q: "How to cancel Candy AI subscription?",
    a: "Open settings, open billing, choose cancel. Access continues through the paid window. No phone call is required.",
  },
  {
    q: "Does Candy AI have an app?",
    a: "Android has a native build. Other devices can install the site as a PWA. iPhone users stay in the browser or pin the PWA to the home screen.",
  },
  {
    q: "Who owns Candy AI?",
    a: "EverAI Limited operates Candy AI under the Candy Network. The company is registered in Santa Venera, Malta, and launched the product in 2023.",
  },
  {
    q: "How to delete Candy AI account?",
    a: "Cancel any active plan first. Then use delete account in settings. Email support if the control is hard to find.",
  },
];

export const howToSteps = [
  "Open candy.ai in a browser and create an account with email. Sign in if you already have one. No ID upload.",
  "Browse 100+ gallery characters across realistic and anime styles, or open Create my AI Girl to set body, hair, personality, and voice.",
  "Spend two minutes on traits and relationship tone before a long chat. Those settings shape later replies more than most people expect.",
  "Start text chat. Free seats hit a message cap. Paid seats open fuller, less filtered conversation.",
  "Ask for a selfie or scene. Plan on about 4 tokens per still against the 100 included each month on paid plans.",
  "Try voice notes, a short call, or a Live Action clip when you want media. Video spends tokens faster than stills.",
  "Open Story Mode when you want guided scenes instead of freeform chat.",
];

export const features = [
  {
    title: "Uncensored chat",
    body: "Paid seats keep adult scenes moving without the soft refusals common on mainstream bots. Replies track the personality you set and stay in the scene longer.",
  },
  {
    title: "Photorealistic image generation",
    body: "V2 stills are the main reason people stay. Sharp, on-model faces at about 4 tokens each. Face lock is the edge versus cheaper clones.",
  },
  {
    title: "Voice messages & calls",
    body: "You can play spoken replies and place calls. Fine for short check-ins. Specialists still sound clearer on long voice sessions.",
  },
  {
    title: "Live Action video",
    body: "Short motion clips of your character arrived late 2025 and improved into 2026. Few peers offer this at the same price. Token cost climbs fast.",
  },
  {
    title: "Deep customization & memory",
    body: "The builder covers looks, voice, and traits. Recent facts stick. After about seven to ten heavy days, older details can slip.",
  },
  {
    title: "Story Mode & Discovery",
    body: "Story Mode guides roleplay beats. Discovery works like a feed for finding new characters when one companion gets stale.",
  },
];
