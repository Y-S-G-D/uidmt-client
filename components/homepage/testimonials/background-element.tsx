"use client";

export function BackgroundElements() {
  return (
    <>
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-900/20 blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl" />
      <div className="absolute right-1/3 top-1/3 grid grid-cols-8 gap-2 opacity-30">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-red-500/30" />
        ))}
      </div>
    </>
  );
}