function GameCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[260px] overflow-hidden bg-[#2b155f] text-white  border-2 border-cyan-500">
      {children}
    </div>
  );
}

GameCard.Image = function ({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <img className="h-96 w-full object-cover" src={src} alt={alt} />
      {children}
    </div>
  );
};

GameCard.Badge = function ({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute bottom-10 bg-teal-500 text-black text-xs font-semibold px-3 py-1.5  flex items-center gap-1">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M6.55768 14.5095C8.12445 14.8566 9.76387 14.6269 11.1749 13.8626C12.586 13.0983 13.674 11.8506 14.2392 10.3487C14.8044 8.84672 14.8088 7.1913 14.2517 5.68633C13.6946 4.18137 12.6134 2.92785 11.2065 2.15593C9.79954 1.384 8.1614 1.14548 6.59277 1.48414C5.02415 1.8228 3.6303 2.71594 2.66718 3.99953C1.70407 5.28313 1.23625 6.87109 1.34969 8.47182C1.46308 10.0726 2.15012 11.5787 3.28463 12.7137L4.37371 13.8028M1.47198 13.8013H4.37233V10.901"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 5.33398V8.00065V10.6673"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33301 8H10.6663"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {children}
    </span>
  );
};

GameCard.Platform = function ({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <span className="absolute bottom-0 left-0 right-0 w-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 text-center flex justify-center items-center gap-2">
      <img className="h-5 rounded-full" src={src} alt={alt} />
      {children}
    </span>
  );
};

GameCard.Body = function ({ children }: { children: React.ReactNode }) {
  return <div className="p-3 space-y-2">{children}</div>;
};

GameCard.Title = function ({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold leading-tight">{children}</h2>;
};

GameCard.Region = function ({ children }: { children: React.ReactNode }) {
  return <p className="text-green-400 text-sm font-semibold">{children}</p>;
};

GameCard.Price = function ({
  original,
  discount,
  final,
}: {
  original: number;
  discount: number;
  final: number;
}) {
  return (
    <>
      <div className="text-sm font-medium">
        <span className="line-through text-gray-400 mr-1">
          From €{original.toFixed(2)}
        </span>
        <span className="text-green-400 font-medium">-{discount}%</span>
      </div>
      <div className="flex items-center gap-1 text-xl font-bold font-medium">
        €{final.toFixed(2)}
        <svg width="19" height="19" viewBox="0 0 16 16" className="ml-2 mt-1">
          <path
            d="M5.69 6.13c0-.25.2-.44.43-.44h.44a.88.88 0 0 1 .88.87v2.19a.44.44 0 0 0 .43.44h.44a.44.44 0 0 1 0 .87h-.44a1.31 1.31 0 0 1-1.3-1.31V6.56h-.45a.44.44 0 0 1-.43-.43Z"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.05 2.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM7 .88a6.13 6.13 0 1 0 0 12.25A6.13 6.13 0 0 0 7 .87Z"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

GameCard.Cashback = function ({ amount }: { amount: number }) {
  return (
    <p className="text-green-400 text-sm">Cashback: €{amount.toFixed(2)}</p>
  );
};

GameCard.Footer = function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center  px-3 pb-3 text-sm text-gray-300">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
        className="size-5 mr-2"
      >
        <path
          d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {children}
    </div>
  );
};

export default GameCard;
