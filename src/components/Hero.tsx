import { motion } from "framer-motion";
import skyline from "@/assets/skyline.png";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section id="top" className="relative bg-navy text-navy-foreground overflow-hidden pb-0">
      <Navbar />

      {/* Skyline silhouette under logo */}
      <div className="relative pt-52 md:pt-60 -mb-px">
        <img
          src={skyline}
          alt="Warsaw skyline"
          className="w-full max-w-5xl mx-auto h-auto select-none pointer-events-none block translate-y-[2px]"
        />
      </div>

      {/* Peach content area */}
      <div className="bg-[#f9e4cd] text-peach-foreground">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-center md:gap-16 max-w-3xl"
          >
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-navy">
                Navigate Poland<br />with Confidence
              </h1>
              <p className="text-base md:text-lg text-navy/75 max-w-xl mx-auto">
                From bureaucratic mazes to cultural surprises, transform your Polish journey
                from overwhelming to achievable. Your step-by-step guide to thriving in Poland starts here.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex justify-center shrink-0">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-lg rounded-sm font-medium hover:opacity-90 transition shadow-warm"
              >
                Get Your Guide
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
