export interface ExperienceEntry {
  slug: string;
  org: string;
  role: string;
  location: string;
  start: string;
  end: string;
  narrative: string[];
}

export const experience: ExperienceEntry[] = [
  {
    slug: "leovegas",
    org: "LeoVegas Sportsbook",
    role: "Data Engineer",
    location: "Hoboken, NJ",
    start: "Jun 2024",
    end: "Present",
    narrative: [
      "I own the ELT layer for a sportsbook that runs on data — 20+ models built with DBT, some tables as large as ~300GB, designed for accessibility and fault-tolerance rather than just raw throughput. Keeping that pipeline fast matters: I optimized how we build and test ~5TB datasets, which cut testing costs by roughly 95%, north of $70,000 a year, without giving up accuracy.",
      "A lot of the job is also finding the tedious thing nobody wants to do and automating it — I repurposed the private API calls behind our Domo BI platform's web UI to automate governance that used to eat ~160 hours a month. On the real-time side, I built an alerting pipeline on NiFi that processes ~900k messages a day, flagging suspicious or tail-event bets to stakeholders over Slack before they become a problem.",
    ],
  },
  {
    slug: "kirchhausen-dl",
    org: "Kirchhausen Lab — Harvard Medical School",
    role: "Deep Learning Research Intern",
    location: "Boston, MA",
    start: "May 2023",
    end: "Dec 2023",
    narrative: [
      "I trained 3D U-Net models to segment cellular substructures in volume electron microscopy data, and spent a good chunk of the internship on the less glamorous half of ML research: figuring out a methodology that could reliably find 4+ complex subcellular structures across 5 large datasets (10–50GB each) without babysitting every run. Along the way I pushed prediction speed up by about 50% just by getting more out of the GPUs — the lab's NVIDIA DGX A100s were underutilized before that.",
      "I also built a Docker container to package the whole pipeline so it wasn't just runnable on my machine — it made the tooling accessible to 10+ researchers and labs beyond our own. That work ended up forming part of a peer-reviewed paper, \"Close-up of vesicular ER exit sites by volume EM,\" published in the Journal of Cell Biology (2026).",
    ],
  },
  {
    slug: "kirchhausen-swe",
    org: "Kirchhausen Lab — Harvard Medical School",
    role: "Software Engineering Intern",
    location: "Boston, MA",
    start: "Jul 2022",
    end: "Sep 2022",
    narrative: [
      "Before the deep learning work, I spent a summer building a full-stack GUI from scratch in Python — what later became DetTrackGUI — to wrap a detection-and-tracking pipeline for Lattice Light Sheet Microscopy data that researchers had previously run by hand, script by script. Wrapping it in a real interface cut downtime between pipeline stages by about 60% and errors by about 90%, freeing researchers to focus on the science instead of the plumbing.",
    ],
  },
  {
    slug: "hai-lab",
    org: "Human-AI Interaction Lab — UT Austin",
    role: "Undergraduate Researcher",
    location: "Austin, TX",
    start: "Jan 2023",
    end: "May 2023",
    narrative: [
      "I contributed to research on helping organizations design AI systems for fairness and equity using participatory methods, working with about 7 organizations over the course of the study. My main contribution was a front-end data-collection platform with 15–20 interactive components that let 30+ participants take part directly, which I deployed on Heroku and refactored over the semester to keep it maintainable as the study's requirements evolved.",
    ],
  },
  {
    slug: "osmo",
    org: "Osmo",
    role: "Data Engineering Intern",
    location: "Palo Alto, CA (Remote)",
    start: "Feb 2022",
    end: "Sep 2022",
    narrative: [
      "My first real data engineering role — I used BigQuery on GCP to sift through 500GB+ of data and stand up an anomaly detection and alerting system, then went further and re-architected the underlying data models so downstream analysis ran up to 90% faster and roughly $5,000 cheaper. I also built a Customer Lifetime Value model in Python from scattered, limited data, segmenting customers into cohorts worth about $800 million in total value — work that directly shaped how the business prioritized those customers.",
    ],
  },
];
