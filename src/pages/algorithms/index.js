import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function CardAlgorithms() {
  const cards = [
    { 
      title: "خوارزميات الترتيب",
      description: "خوارزميات الترتيب تستخدم لتنظيم مجموعة من العناصر في ترتيب معين، مثل ترتيب الأرقام أو الكلمات في تسلسل معين. من أشهر خوارزميات الترتيب: الترتيب باستخدام الفقاعات، الترتيب السريع، والترتيب باستخدام الإدراج.",
      image: "/images/sorting.jpg" // مثال لصورة خوارزميات الترتيب
    },
    { 
      title: "خوارزميات البحث",
      description: "خوارزميات البحث تستخدم للعثور على عنصر معين داخل مجموعة من البيانات. يمكن استخدام البحث الثنائي في حالة البيانات المرتبة، أو البحث الشامل في حالة البيانات غير المرتبة.",
      image: "/images/search-algorithm.jpg" // مثال لصورة خوارزميات البحث
    },
    { 
      title: "خوارزميات التحسين",
      description: "تستخدم خوارزميات التحسين لحل المشكلات التي تتطلب إيجاد أفضل حل من مجموعة من الحلول الممكنة. مثل خوارزميات التحسين الجيني أو خوارزميات التحسين المتماثل.",
      image: "/images/optimization-algorithm.jpg" // مثال لصورة خوارزميات التحسين
    },
    { 
      title: "خوارزميات التشفير",
      description: "تستخدم خوارزميات التشفير لحماية البيانات من الوصول غير المصرح به. من أشهر الخوارزميات المستخدمة: AES وRSA، والتي تستخدم في تأمين البيانات عبر الإنترنت.",
      image: "/images/encryption-algorithm.jpg" // مثال لصورة خوارزميات التشفير
    },
  ];
  
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-2xl font-bold text-center mb-8">أقسام الخوارزميات</h1>
      <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden cursor-pointer">
              {/* إضافة الصورة أعلى البطاقة */}
          
              <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-3 rounded-t-xl">
                <h3 className="font-extrabold text-xl text-center">{card.title}</h3>
              </div>
              <div className="relative">
                <Image
                  width={1000}
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-36"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {card.description}
                </p>
              </div>
              {/* الشكل الزخرفي في أسفل البطاقة */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
