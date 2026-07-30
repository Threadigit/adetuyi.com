import type { Metadata } from "next";
import ProfileArchive from "@/components/ProfileArchive";
import { speakingEntries } from "@/lib/profile-content";

export const metadata: Metadata = {
  title: "Speaking & Panels",
  description:
    "Talks, panels, and presentations by Tolu Adetuyi on infrastructure, compliance, identity, venture building, and African markets.",
  alternates: { canonical: "https://adetuyi.com/speaking" },
};

export default function SpeakingPage() {
  return (
    <ProfileArchive
      eyebrow="Speaking"
      title="Speaking & Panels"
      description="Selected talks and presentations on trust infrastructure, financial systems, venture building, compliance, and the forces shaping African markets."
      entries={speakingEntries}
    />
  );
}
