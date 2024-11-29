
import { motion } from "framer-motion";
import CardSection from "@/components/CardSection";
import BackgroundShapes from "@/components/BackgroundShapes";
import Sidebar from "@/components/SideBar";
import { useState } from "react";
import { Card } from "@nextui-org/react";
export default function Home() {
  const algorithmCards = [
    {
      title: "خوارزميات الترتيب",
      imageSrc: "/sort-algorithm.svg",
      imageAlt: "Sort Algorithm Icon",
      description: "مجموعة من الخوارزميات المصممة لترتيب البيانات بطرق فعالة ومختلفة."
    },
    {
      title: "خوارزميات البحث",
      imageSrc: "/search-algorithm.svg",
      imageAlt: "Search Algorithm Icon",
      description: "تقنيات تساعد في البحث عن عنصر معين ضمن مجموعة بيانات كبيرة بسرعة وكفاءة."
    },
    {
      title: "خوارزميات التحسين",
      imageSrc: "/optimize-algorithm.svg",
      imageAlt: "Optimize Algorithm Icon",
      description: "تقنيات متقدمة لتحسين الأداء وحل المشاكل المعقدة بكفاءة عالية."
    }
  ];
  const cards = [
    { title: 'محتوى تفاعلي', description: 'تمارين وأمثلة عملية لتعزيز الفهم' },
    { title: 'شرح مبسط', description: 'أسلوب سهل وواضح في شرح المفاهيم المعقدة' },
    { title: 'تحديثات مستمرة', description: 'محتوى جديد يضاف بشكل دوري' }
  ];

  return (
    <div className="relative min-h-screen  bg-green-400/30 backdrop-blur-3xl">
      <BackgroundShapes count={500} />
      <motion.div
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="backdrop:blur-lg shadow-lg shadow-yellow-500">
        <BackgroundShapes count={50} />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-right pt-4 pr-4 text-black">
          اكتشف عالم الخوارزميات: من الأساسيات إلى التطبيقات المتقدمة
        </h1>
        <p className="text-xl text-black mb-8 text-right">
          انضم إلينا في رحلة تعلم شاملة تغطي أساسيات الخوارزميات، هياكل البيانات، وتقنيات حل المشكلات. طور مهاراتك وابدأ في بناء حلول برمجية فعالة وقوية.
        </p>
    </Card>
      </motion.div>
      <div className="mt-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
     لمحة عن المنصة 
    </h2>
        <CardSection cards={algorithmCards} />
        </div>

      {/* Features Section */}
      <div className="mt-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        مميزات المنصة
        </h2>
        <CardSection cards={cards}/>
    </div>
    </div>
  );
}
