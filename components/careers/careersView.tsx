"use client";

import { useState } from "react";
import { toast } from "sonner";
import { JOB_OPENINGS } from "@/lib/mockData";
import { CareersHero } from "./careersHero";
import { CareersPerks } from "./careersPerks";
import { JobOpeningsAccordion } from "./jobOpenings";
import { ApplicationForm } from "./applicationForm";

export function CareersView() {
  const [selectedPositionId, setSelectedPositionId] = useState<string>(
    JOB_OPENINGS[0]?.id ?? ""
  );

  const handleApply = (jobId: string) => {
    setSelectedPositionId(jobId);

    document
      .getElementById("application-form-section")
      ?.scrollIntoView({ behavior: "smooth" });

    toast.info(
      `Position selected: ${JOB_OPENINGS.find((j) => j.id === jobId)?.title}`
    );
  };

  return (
    <div className="space-y-20 pb-20">
      <CareersHero />
      <CareersPerks />
      <JobOpeningsAccordion onApply={handleApply} />
      <ApplicationForm selectedPositionId={selectedPositionId} />
    </div>
  );
}