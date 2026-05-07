import { SkylineDivider } from "./SkylineDivider";
import trustBlob from "@/assets/trust-blob.png";
import peopleBlob2 from "@/assets/people-blob-2.png";
import peopleBlob3 from "@/assets/people-blob-3.png";
import peopleBlob4 from "@/assets/people-blob-4.png";

const blobs = [trustBlob, peopleBlob2, peopleBlob3, peopleBlob4];

const items = [
  {
    title: "Strategic Solutions",
    bullets: [
      "Break down complex processes into manageable daily tasks",
      "Get clear, actionable steps tailored to your situation",
      "Access up-to-date information about changing regulations",
      "Receive guidance in clear, simple English",
    ],
  },
  {
    title: "Local Intelligence",
    bullets: [
      "Discover verified service providers and hidden gems",
      "Navigate Polish systems like a pro",
      "Understand unwritten cultural rules",
      "Find the best areas to live based on your lifestyle",
    ],
  },
  {
    title: "Flexible Support",
    bullets: [
      "Adapt strategies to your unique circumstances",
      "Access solutions for different visa types and situations",
      "Get alternative approaches when Plan A doesn't work",
      "Find answers that fit your timeline and budget",
    ],
  },
  {
    title: "Community Connection",
    bullets: [
      "Join our active community of 2,000+ expats",
      "Share experiences and tips with others on similar journeys",
      "Access regular meetups and networking events",
      "Find friends who understand your challenges",
    ],
  },
];

export function Trust() {
  return (
    <section className="bg-stone relative">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Why People Trust AskAnia</h2>
          <div className="mx-auto h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div key={item.title} className="relative p-10 md:p-12">
              <img
                src={blobs[i]}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] max-w-none object-contain pointer-events-none select-none"
              />
              <div className="relative">
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <ul className="space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="text-foreground/70 text-[15px] leading-relaxed flex gap-2">
                      <span className="text-primary mt-0.5">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SkylineDivider className="-mb-px" />
    </section>
  );
}
