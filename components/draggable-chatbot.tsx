"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Minimize2, Bot } from "lucide-react"
import { motion } from "framer-motion"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function DraggableChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý AI chuyên về triết học Mác-Lênin. Bạn có câu hỏi gì không?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [position, setPosition] = useState({ x: 50, y: 400 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const chatbotRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
    if (!isDragging) return
    let newX = clientX - dragOffset.x
    let newY = clientY - dragOffset.y
    const maxX = window.innerWidth - dimensions.width
    const maxY = window.innerHeight - dimensions.height
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    })
  }

  const stopDrag = () => setIsDragging(false)

  // desktop events
  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX, e.clientY)
  const handleMouseMove = useCallback((e: MouseEvent) => moveDrag(e.clientX, e.clientY), [isDragging, dragOffset, dimensions])

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

  // ================== AI trả lời ==================
  const getAIResponse = (msg: string) => {
    const lower = msg.toLowerCase()
    if (lower.includes("ý thức xã hội")) return "👉 Tồn tại xã hội quyết định ý thức xã hội..."
    return "Bạn có thể hỏi thêm về triết học Mác-Lênin!"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    const userMsg: Message = { id: messages.length + 1, text: inputValue, isUser: true, timestamp: new Date() }
    const aiMsg: Message = { id: messages.length + 2, text: getAIResponse(inputValue), isUser: false, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg, aiMsg])
    setInputValue("")
  }

  // ================== Icon Bot ==================
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-8 shadow-2xl hover:scale-110 transition"
        >
          <Bot className="h-12 w-12" />
        </Button>
      </motion.div>
    )
  }

  // ================== Chat Window ==================
  return (
    <motion.div
      ref={chatbotRef}
      className="fixed z-50 flex flex-col w-96 max-w-[90vw] h-[600px] max-h-[80vh] 
                 bg-white rounded-xl shadow-2xl overflow-hidden border"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 flex justify-between items-center cursor-move">
        <span className="font-semibold text-sm md:text-base">Trợ lý Triết học Mác-Lênin</span>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={() => setIsMinimized(!isMinimized)}>
            <Minimize2 size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)}>
            <X size={16} />
          </Button>
        </div>
      </div>

      {/* Nội dung */}
      {!isMinimized && (
        <>
          <ScrollArea className="flex-1 p-3 space-y-3">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-2 rounded-lg ${m.isUser ? "bg-blue-600 text-white" : "bg-gray-100"}`}>
                  <p>{m.text}</p>
                  <p className="text-xs opacity-70">
                    {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSendMessage()}
              placeholder="Nhập câu hỏi..."
              className="text-sm"
            />
            <Button onClick={handleSendMessage}>
              <Send size={16} />
            </Button>
          </div>
        </>
      )}
    </motion.div>
  )
}
