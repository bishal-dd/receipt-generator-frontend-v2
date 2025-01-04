export const Background = () => {
  return (
    <>
      <div className="absolute inset-0 grid grid-cols-[repeat(24,minmax(0,1fr))] gap-2 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border-l border-white/10 h-full" />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-[repeat(24,minmax(0,1fr))] gap-2 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border-t border-white/10 w-full" />
        ))}
      </div>
    </>
  );
};
