export interface ProjectMedia {
  type: "image" | "video" | "placeholder";
  src?: string;
  poster?: string;
  caption?: string;
  placeholderLabel?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  goal: string;
  whyMade: string;
  highlights?: string[];
  stack: string[];
  github: string | null;
  private?: boolean;
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "blochlab",
    name: "BlochLab",
    tagline: "Personal research & trading system for prediction markets",
    goal:
      "BlochLab is my research and trading platform for Kalshi prediction markets. It covers the whole loop: collecting market data, researching ideas, backtesting them, and running them as automated bots with real money. Every stage uses the same strategy definition, so an idea can go from a notebook to a live, risk-managed bot without being rewritten.",
    whyMade:
      "I wanted to go from a question about market data to a tested, live strategy as fast as possible. It started as a personal tool, but it now runs real-money bots in the cloud around the clock, so it has to be built and tested like production software.",
    highlights: [
      "Live trading bots that watch markets in real time, place orders automatically, and protect each position with configurable stop-losses and portfolio-wide drawdown limits.",
      "A web dashboard for running many bots at once: start, stop and switch between paper and live trading, compare bots side by side, and replay any market to see exactly when and why each trade happened.",
      "A funds and portfolio view that splits money across Kalshi subaccounts, tracks profit, volume and return on capital, and checks its own numbers against Kalshi's records.",
      "A backtesting engine with fee and slippage modeling, reconciled against the research notebooks down to the cent so a backtest result can be trusted.",
      "Research held to a high bar: ideas are tested on data they weren't tuned on, and changes that only look good by chance are rejected. One result, an entry filter based on how far price is from the strike, cut drawdowns on every coin tested.",
      "Telegram bot for controlling the bots and getting reports from anywhere, plus a read-only access level for sharing the dashboard without exposing strategy details.",
      "Latency work: measured more than 100,000 live orders to find where time was actually being lost, including a hidden delay from idle network connections. The data showed faster orders only pay off with a faster price feed, which shaped the plan to move the bots next to Kalshi's servers in AWS.",
    ],
    stack: ["Python", "DuckDB", "Polars", "Jupyter", "FastAPI", "React", "TypeScript", "WebSockets", "Docker", "Telegram Bot API"],
    github: null,
    private: true,
    media: [
      {
        type: "video",
        src: "/videos/blochlab-dashboard-tour.webm",
        caption: "Dashboard tour",
      },
    ],
  },
  {
    slug: "bilt-transactions-connector",
    name: "Bilt Transaction Connector",
    tagline: "Bridging a missing integration between Bilt and financial aggregators",
    goal:
      "A set of CLI tools that reverse-engineer Bilt's login flow, JWT auth, and transactions API to export rich transaction data — including spending category, which isn't available anywhere in the UI — and then reverse-engineer Empower's undocumented bulk-upload API to import it in one shot. Three entry points cover the full workflow: exporting Bilt transactions to CSV, bulk-uploading them into Empower, and reviewing or deleting manually-entered Empower transactions when they drift out of sync.",
    whyMade:
      "Bilt's move to their \"2.0\" platform quietly dropped support for the financial aggregators (like Empower) that a lot of cardholders, myself included, rely on for budgeting and cash-flow tracking. What used to be automatic became a manual monthly chore — I built this to close that gap for my own budgeting workflow, cutting a 5+ hour/month task down to under 2 minutes.",
    stack: ["Python", "REST APIs", "JWT Auth"],
    github: "https://github.com/athulnair02/bilt-transactions-connector",
    media: [{ type: "placeholder", placeholderLabel: "CLI demo coming soon" }],
  },
  {
    slug: "dettrackgui",
    name: "DetTrackGUI",
    tagline: "GUI for detection & tracking in volume microscopy, Kirchhausen Lab",
    goal:
      "A full-stack desktop GUI, built from scratch in Python, that wraps a detection-and-tracking pipeline for Lattice Light Sheet Microscopy data. It lets researchers select a coverslip or experiment folder, choose channels and tracking parameters, and run the full analysis pipeline without touching the underlying MATLAB/Python scripts directly.",
    whyMade:
      "Researchers at the Kirchhausen Lab were running this pipeline manually, script by script, which was slow and error-prone. I built DetTrackGUI during a software engineering internship there to automate that process end to end — it cut pipeline downtime by about 60% and errors by about 90%, and was adopted by 10+ researchers across the lab.",
    stack: ["Python", "MATLAB", "GUI/Desktop"],
    github: "https://github.com/athulnair02/DetTrackGUI",
    media: [
      {
        type: "image",
        src: "https://github.com/athulnair02/DetTrackGUI/assets/42418601/7b9225b6-8f7c-4c6e-9aae-2b0353f043bc",
        caption: "DetTrackGUI interface",
      },
    ],
  },
  {
    slug: "austin-eats",
    name: "Austin Eats",
    tagline: "Full-stack directory of local Austin restaurants, recipes & cuisines",
    goal:
      "A full-stack web app, built with a five-person team over four project phases, sharing information on 150+ restaurants, 300+ recipes, and 50+ cuisines around Austin. The frontend was built in React and hosted on AWS; the backend aggregated four external data sources and exposed our own REST API for others to consume; data was modeled and managed in PostgreSQL, and the whole thing shipped through CI/CD across all four phases.",
    whyMade:
      "This was our team's project for UT Austin's Software Engineering course (CS373) — the goal was to build something that actually encouraged Austin residents to try more local restaurants and support local businesses, while giving the whole team hands-on experience with a real API, a real database, and a real deploy pipeline across a full project lifecycle.",
    stack: ["React", "PostgreSQL", "AWS", "REST APIs", "CI/CD"],
    github: "https://github.com/athulnair02/austin-eats",
    media: [
      { type: "placeholder", placeholderLabel: "Product screenshots coming soon" },
      {
        type: "image",
        src: "https://raw.githubusercontent.com/athulnair02/austin-eats/main/db_diagram.png",
        caption: "Entity-relationship diagram",
      },
    ],
  },
];
