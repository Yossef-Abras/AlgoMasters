import { motion } from "framer-motion";

export default function BackgroundShapes({ count}) {
  const shapeTypes = ["circle", "rect", "code"];
  const colors = [
    "bg-green-400/30",
  "bg-lime-300/30",
  "bg-emerald-500/20",
  "bg-teal-400/25",
  "bg-gray-300/20", 
  "bg-yellow-300/25"
  ];

  const generateShapes = (count) => {
    const shapes = [];
    for (let i = 0; i < count; i++) {
      shapes.push({
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        size: Math.floor(Math.random() * 100) + 80, 
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.5, 
      });
    }
    return shapes;
  };

  const shapes = generateShapes(count);

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const renderShape = (shape, index) => {
    const randomMovement = {
      x: `${Math.random() * 100 - 50}%`,
      y: `${Math.random() * 100 - 50}%`, 
    };

    if (shape.type === "circle") {
      return (
        <motion.div
          key={index}
          className={`absolute ${shape.color} rounded-full`}
          style={{
            width: shape.size,
            height: shape.size,
            filter: shape.blur ? "blur(40px)" : "none",
            ...getRandomPosition(),
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            ...randomMovement,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
        />
      );
    } else if (shape.type === "rect") {
      return (
        <motion.div
          key={index}
          className={`absolute ${shape.color} rounded-lg`}
          style={{
            width: shape.size,
            height: shape.size / 2,
            filter: shape.blur ? "blur(20px)" : "none",
            ...getRandomPosition(),
          }}
          initial={{ opacity: 0, x: "-50%", y: "-50%" }}
          animate={{
            opacity: 1,
            x: "50%",
            y: "50%",
            ...randomMovement,
          }}
          transition={{
            duration: 10 + Math.random() * 5, 
            repeat: Infinity,
            repeatType: "mirror",
            delay: index * 0.3,
          }}
        />
      );
    } else if (shape.type === "code") {
      return (
        <motion.div
          key={index}
          className={`absolute ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size / 3,
            ...getRandomPosition(),
            clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
          }}
          initial={{ opacity: 0, rotate: -45 }}
          animate={{
            opacity: 1,
            rotate: 0,
            ...randomMovement,
          }}
          transition={{
            duration: 9 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.6,
          }}
        />
      );
    }
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, index) => renderShape(shape, index))}
    </div>
  );
}
