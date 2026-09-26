export type ShiftPreference =
  | "Full-Time Daytime"
  | "Full-Time Evening / Night"
  | "Part-Time Flexible Hours"
  | "Weekend Shifts Only";

export type ExperienceYears =
  | "No experience (Eager to learn in Academy)"
  | "Less than 1 Year"
  | "1-2 Years"
  | "3-5 Years"
  | "5+ Years (Supervisory experience)";

export interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  positionId: string;
  shiftPreference: ShiftPreference;
  experienceYears: ExperienceYears;
  coverNote: string;
}

export const SHIFT_OPTIONS: { value: ShiftPreference; label: string }[] = [
  { value: "Full-Time Daytime", label: "Full-Time Daytime (Mon - Fri)" },
  { value: "Full-Time Evening / Night", label: "Full-Time Evening / Night (Commercial)" },
  { value: "Part-Time Flexible Hours", label: "Part-Time Flexible Hours" },
  { value: "Weekend Shifts Only", label: "Weekend Shifts Only" },
];

export const EXPERIENCE_OPTIONS: { value: ExperienceYears; label: string }[] = [
  { value: "No experience (Eager to learn in Academy)", label: "No experience (Eager to learn in Academy)" },
  { value: "Less than 1 Year", label: "Less than 1 Year" },
  { value: "1-2 Years", label: "1-2 Years" },
  { value: "3-5 Years", label: "3-5 Years" },
  { value: "5+ Years (Supervisory experience)", label: "5+ Years (Supervisory experience)" },
];

export const DEFAULT_APPLICATION_DATA = (positionId: string): ApplicationData => ({
  fullName: "",
  email: "",
  phone: "",
  positionId,
  shiftPreference: "Full-Time Daytime",
  experienceYears: "1-2 Years",
  coverNote: "",
});