import { EntryFieldTypes } from "contentful";
export interface ContentfulEntrySkeleton {
    metadata: object;
    sys: object;
    fields: ProjectFields | ExperienceFields | ResearchFields;
}

interface ProjectFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    techStack: EntryFieldTypes.Symbol;
    githubUrl: EntryFieldTypes.Symbol;
    liveUrl: EntryFieldTypes.Symbol;
    order: EntryFieldTypes.Integer;
}
interface ExperienceFields {
    company: EntryFieldTypes.Symbol;
    role: EntryFieldTypes.Symbol;
    startDate: EntryFieldTypes.Symbol;
    endDate: EntryFieldTypes.Symbol;
    responsibilities: EntryFieldTypes.RichText;
}
interface ResearchFields {
    title: EntryFieldTypes.Symbol;
    institution: EntryFieldTypes.Symbol;
    year: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol;
    keyFindings: EntryFieldTypes.RichText;
    pdfUrl: EntryFieldTypes.AssetLink;
}
export interface ProjectSkeleton {
  contentTypeId: "project";
  fields: ProjectFields;
}

export interface ExperienceSkeleton {
  contentTypeId: "experience";
  fields: ExperienceFields;
}

export interface ResearchSkeleton {
    contentTypeId: "research";
    fields: ResearchFields;
}
