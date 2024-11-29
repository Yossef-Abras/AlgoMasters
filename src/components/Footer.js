import { Card, CardFooter } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="rounded-none">
      <CardFooter className="bg-green-400 text-inherit py-12">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold text-white">TechAlgo</h2>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:gap-8">
            <Link href="/about" className="text-lg hover:text-white">
              من نحن
            </Link>
            <Link href="/contact" className="text-lg hover:text-white">
              تواصل معنا
            </Link>
            <Link href="/privacy" className="text-lg hover:text-white">
              سياسة الخصوصية
            </Link>
          </div>

          {/* Copyright Information */}
          <div className="mt-6 md:mt-0 text-sm">
            <p>
              &copy; {new Date().getFullYear()} منصة الخوارزميات. جميع الحقوق
              محفوظة.
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
