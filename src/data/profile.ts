interface Education {
  school: string;
  degree: string;
  note?: string;
}

export const profile: {
  name: string;
  title: string;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  education: Education[];
} = {
  name: "Athul Nair",
  title: "Data Engineer",
  location: "New York, NY",
  tagline:
    "I build data systems and research tools — from production ELT pipelines to a published deep-learning segmentation model.",
  bio: "Data engineer at LeoVegas Sportsbook, pursuing an MS in Computer Science at Georgia Tech. Previously built research software and deep-learning models at Harvard's Kirchhausen Lab, leading to a co-authored paper in the Journal of Cell Biology.",
  email: "athulnair@utexas.edu",
  linkedin: "https://linkedin.com/in/athulgnair",
  github: "https://github.com/athulnair02",
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "MS, Computer Science",
      note: "In progress",
    },
    {
      school: "The University of Texas at Austin",
      degree: "BS, Computer Science, Minor in Business",
    },
  ],
};
