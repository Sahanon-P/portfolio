"use server";
import client from "./contentful";
import { ExperienceSkeleton, ProjectSkeleton, ResearchSkeleton } from "./contentful-types";
export async function getProjects() {
  try {
    const res = await client.getEntries<ProjectSkeleton>({
      content_type: "project",
      order: ["fields.order"],
    });
    return res.items;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getExperiences() {
  try {
    const res = await client.getEntries<ExperienceSkeleton>({
      content_type: "experience",
      order: ["fields.startDate"],
    });
    return res.items;
  } catch (error) {
    console.log("Error fetching experiences:", error);
    return [];
  }
}

export async function getResearch() {
  try {
    const res = await client.getEntries<ResearchSkeleton>({
      content_type: "research",
      order: ["fields.year"],
    });
    return res.items;
  } catch (error) {
    console.log("Error fetching research:", error);
    return [];
  }
}
