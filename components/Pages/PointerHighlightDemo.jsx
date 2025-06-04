import { PointerHighlight } from "../ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="bg-white py-10 px-4 font-serif text-black border-y-2 border-black">
      {/* Heading */}
      <div className="flex justify-center gap-2 items-center text-2xl md:text-4xl font-extrabold tracking-wide uppercase border-b-2 border-black pb-4 mb-8">
        The best way to grow is to
        <PointerHighlight>
          <span className="italic underline decoration-2 decoration-black">
            collaborate
          </span>
        </PointerHighlight>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-black">
        {/* Card 1 */}
        <div className="rounded border border-black bg-white p-5 shadow-md">
          <div className="text-base font-bold tracking-tight leading-snug">
            <PointerHighlight
              rectangleClassName="bg-neutral-100 border border-neutral-400"
              pointerClassName="text-yellow-600 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="relative z-10">collab tool</span>
            </PointerHighlight>
            of the century with max benefits and minimal effort.
          </div>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Our state-of-the-art collab tool brings unmatched results with minimal hassle—your go-to for success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded border border-black bg-white p-5 shadow-md">
          <div className="text-base font-bold tracking-tight leading-snug">
            Discover our
            <PointerHighlight
              rectangleClassName="bg-blue-50 border border-blue-300"
              pointerClassName="text-blue-600 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">innovative</span>
            </PointerHighlight>
            solutions for your business needs.
          </div>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Transform your ideas into tangible growth with future-ready strategies and expert guidance.
          </p>
        </div>

        {/* Cards 3, 4, 5 */}
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="rounded border border-black bg-white p-5 shadow-md">
            <div className="text-base font-bold tracking-tight leading-snug">
              Experience the future with our
              <PointerHighlight
                rectangleClassName="bg-green-50 border border-green-300"
                pointerClassName="text-green-600 h-3 w-3"
                containerClassName="inline-block ml-1"
              >
                <span className="relative z-10">sustainable technology</span>
              </PointerHighlight>
              .
            </div>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Eco-conscious innovation crafted for lasting impact and a cleaner, greener tomorrow.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
