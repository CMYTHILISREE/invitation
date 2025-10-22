import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const pregnantImage = "/assets/Ramya.jpg";
const flowerPetal = "https://cdn-icons-png.flaticon.com/512/833/833472.png";
const heartIcon = "https://cdn-icons-png.flaticon.com/512/833/833472.png";
const MUSIC_SRC = "/assets/song.mp3";

export default function BabyShowerInvite() {
  const petals = Array.from({ length: 15 });
  const hearts = Array.from({ length: 10 });
  const sparkles = Array.from({ length: 20 });
  const circles = Array.from({ length: 6 }); // bright circles behind pregnant woman

  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.volume = 0.5;
      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch((err) => console.log("Play blocked:", err));
    }
  };

  const textStaggerVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
    hidden: {},
  };

  const textItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-10 font-[Quicksand] bg-gradient-to-b from-pink-50 via-purple-50 to-yellow-50">
      <motion.div
  className="relative rounded-3xl p-8 md:p-12 max-w-xl w-11/12 shadow-2xl overflow-hidden border border-white/20"
  initial={{ opacity: 2, scale: 0.85 }}
  animate={{ opacity: 2, scale: 1 }}
  transition={{ duration: 1 }}
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/236x/5b/d6/8b/5bd68bd5b30988ab1f4ff8041067eca3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(255,255,255,0.35)", // lighter, bright overlay
  }}
>
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(270deg, #ffdde1, #fad0c4, #a1c4fd, #c2e9fb)",
            backgroundSize: "800% 800%",
            opacity: 0.15,
          }}
        />

        {/* Falling Petals */}
        {petals.map((_, i) => (
          <motion.img
            key={`petal-${i}`}
            src={flowerPetal}
            alt="petal"
            className="absolute w-5 h-5 opacity-80"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 280, rotate: 360, opacity: 1 }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 90}%`,
              scale: 0.6 + Math.random(),
            }}
          />
        ))}

        {/* Floating Hearts */}
        {hearts.map((_, i) => (
          <motion.img
            key={`heart-${i}`}
            src={heartIcon}
            alt="heart"
            className="absolute w-4 h-4 opacity-80"
            initial={{ y: 180, opacity: 0 }}
            animate={{ y: -60, rotate: 360, opacity: 1 }}
            transition={{
              duration: 7 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 90}%`,
              scale: 0.5 + Math.random(),
            }}
          />
        ))}

        {/* Sparkles */}
        {sparkles.map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70"
            initial={{ y: Math.random() * 200, opacity: 0 }}
            animate={{ y: Math.random() * 200, opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
            style={{
              left: `${Math.random() * 90}%`,
              scale: Math.random() + 0.4,
            }}
          />
        ))}

        {/* Bright Circle Decorations */}
        {circles.map((_, i) => {
          const colors = ["#FF9A9E", "#FAD0C4", "#A1C4FD", "#C2E9FB", "#FFD700", "#FFB6C1"];
          return (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full opacity-40"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{
                width: 60 + Math.random() * 40,
                height: 60 + Math.random() * 40,
                backgroundColor: colors[i % colors.length],
                top: 150 + Math.random() * 30,
                left: 100 + i * 30,
                zIndex: 0,
              }}
            />
          );
        })}

        {/* Pregnant Woman Image - Subtle Floating */}
        <motion.img
          src={pregnantImage}
          alt="Pregnant Woman"
          className="w-60 h-60 mx-auto rounded-full mb-1 border-4 border-pink-400 shadow-lg relative z-10"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Text Section */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={textStaggerVariants}
  className="text-center relative z-10"
>
<motion.h1
  variants={textItemVariants}
  className="text-3xl md:text-5xl font-[Dancing_Script] font-bold mb-3
             bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600
             bg-clip-text text-transparent"
>
  A Sweet Little Baby is on the Way!
</motion.h1>



  <motion.p
  variants={textItemVariants}
  className="mb-6 text-base md:text-lg font-[Poppins] text-gray-700"
>
  Join us to celebrate the Mom-to-be{" "}
  <span className="font-bold text-pink-500">Ramya</span> 💕
  <br />
  Dad-to-be{" "}
  <span className="font-semibold text-purple-500">Dharanidharan</span>
</motion.p>

{/* Event Details */}
<motion.div
  variants={textItemVariants}
  className="bg-white/30 backdrop-blur-md p-5 rounded-2xl mb-6 shadow-lg max-w-[50%] mx-auto cursor-pointer transition-all"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    backgroundColor: "rgba(255,255,255,0.45)",
  }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
>
  <h2 className="text-xl md:text-2xl font-[Dancing_Script] font-bold text-pink-500 mb-2">
    Event Details
  </h2>
  <p className="font-semibold text-gray-800">📅 Date: 26th Oct 2025</p>
  <p className="font-semibold text-gray-800">⏰ Time: 10:00 AM onwards</p>
  <p className="mt-2 text-sm italic text-gray-600">💖 Your love 💖 and blessings are enough! 💖</p>
</motion.div>


{/* Venue */}
<motion.div variants={textItemVariants} className="text-gray-700">
  <h2 className="text-xl md:text-2xl font-[Dancing_Script] font-bold text-pink-500 mb-2">
    Venue
  </h2>
  <p className="font-semibold text-blue-950">Chimney Restaurant</p>
  <p className="text-sm italic text-blue-950 mb-3 font-bold">
    No. 21, Old Railway Station Road, Erode Railway Colony, Erode - 638002.
  </p>
  <motion.a
    href="https://www.google.com/maps?q=Chimney+Restaurant,+Erode"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="inline-block px-5 py-2 bg-purple-400 text-white rounded-full font-semibold shadow-md hover:bg-purple-500 transition"
  >
    📍 View on Map
  </motion.a>
</motion.div>

</motion.div>

      </motion.div>

      {/* Music Button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {musicPlaying ? "🎶" : "🔇"}
      </motion.button>

      {/* Tap to Start Music Overlay */}
      {!musicPlaying && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 cursor-pointer"
          onClick={toggleMusic}
        >
          <h2 className="text-white text-2xl font-bold animate-bounce">
            Tap to Start Music 🎵
          </h2>
        </div>
      )}

      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
    </div>
  );
}









