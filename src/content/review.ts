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
  role: "AI apps tester",
  image: "/authors/marcus-hale.jpg",
  bio: "Marcus pays for the companion apps he reviews. This Candy AI write-up comes from six weeks on a paid seat plus token packs he bought himself.",
};

export const verdict = {
  score: 9.4,
  label: "Score after six weeks on a paid plan",
  bestFor: "Users who care most about consistent photoreal faces",
  weakest: "Token drain when images and video run daily",
  realMonthly: "Plan from ~$4–14 plus media top-ups",
  topAlt: "Kupid AI when voice and memory matter more",
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
  { label: "Free tier", value: "Yes, message-capped" },
  { label: "Starting price", value: "About $3.99/mo on annual promos" },
  { label: "Payment methods", value: "Cards and crypto" },
  { label: "Languages", value: "English and 10+ more" },
  { label: "Content rating", value: "NSFW, 18+" },
  { label: "Support", value: "Email / help docs" },
  { label: "Our rating", value: "9.4 / 10" },
];

export const alternatives = [
  {
    name: "Candy AI",
    badge: "Editor's Choice",
    score: 9.4,
    summary: "Leads my list when face consistency and custom builds matter",
    points: [
      "Rich character creator",
      "Reliable on-model stills",
      "Live Action on paid seats",
      "Free text sample to start",
    ],
    cta: "primary" as const,
  },
  {
    name: "HeyGF",
    badge: "Most immersive",
    score: 9.2,
    summary: "Strong when you want loose roleplay and frequent model refreshes",
    points: [
      "Dense roleplay scenes",
      "Expanding companion set",
      "Quiet billing options",
      "Regular model updates",
    ],
    cta: "secondary" as const,
  },
  {
    name: "Kupid AI",
    badge: "Best voice",
    score: 9.0,
    summary: "Pick this when calls and recall beat still photos",
    points: [
      "Stronger voice sessions",
      "Better conversation recall",
      "Simple UI",
      "Sensible sub pricing",
    ],
    cta: "secondary" as const,
  },
  {
    name: "GirlfriendGPT",
    badge: "Best character chat",
    score: 8.8,
    summary: "Huge library and chatty replies for people who browse a lot",
    points: [
      "Wide user-made roster",
      "Natural text tone",
      "Solid image tools",
      "Busy community",
    ],
    cta: "secondary" as const,
  },
  {
    name: "Nomi.ai",
    badge: "Best memory",
    score: 8.6,
    summary: "Built for long memory and multi-companion chats",
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
      "Lots of appearance controls",
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
    notes: "Charged each month",
  },
  {
    plan: "3 Months",
    price: "$8.99/mo",
    tokens: "100/mo",
    notes: "About $26.97 every quarter",
  },
  {
    plan: "12 Months",
    price: "$3.99/mo",
    tokens: "100/mo",
    notes: "Best rate; some promos land near $5.99/mo",
    highlight: true,
  },
];

export const pros = [
  "On-model photoreal stills with strong face lock",
  "One builder for looks, voice, and personality",
  "Paid NSFW chat holds the scene instead of refusing",
  "Live Action clips rare at this price",
  "Annual billing cuts the monthly rate hard",
  "Bank lines often show EverAI, not the product name",
];

export const cons = [
  "Tokens vanish quickly on daily image and video use",
  "Voice trails specialists such as Kupid AI",
  "Memory fades after about a week of heavy chat",
  "No native iPhone app; browser or PWA only",
  "Free tier is a taste, not the full product",
];

export const userThemes = [
  {
    handle: "@pixelthread",
    quote:
      "Face lock sold me. I generated about thirty selfies in a week and the same person showed up almost every time. Yearly plan feels cheap for that.",
    stars: 5,
  },
  {
    handle: "@nightshift_rp",
    quote:
      "Customization went deeper than the last three apps I tried. I set voice and traits once, and the chat stayed in that lane instead of drifting.",
    stars: 5,
  },
  {
    handle: "@cliphopper",
    quote:
      "Live Action clips were the surprise. Short scenes look decent for the price. Voice still sounds thin next to the text replies.",
    stars: 4,
  },
  {
    handle: "@tokenwatch",
    quote:
      "Annual sub is fine. Token wallet empties fast once you spam images. Bank line showed EverAI, which I wanted for privacy.",
    stars: 4,
  },
  {
    handle: "@browseronly",
    quote:
      "Signup took an email and nothing else. Ran it on my phone browser for weeks with no crash. Wish there was a real iPhone app.",
    stars: 5,
  },
];

export const faq = [
  {
    q: "How does Candy AI generate images?",
    a: "You ask for a scene in chat. The image model draws from a fixed character seed so the same face tends to return. Each still spends tokens from the monthly wallet.",
  },
  {
    q: "Are there any Candy AI alternatives?",
    a: "Yes. Kupid AI is stronger on voice and recall. GirlfriendGPT wins on library size. OurDream AI competes on customization value. Candy still led my still-image tests.",
  },
  {
    q: "Why is Candy AI not working?",
    a: "Usual culprits: cache, an ad blocker, or an empty token wallet. Clear site data, pause extensions, and confirm the plan is active.",
  },
  {
    q: "What happened to Candy AI?",
    a: "App-store adult rules pushed users toward web and PWA. The product kept running. Shutdown rumors do not match a live 2026 service with ongoing updates.",
  },
  {
    q: "How to cancel Candy AI subscription?",
    a: "Open settings, open billing, choose cancel. Access lasts through the paid window. No phone call is required.",
  },
  {
    q: "Does Candy AI have an app?",
    a: "Android has a native build. Other devices can install the site as a PWA. iPhone users stay in the browser or pin the PWA.",
  },
  {
    q: "Who owns Candy AI?",
    a: "EverAI Limited runs Candy AI under the Candy Network. Registration is in Santa Venera, Malta. Launch year was 2023.",
  },
  {
    q: "How to delete Candy AI account?",
    a: "Cancel any plan first. Then use delete account in settings. Email support if the control is hard to find.",
  },
];

export const howToSteps = [
  "Open candy.ai in a browser and register with email. Sign in if you already have a seat. No ID upload, no long form.",
  "Browse the gallery of 100+ realistic and anime characters, or open Create my AI Girl to set body, hair, personality, and voice.",
  "Spend a couple of minutes on traits and relationship tone before the first long chat. Those settings shape later replies more than people expect.",
  "Start text chat. Free accounts hit a message cap. Paid seats open fuller, less filtered conversation.",
  "Ask for a selfie or scene. Expect about 4 tokens per still against the 100 included each month on paid plans.",
  "Try voice notes, a short call, or a Live Action clip when you want media. Video spends tokens faster than stills.",
  "Open Story Mode when you want guided scenes instead of freeform chat.",
];

export const features = [
  {
    title: "Uncensored chat",
    body: "Paid seats keep adult scenes moving without the constant soft refusals you hit on mainstream bots. Replies track the personality you set and stay in the scene longer.",
  },
  {
    title: "Photorealistic image generation",
    body: "V2 stills are why most people stay. Sharp, on-model faces at about 4 tokens each. Face lock is the main edge versus cheaper clones.",
  },
  {
    title: "Voice messages & calls",
    body: "You can play spoken replies and place calls. Fine for short check-ins. Specialists still sound clearer on long voice sessions.",
  },
  {
    title: "Live Action video",
    body: "Short motion clips of your character landed late 2025 and improved into 2026. Few peers offer this at the same price. Token cost climbs fast.",
  },
  {
    title: "Deep customization & memory",
    body: "The builder covers looks, voice, and traits. Recent facts stick. After about seven to ten heavy days, older details can slip.",
  },
  {
    title: "Story Mode & Discovery",
    body: "Story Mode guides roleplay beats. Discovery works like a feed for new characters when one companion gets stale.",
  },
];
