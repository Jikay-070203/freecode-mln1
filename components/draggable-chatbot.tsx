"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Minimize2, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

interface QAData {
  patterns: string[]
  response: string
}

export default function DraggableChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý AI. Bạn có câu hỏi gì về triết học Mác-Lênin không?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [position, setPosition] = useState({ x: 50, y: 400 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const [qaData, setQaData] = useState<QAData[]>([]) // ✅ dữ liệu từ JSON

  const chatbotRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // load dữ liệu từ JSON
  useEffect(() => {
    fetch("/chatbot-data.json")
      .then(res => res.json())
      .then(data => setQaData(data))
      .catch(err => console.error("❌ Lỗi load chatbot-data.json:", err))
  }, [])

  // cập nhật kích thước box
  useEffect(() => {
    const updateDimensions = () => {
      if (chatbotRef.current) {
        const { width, height } = chatbotRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // scroll xuống cuối khi có tin nhắn
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // ================== DRAG logic ==================
  const startDrag = (clientX: number, clientY: number) => {
    if (!chatbotRef.current) return
    const rect = chatbotRef.current.getBoundingClientRect()
    setDragOffset({ x: clientX - rect.left, y: clientY - rect.top })
    setIsDragging(true)
  }

  const moveDrag = (clientX: number, clientY: number) => {
    if (!isDragging || !chatbotRef.current) return
  
    let newX = clientX - dragOffset.x
    let newY = clientY - dragOffset.y
  
    // lấy kích thước cửa sổ chatbot
    const rect = chatbotRef.current.getBoundingClientRect()
    const maxX = window.innerWidth - rect.width
    const maxY = window.innerHeight - rect.height
  
    // giới hạn không cho ra ngoài
    newX = Math.max(0, Math.min(newX, maxX))
    newY = Math.max(0, Math.min(newY, maxY))
  
    setPosition({ x: newX, y: newY })
  }
  

  const stopDrag = () => setIsDragging(false)

  // desktop events
  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX, e.clientY)
  const handleMouseMove = useCallback(
    (e: MouseEvent) => moveDrag(e.clientX, e.clientY),
    [isDragging, dragOffset, dimensions]
  )

  // mobile events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    startDrag(touch.clientX, touch.clientY)
  }
  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]
    moveDrag(touch.clientX, touch.clientY)
  }

  // attach global events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", stopDrag)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", stopDrag)
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", stopDrag)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", stopDrag)
    }
  }, [isDragging, handleMouseMove])

  // auto fix vị trí khi resize
  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => ({
        x: Math.min(prev.x, window.innerWidth - dimensions.width),
        y: Math.min(prev.y, window.innerHeight - dimensions.height),
      }))
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dimensions])

// Khi mở cửa sổ -> đảm bảo không vượt màn hình
useEffect(() => {
  if (isOpen && chatbotRef.current) {
    const rect = chatbotRef.current.getBoundingClientRect()
    const maxX = window.innerWidth - rect.width
    const maxY = window.innerHeight - rect.height

    setPosition(prev => ({
      x: Math.max(0, Math.min(prev.x, maxX)),
      y: Math.max(0, Math.min(prev.y, maxY)),
    }))
  }
}, [isOpen, dimensions])


  // ================== AI trả lời ==================
  const getAIResponse = (msg: string) => {
    const lower = msg.toLowerCase()
    for (const qa of qaData) {
      if (qa.patterns.some(p => lower.includes(p.toLowerCase()))) {
        return qa.response
      }
    }
    return "🤔 Tôi chưa có dữ liệu cho câu hỏi này. Bạn có thể hỏi thêm về triết học Mác-Lênin!"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    const userMsg: Message = { id: messages.length + 1, text: inputValue, isUser: true, timestamp: new Date() }
    const aiMsg: Message = {
      id: messages.length + 2,
      text: getAIResponse(inputValue),
      isUser: false,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMsg, aiMsg])
    setInputValue("")
  }

  // ================== Icon Bot (floating) ==================
  if (!isOpen) {
    return (
      <motion.div
        ref={chatbotRef}
        className="fixed z-50 cursor-pointer"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="relative bg-gradient-to-r from-cyan-400 to-indigo-500 text-white rounded-full p-8 shadow-xl hover:scale-110 transition"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-300/40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <MessageCircle className="h-12 w-12 relative z-10" />
        </Button>
      </motion.div>
    )
  }

  // ================== Chat Window ==================
  return (
    <motion.div
      ref={chatbotRef}
      className="fixed z-50 flex flex-col w-96 max-w-[90vw] h-[600px] max-h-[80vh] 
                 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 text-white p-3 flex justify-between items-center cursor-move shadow-md">
        <span className="font-semibold text-sm md:text-base">✨ Trợ lý Triết học Mác-Lênin</span>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </Button>
        </div>
      </div>

      {/* Nội dung */}
      {!isMinimized && (
        <>
          <ScrollArea className="flex-1 p-4 space-y-3">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                    m.isUser
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{m.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="p-3 border-t bg-white/60 backdrop-blur-md flex gap-2">
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSendMessage()}
              placeholder="Nhập câu hỏi..."
              className="text-sm rounded-full px-4"
            />
            <Button
              onClick={handleSendMessage}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-4"
            >
              <Send size={16} />
            </Button>
          </div>
        </>
      )}
    </motion.div>
  )
}
