"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MakeHimHappy() {
  const [isHappy, setIsHappy] = useState(false);

  const sadGuy =
    "https://i.pinimg.com/originals/74/46/1c/74461cfcd2cf3e93cb67d3ab123b66e5.png";
  const happyDance =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTV0emZhYzBiaXFudm5uNHlrcmZuc2k4Z2dpcmRzNDc1ejd6YXg1ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ju7l5y9osyymQ/giphy.gif";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {!isHappy ? (
        <>
          <motion.img
            src={sadGuy}
            alt="Sad guy"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-auto mb-6"
          />
          <p className="text-xl font-medium mb-4 max-w-md">
            He tried marketing on his own… but no one showed up 😢
          </p>
          <button
            onClick={() => setIsHappy(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Make Him Happy 🎉
          </button>
        </>
      ) : (
        <>
          <motion.img
            src={happyDance}
            alt="Dancing happy guy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-52 h-auto mb-6 rounded-lg"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
            Now he's booked, busy & vibin' 💼🎉
          </motion.h2>
          <p className="text-lg text-neutral-600 mb-6">
            All thanks to <span className="font-semibold text-blue-600">Marketingwala 🚀</span>
          </p>
          <button
            onClick={() => setIsHappy(false)}
            className="text-sm text-blue-500 underline hover:text-blue-700">
            Replay Again
          </button>
        </>
      )}
    </div>
  );
}
