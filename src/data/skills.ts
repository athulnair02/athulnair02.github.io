import type { ElementType } from "react";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiGnubash,
  SiGooglecloud,
  SiApacheairflow,
  SiApachenifi,
  SiApachekafka,
  SiRedis,
  SiGooglebigquery,
  SiGooglecloudstorage,
  SiGooglepubsub,
  SiElasticsearch,
  SiDocker,
  SiReact,
  SiHtml5,
  SiFastapi,
  SiFirebase,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiPolars,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiJava } from "react-icons/di";
import { Hammer, Sigma, Network, Database } from "lucide-react";

export interface Skill {
  name: string;
  icon?: ElementType;
  color?: string;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Java", icon: DiJava, color: "#F58219" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#659AD2" },
      { name: "SQL", icon: Database, color: "#4479A1" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ],
  },
  {
    label: "Data & Infra",
    items: [
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "DBT", icon: Hammer, color: "#FF694B" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "NiFi", icon: SiApachenifi, color: "#7A93A5" },
      { name: "Kafka", icon: SiApachekafka, color: "#C7C7C7" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "BigQuery", icon: SiGooglebigquery, color: "#669DF6" },
      { name: "GCS", icon: SiGooglecloudstorage, color: "#AECBFA" },
      { name: "Pub/Sub", icon: SiGooglepubsub, color: "#669DF6" },
      { name: "ElasticSearch", icon: SiElasticsearch, color: "#00BFB3" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
  {
    label: "Web & APIs",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "REST APIs" },
      { name: "gRPC/Protobuf", icon: Network, color: "#5C9EAD" },
    ],
  },
  {
    label: "ML & Research",
    items: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "numpy", icon: SiNumpy, color: "#4DABCF" },
      { name: "pandas", icon: SiPandas, color: "#E70488" },
      { name: "polars", icon: SiPolars, color: "#CD792C" },
      { name: "MATLAB", icon: Sigma, color: "#E16737" },
    ],
  },
];

export const research = {
  paper: {
    title: "Close-up of vesicular ER exit sites by volume EM",
    venue: "Journal of Cell Biology, 2026",
    doi: "10.1083/jcb.202504178",
    url: "https://doi.org/10.1083/jcb.202504178",
  },
  incasem: {
    name: "incasem",
    org: "kirchhausenlab",
    url: "https://github.com/kirchhausenlab/incasem",
    description:
      "Open-source deep-learning segmentation pipeline for cellular substructures in volume EM, underlying the lab's published research. Contributed an upstream fix (removal of a deprecated NumPy dtype) after using it in my own research pipeline.",
  },
};
