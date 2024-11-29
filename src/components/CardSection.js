import { motion } from "framer-motion";

export default function CardSection({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-center pb-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition duration-500"></div>

          {/* Card Content */}
          <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-5 rounded-t-xl">
              <h3 className="font-extrabold text-2xl">{card.title}</h3>
            </div>
            {/* Body */}
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {card.description}
              </p>
            </div>
            {/* Decorative Shape */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
