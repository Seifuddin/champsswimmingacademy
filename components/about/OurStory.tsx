import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const values = ["Confidence", "Water Safety", "Progress"];

export default function OurStory() {
  return (
    <section className="bg-white py-8 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* IMAGE */}
          <div className="relative h-[230px] overflow-hidden sm:h-[300px] lg:h-[340px]">
            <Image
              src="/images/hero.jpg"
              alt="Swimming at Champs Swimming Academy"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#22B8C7]" />
          </div>

          {/* STORY */}
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Our Story
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              Inspiring Confidence,
              <span className="text-[#087EAB]"> One Stroke at a Time.</span>
            </h2>

            <div className="mt-4 max-w-2xl space-y-3 text-sm leading-6 text-slate-600">
              <p>
                At Champs Swimming Academy, we believe swimming is more
                than a sport. It is an essential life skill that builds
                confidence, promotes safety and opens the door to endless
                possibilities.
              </p>

              <p>
                Our goal is to create a supportive learning environment
                where everyone, regardless of their starting point, can
                develop their abilities, overcome challenges and become
                confident swimmers.
              </p>
            </div>

            {/* VALUES */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-4">
              {values.map((value, index) => (
                <div key={value} className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#22B8C7]">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#082F49]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Small closing detail */}
            <div className="mt-4 flex items-center gap-2 text-[#087EAB]">
              <span className="text-xs font-bold">
                Every swimmer has a beginning.
              </span>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}