import Sidebar from "@/components/SideBar"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Algorithm() {
  const router = useRouter();
  const { id } = router.query;

  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (id) {
      setActiveItem(id);
    }
  }, [id]);
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">مرحبًا بك في أساسيات React</h1>
      <p className="mt-4">
        هنا يمكنك تعلم كل ما يتعلق بـ React من خلال القوائم الموجودة في الشريط الجانبي.
      </p>
      <div className="mt-8 space-y-8">
        {/* محتوى إضافي */}
        {Array.from({ length: 100 }, (_, index) => (
          <p key={index} className="text-gray-600">
            هذا نص تجريبي للمحتوى. يمكنك استبداله بمحتوى حقيقي يناسب الصفحة.
          </p>
        ))}
      </div>
      </div>
  
    </div>
  )
}
