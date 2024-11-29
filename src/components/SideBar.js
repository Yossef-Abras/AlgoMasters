"use client"

import React, { useState } from "react"
import Link from "next/link"

function Sidebar() {
  const menuItems = [
    { title: "React - نظرة عامة", href: "#" },
    { title: "React - تجهيز بيئة العمل", href: "#" },
    { title: "React - إستعمال موجه الأوامر", href: "#" },
    { title: "React - إنشاء مشروع جديد", href: "#" },
    { title: "React - عرض المحتوى", href: "#" },
  ]
  return (
    <div
      dir="rtl"
      className="fixed right-0 h-full w-64 flex flex-col overflow-hidden bg-gray-100 shadow-lg"
    >
 
      <div className="flex h-16 items-center justify-center bg-green-400">
        <h1 className="text-xl font-bold text-white">أساسيات React</h1>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute right-2 top-0 h-full w-0.5 bg-gray-300" />

          {/* Menu items */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative flex items-center rounded-lg px-8 py-2 text-sm text-gray-700 hover:bg-white"
              >
                {/* Timeline dot */}
                <div className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-gray-300 bg-white group-hover:border-blue-500" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
