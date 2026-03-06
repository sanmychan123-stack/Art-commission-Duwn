import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bubbles = new Array(25).fill(0);

export default function CommissionSite() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newSparkle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setSparkles((prev) => [...prev.slice(-20), newSparkle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 via-sky-200 to-blue-300 p-6">

      {/* Floating bubbles */}
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 800, x: Math.random() * 1400, opacity: 0.3 }}
          animate={{ y: -200, opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12 + Math.random() * 10, repeat: Infinity }}
          className="absolute w-6 h-6 rounded-full bg-white/40 backdrop-blur-md"
        />
      ))}

      {/* Mouse sparkle trail */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none fixed text-white"
          style={{ left: s.x, top: s.y }}
        >
          ✨
        </motion.div>
      ))}

      <div className="relative max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-10 text-white drop-shadow-lg"
        >
          🫧 Dreamy Artist Commission ✨
        </motion.h1>

        {/* About */}
        <Card className="mb-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">About My Art</h2>
            <p>
              Welcome to my dreamy art portfolio 🌊✨. I create custom
              illustrations and character art. If you like my style you can
              order a commission below.
            </p>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card className="mb-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Art Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {new Array(6).fill(0).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-blue-100 rounded-xl shadow-inner"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price list */}
        <Card className="mb-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Price List</h2>
            <ul className="space-y-2">
              <li>Sketch — $5</li>
              <li>Half Body — $10</li>
              <li>Full Body — $15</li>
              <li>Background — +$5</li>
            </ul>
          </CardContent>
        </Card>

        {/* Terms of Service */}
        <Card className="mb-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <ul className="space-y-2 text-sm">
              <li>• Payment must be sent before I start the drawing.</li>
              <li>• Commission may take 3–7 days depending on complexity.</li>
              <li>• I may post the artwork in my portfolio.</li>
              <li>• No refunds after sketch approval.</li>
              <li>• Please credit me when reposting the art.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Order buttons */}
        <Card className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Order Commission</h2>
            <p>You can contact me directly here:</p>

            <div className="flex justify-center gap-4">
              <Button className="text-lg">
                <Sparkles className="mr-2" /> Order via Discord
              </Button>

              <Button className="text-lg">
                <Instagram className="mr-2" /> Order via Instagram
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
