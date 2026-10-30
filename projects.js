// ===== YOUR PROJECTS: edit, add, or delete entries =====
// status: "shipped" or "wip"   |   metrics: any label/value pairs you can back up
const PROJECTS = [
  {
    name: "Game News Discord Bot",
    tagline: "A Python bot that turns long game news posts into short summaries for my team.",
    status: "shipped",
    description: [
      "Pulls the latest news and blog posts from a game's website, shortens them, and posts the summaries to my team's Discord server so nobody has to read long patch notes.",
      "My first end-to-end Python project: web requests, parsing, and the Discord API."
    ],
    stack: ["Python", "Discord API", "Web Scraping", "REST APIs"],
    metrics: [],
    links: []
  },
  {
    name: "NHL Server Project (Zamboni)",
    tagline: "Contributing to an open-source community server that brings a classic NHL game back online.",
    status: "wip",
    description: [
      "Helping on an open-source project that rebuilds the online server for an older NHL game, picking up tasks from the project's public to-do list.",
      "Picked it to strengthen my C# and learn how game clients and servers communicate."
    ],
    stack: ["C#", "Git", "GitHub", "Open Source"],
    metrics: [],
    links: [{ label: "Project", url: "https://github.com/ZamboniDevelopment" }]
  }
];

