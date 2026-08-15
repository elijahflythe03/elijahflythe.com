import type { Metadata } from "next";
import Container from "@/components/Container";
import WriteupList from "@/components/WriteupList";
import FadeInSection from "@/components/FadeInSection";
import { writeups } from "@/lib/writeups";

export const metadata: Metadata = {
  title: "Write-ups - Elijah Flythe",
  description: "Penetration testing write-ups and CTF walkthroughs by Elijah Flythe.",
};

export default function WriteupsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">Write-ups</h1>
      <p className="mt-3 max-w-2xl text-base text-muted">
        Penetration testing walkthroughs from TryHackMe boxes and CTF challenges.
      </p>

      <FadeInSection className="mt-10">
        <WriteupList writeups={writeups} />
      </FadeInSection>
    </Container>
  );
}
