import { PointerHighlight } from "../ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="bg-white py-10 px-4 poiret-one-regular text-black border-y-2 border-blue-700 ">
      {/* Heading */}
      <div className="flex justify-center gap-2 items-center text-2xl md:text-4xl font-extrabold tracking-wide uppercase  pb-4 mb-8 poiret-one-regular">
        The best way to grow is to
        <PointerHighlight>
          <span className="px-2 italic underline decoration-2 decoration-blue-900">
            COLLABORATE
          </span>
        </PointerHighlight>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-blue-900 poppins-regular">
        {/* Card 1 */}
        <div className="rounded border border-blue-700  p-5 shadow-md shadow-blue-300">
          <div className="text-base font-bold tracking-tight leading-snug">
            
            Started Small, Think 
            <PointerHighlight
              rectangleClassName="bg-blue-100 border border-blue-300"
              pointerClassName="text-blue-700 h-3 w-3"
              containerClassName="inline-block mr-1 ml-1"
            >
              <span className="relative z-10 px-2"> BIG</span>
            </PointerHighlight>
          </div>
          <p className="mt-3 text-sm text-blue-800 leading-relaxed">
          We’re a young agency with bold ideas and bigger intent. Built from scratch, we know what it means to dream on a budget and deliver beyond expectations.

          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded border border-blue-700  p-5 shadow-md shadow-blue-300">
          <div className="text-base font-bold tracking-tight leading-snug">
         
           
            Big Ideas, Not Big 
            <PointerHighlight
              rectangleClassName="bg-blue-200 border border-blue-400"
              pointerClassName="text-blue-800 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 px-2">BUDGETS</span>
            </PointerHighlight>
          </div>
          <p className="mt-3 text-sm text-blue-800 leading-relaxed">
          We believe smart strategy beats a fat wallet. Whether you’re a startup or scaling brand, we make every rupee count and every campaign speak.

          </p>
        </div>

        {/* Cards 3, 4, 5 */}
        <div className="rounded border border-blue-700  p-5 shadow-md shadow-blue-300">
          <div className="text-base font-bold tracking-tight leading-snug">
         
           
          You Visualize It, We 
          <PointerHighlight
              rectangleClassName="bg-blue-200 border border-blue-400"
              pointerClassName="text-blue-800 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 px-2">CREATE</span>
            </PointerHighlight> It 
           
          </div>
          <p className="mt-3 text-sm text-blue-800 leading-relaxed">
          Got a content idea in your head? We’ll bring it to life with stories, visuals, and videos that speak your brand’s vibe loud and clear.

          </p>
        </div>
        <div className="rounded border border-blue-700  p-5 shadow-md shadow-blue-300">
          <div className="text-base font-bold tracking-tight leading-snug">
         
           
          No Fluff. Just  
          <PointerHighlight
              rectangleClassName="bg-blue-200 border border-blue-400"
              pointerClassName="text-blue-800 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 px-2">REAL</span>
            </PointerHighlight> Results.
           
          </div>
          <p className="mt-3 text-sm text-blue-800 leading-relaxed">
          No confusing lingo, no empty hype. We focus on performance, building strategies that show up in your insights, not just your feed.

          </p>
        </div>
        <div className="rounded border border-blue-700  p-5 shadow-md shadow-blue-300">
          <div className="text-base font-bold tracking-tight leading-snug">
         
           
          We <PointerHighlight
              rectangleClassName="bg-blue-200 border border-blue-400"
              pointerClassName="text-blue-800 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 px-2">GROW</span>
            </PointerHighlight>With You, Not Over You
          
           
          </div>
          <p className="mt-3 text-sm text-blue-800 leading-relaxed">
          We work with you, not just for you. Think of us as your extended creative team, collaborating, co-creating, and cheering for your growth at every step.
          </p>
        </div>
      </div>
    </div>
  );
}
