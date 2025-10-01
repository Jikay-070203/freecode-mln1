"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic"; 
import confetti from "canvas-confetti";

const Particles = dynamic(() => import("react-tsparticles").then((mod) => mod.default), {
  ssr: false,
});

type Question = {
  pattern: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    pattern: "Khái niệm 'tồn tại xã hội' trong triết học Mác – Lênin là gì?",
    options: [
      "Đời sống tinh thần của con người như đạo đức, pháp luật, tôn giáo",
      "Toàn bộ những điều kiện vật chất của đời sống con người",
      "Những giá trị văn hóa và phong tục tập quán",
      "Chỉ bao gồm nền kinh tế và sản xuất",
    ],
    correctIndex: 1,
  },
  {
    pattern: "Ý thức xã hội được hiểu như thế nào?",
    options: [
      "Toàn bộ điều kiện tự nhiên của con người",
      "Chỉ bao gồm pháp luật và chính trị",
      "Toàn bộ đời sống tinh thần của xã hội",
      "Hệ thống sản xuất và quan hệ kinh tế",
    ],
    correctIndex: 2,
  },
  {
    pattern: "Theo Mác – Lênin, mối quan hệ giữa tồn tại xã hội và ý thức xã hội ra sao?",
    options: [
      "Ý thức xã hội quyết định tồn tại xã hội",
      "Tồn tại xã hội quyết định ý thức xã hội",
      "Không có mối quan hệ nào",
      "Hai khái niệm hoàn toàn độc lập",
    ],
    correctIndex: 1,
  },
  {
    pattern: "Ý nghĩa câu nói của C. Mác: 'Người chết đang đè nặng lên người sống' là gì?",
    options: [
      "Người sống phải chăm lo cho người chết",
      "Những tư tưởng, tập quán quá khứ vẫn ảnh hưởng hiện tại",
      "Người chết vẫn còn sống trong ý thức",
      "Con người luôn bị ám ảnh bởi quá khứ",
    ],
    correctIndex: 1,
  },
  {
    pattern:
      "Ph. Ăngghen nói: 'Chính trị, pháp luật, triết học... đều dựa trên kinh tế, nhưng cũng tác động lẫn nhau và đến kinh tế'. Điều này thể hiện điều gì?",
    options: [
      "Kinh tế hoàn toàn độc lập với chính trị, pháp luật",
      "Kinh tế là cơ sở quyết định, nhưng tinh thần có thể tác động ngược",
      "Ý thức xã hội không có ảnh hưởng gì đến kinh tế",
      "Chỉ chính trị mới ảnh hưởng đến kinh tế",
    ],
    correctIndex: 1,
  },
];

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showAnswer, setShowAnswer] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (qIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
    setShowAnswer((prev) => ({ ...prev, [qIndex]: true }));

    if (questions[qIndex].correctIndex === optionIndex) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col p-6">
      {/* 🌌 Nền Aurora + Particles */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 animate-gradient" />
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 2, direction: "none", outModes: "bounce" },
            links: { enable: true, color: "#ffffff", opacity: 0.4, distance: 150 },
          },
        }}
      />

      {/* 🔙 Nút về trang chủ */}
      <Link
        href="/"
        className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        ⬅ Về trang chủ
      </Link>

      <h1 className="text-3xl font-bold text-center mb-10 text-white drop-shadow">
        📘 Trắc nghiệm ôn tập
      </h1>

      <div className="max-w-2xl mx-auto space-y-6">
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="bg-white/90 backdrop-blur-lg shadow-xl rounded-lg p-4 transition hover:shadow-lg"
          >
            <p className="font-semibold text-gray-900 mb-3">
              {qIndex + 1}. {q.pattern}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, optIndex) => {
                const isSelected = selectedAnswers[qIndex] === optIndex;
                const isCorrect = q.correctIndex === optIndex;
                const hasAnswered = showAnswer[qIndex];

                return (
                  <button
                    key={optIndex}
                    onClick={() => handleSelect(qIndex, optIndex)}
                    disabled={hasAnswered}
                    className={`w-full text-left px-4 py-2 rounded-md border transition
                      ${
                        hasAnswered
                          ? isCorrect
                            ? "bg-green-200 border-green-600 text-green-800 font-semibold"
                            : isSelected
                            ? "bg-red-200 border-red-600 text-red-800"
                            : "bg-gray-50 border-gray-200"
                          : "hover:bg-blue-50 border-gray-300"
                      }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {showAnswer[qIndex] && (
              <p className="mt-3 p-3 bg-gray-100 rounded-md text-gray-800">
                ✅ Đáp án đúng:{" "}
                <span className="font-semibold text-green-700">
                  {q.options[q.correctIndex]}
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
