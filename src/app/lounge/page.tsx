export default function Lounge() {
  return (
    <>
      <div className="relative flex text-xl h-screen bg-black w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="snow animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 9}s`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                opacity: Math.random() * 0.6 + 0.4
              }}
            />
          ))}
        </div>
        <div className="z-10">Lounge Vibes</div>
      </div>
    </>
  );
}