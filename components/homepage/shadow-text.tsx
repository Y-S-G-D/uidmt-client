"use client";

const ShadowText = () => {
  return (
    <footer className="relative z-10 w-full py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Glow effect background */}
        <div className="absolute inset-0 blur-[100px] opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500" />
        </div>
        
        {/* Main text with gradient */}
        <h2 className="relative text-[15vw] font-bold text-center leading-none">
          {/* Background text for glow effect */}
          <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 opacity-50 bg-clip-text text-transparent">
            UIDMT
          </span>
          
          {/* Main text */}
          <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text">
            UIDMT
          </span>
        </h2>
      </div>
    </footer>
  );
};

export default ShadowText;