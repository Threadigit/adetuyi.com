import type { Metadata } from "next";
import ProfileArchive from "@/components/ProfileArchive";
import { pressEntries } from "@/lib/profile-content";

export const metadata: Metadata = {
  title: "Press & Publications",
  description:
    "Selected press coverage, interviews, commentary, and research featuring Tolu Adetuyi.",
  alternates: { canonical: "https://adetuyi.com/press" },
};

export default function PressPage() {
  return (
    <ProfileArchive
      eyebrow="Press"
      title="Press & Publications"
      description="Selected reporting, interviews, commentary, and research spanning trust infrastructure, financial crime, digital identity, and company building."
      entries={pressEntries}
    />
  );
}
