import { Hero } from "@/components/Hero/Hero";
import { WhatIsTheCause } from "@/components/WhatIsTheCause/WhatIsTheCause";
import { IllustrationSection } from "@/components/IllustrationSection/IllustrationSection";
import { WhyImportant } from "@/components/WhyImportant/WhyImportant";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { Level0 } from "@/components/Level0/Level0";
import { Level1 } from "@/components/Level1/Level1";
import { Level2 } from "@/components/Level2/Level2";
import { Level3 } from "@/components/Level3/Level3";
import { WhyJoin } from "@/components/WhyJoin/WhyJoin";
import { WhatYouGet } from "@/components/WhatYouGet/WhatYouGet";
import { WhoCanUse } from "@/components/WhoCanUse/WhoCanUse";
import { UseIt } from "@/components/UseIt/UseIt";
import { Download } from "@/components/Download/Download";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsTheCause />
      <IllustrationSection />
      <WhyImportant />
      <section id="om-kurs">
      <HowItWorks />
      </section>
      <Level0 />
      <Level1 />
      <Level2 />
      <Level3 />
      <WhyJoin />
      <section id="for-deltakere">
      <WhatYouGet />
      </section>
      <section id="for-laerer">
      <WhoCanUse />
      </section>
      <section id="kontakt">
      <UseIt />
      </section>
      <Download />
    </main>
  );
}
