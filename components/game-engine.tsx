"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Heart,
  Briefcase,
  DollarSign,
  Users,
  Activity,
  Zap,
  ArrowLeft,
  RotateCcw,
  BarChart3,
  TrendingUp,
  Download,
  User,
  Menu,
  X,
} from "lucide-react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

interface PlayerInfo {
  name: string
  studentId: string
}

interface GameState {
  age: number
  round: number
  stats: {
    FIN: number // Tài chính
    CAR: number // Sự nghiệp
    HAP: number // Hạnh phúc
    FAM: number // Gia đình
    HEA: number // Sức khỏe
    STR: number // Căng thẳng
    STA: number // Nền tảng
  }
  married: boolean
  hasChildren: boolean
  hasHouse: boolean
  rentingHouse: boolean
  gameOver: boolean
  ending: string | null
  currentEvent: string | null
}

interface Choice {
  id: string
  text: string
  description: string
  effects: Partial<GameState["stats"]>
  special?: "marry" | "children" | "house-rent" | "house-buy" | "startup"
}

const initialState: GameState = {
  age: 25,
  round: 1,
  stats: { FIN: 5, CAR: 5, HAP: 5, FAM: 5, HEA: 5, STR: 5, STA: 0 },
  married: false,
  hasChildren: false,
  hasHouse: false,
  rentingHouse: false,
  gameOver: false,
  ending: null,
  currentEvent: null,
}

const STAT_ICONS = {
  FIN: DollarSign,
  CAR: Briefcase,
  HAP: Heart,
  FAM: Users,
  HEA: Activity,
  STR: Zap,
}

const STAT_COLORS = {
  FIN: "text-[color:var(--color-game-primary)]",
  CAR: "text-[color:var(--color-game-secondary)]",
  HAP: "text-[color:var(--color-game-accent)]",
  FAM: "text-[color:var(--color-game-warning)]",
  HEA: "text-green-500",
  STR: "text-[color:var(--color-game-danger)]",
}

export function GameEngine() {
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo>({ name: "", studentId: "" })
  const [gameStarted, setGameStarted] = useState(false)
  const [gameState, setGameState] = useState<GameState>(initialState)
  const [currentChoices, setCurrentChoices] = useState<Choice[]>([])
  const [showStats, setShowStats] = useState(true)
  const [showCharts, setShowCharts] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [statHistory, setStatHistory] = useState<Array<GameState["stats"] & { age: number }>>([
    { ...initialState.stats, age: 25 },
  ])
  const [previewStats, setPreviewStats] = useState<GameState["stats"] | null>(null)

  useEffect(() => {
    if (gameStarted) {
      generateChoices()
    }
  }, [gameState.age, gameState.round, gameStarted])

  const startGame = () => {
    if (playerInfo.name.trim() && playerInfo.studentId.trim()) {
      setGameStarted(true)
    }
  }

  const exportToPDF = () => {
    // Create a simple HTML content for PDF
    const content = `
      <html>
        <head>
          <title>Kết quả game - ${playerInfo.name}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .player-info { background: #f5f5f5; padding: 15px; margin-bottom: 20px; }
            .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0; }
            .stat-item { background: #fff; padding: 10px; border: 1px solid #ddd; text-align: center; }
            .ending { background: #e8f5e9; padding: 15px; margin: 20px 0; text-align: center; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Ý Thức & Con Đường Cuộc Đời</h1>
            <h2>Kết quả game</h2>
          </div>
          
          <div class="player-info">
            <h3>Thông tin người chơi</h3>
            <p><strong>Họ tên:</strong> ${playerInfo.name}</p>
            <p><strong>Mã số sinh viên:</strong> ${playerInfo.studentId}</p>
            <p><strong>Ngày chơi:</strong> ${new Date().toLocaleDateString("vi-VN")}</p>
          </div>

          <div class="ending">
            ${gameState.ending}
          </div>

          <h3>Chỉ số cuối game (Tuổi ${gameState.age})</h3>
          <div class="stats">
            <div class="stat-item">
              <h4>Tài chính</h4>
              <p>${gameState.stats.FIN}/10</p>
            </div>
            <div class="stat-item">
              <h4>Sự nghiệp</h4>
              <p>${gameState.stats.CAR}/10</p>
            </div>
            <div class="stat-item">
              <h4>Hạnh phúc</h4>
              <p>${gameState.stats.HAP}/10</p>
            </div>
            <div class="stat-item">
              <h4>Gia đình</h4>
              <p>${gameState.stats.FAM}/10</p>
            </div>
            <div class="stat-item">
              <h4>Sức khỏe</h4>
              <p>${gameState.stats.HEA}/10</p>
            </div>
            <div class="stat-item">
              <h4>Căng thẳng</h4>
              <p>${gameState.stats.STR}/10</p>
            </div>
          </div>

          <h3>Tình trạng cuối game</h3>
          <ul>
            <li>Tình trạng hôn nhân: ${gameState.married ? "Đã kết hôn" : "Độc thân"}</li>
            <li>Con cái: ${gameState.hasChildren ? "Có con" : "Chưa có con"}</li>
            <li>Nhà ở: ${gameState.hasHouse ? "Có nhà riêng" : gameState.rentingHouse ? "Thuê nhà" : "Chưa có nhà"}</li>
          </ul>

          <div style="margin-top: 40px; text-align: center; color: #666;">
            <p>Game được tạo dựa trên triết lý Mác-Lênin về ý thức xã hội</p>
            <p>Tồn tại xã hội quyết định ý thức xã hội</p>
          </div>
        </body>
      </html>
    `

    // Create and download PDF
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(content)
      printWindow.document.close()
      printWindow.focus()
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen game-gradient flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-xl sm:text-2xl leading-tight">Ý Thức & Con Đường Cuộc Đời</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Nhập thông tin của bạn để bắt đầu hành trình mô phỏng cuộc sống
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm font-medium">
                Họ và tên
              </Label>
              <Input
                id="name"
                placeholder="Nhập họ tên của bạn"
                value={playerInfo.name}
                onChange={(e) => setPlayerInfo((prev) => ({ ...prev, name: e.target.value }))}
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="studentId" className="text-sm font-medium">
                Mã số sinh viên
              </Label>
              <Input
                id="studentId"
                placeholder="Nhập mã số sinh viên"
                value={playerInfo.studentId}
                onChange={(e) => setPlayerInfo((prev) => ({ ...prev, studentId: e.target.value }))}
                className="h-12 text-base"
              />
            </div>
            <Button
              onClick={startGame}
              className="w-full h-12 text-base font-medium"
              disabled={!playerInfo.name.trim() || !playerInfo.studentId.trim()}
            >
              <User className="h-5 w-5 mr-2" />
              Bắt đầu game
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const generateChoices = () => {
    const choices: Choice[] = []

    // Lựa chọn công việc & sức khỏe (luôn có)
    choices.push(
      {
        id: "work-hard",
        text: "Tăng ca làm việc",
        description: "Làm việc chăm chỉ để kiếm thêm tiền và thăng tiến",
        effects: { FIN: 2, CAR: 1, HEA: -2, STR: 2 },
      },
      {
        id: "work-normal",
        text: "Làm việc bình thường",
        description: "Cân bằng giữa công việc và cuộc sống",
        effects: { FIN: 1, CAR: 1 },
      },
      {
        id: "focus-health",
        text: "Chú trọng sức khỏe",
        description: "Dành thời gian tập thể dục và nghỉ ngơi",
        effects: { HEA: 2, HAP: 1, FIN: -1 },
      },
    )

    // Lựa chọn đặc biệt theo tuổi
    if (gameState.age === 27 && !gameState.hasHouse && !gameState.rentingHouse) {
      choices.push(
        {
          id: "rent-house",
          text: "Thuê nhà",
          description: "Thuê một căn hộ nhỏ, thoải mái hơn",
          effects: { HAP: 1 },
          special: "house-rent",
        },
        {
          id: "buy-house",
          text: "Mua nhà (vay nợ)",
          description: "Vay ngân hàng để mua nhà, áp lực tài chính",
          effects: { FIN: -3, FAM: 1, STR: 1 },
          special: "house-buy",
        },
      )
    } else {
      // Lựa chọn phát triển khác
      choices.push(
        {
          id: "career-focus",
          text: "Phát triển sự nghiệp",
          description: "Học thêm kỹ năng, tìm cơ hội thăng tiến",
          effects: { CAR: 2, FIN: 1, STR: 1 },
        },
        {
          id: "startup",
          text: "Khởi nghiệp",
          description: "Mạo hiểm với ý tưởng kinh doanh riêng",
          effects: { CAR: 2, STR: 1 },
          special: "startup",
        },
      )
    }

    // Lựa chọn cưới (nếu chưa cưới)
    if (!gameState.married) {
      choices.push({
        id: "marry",
        text: "Kết hôn",
        description: "Tìm được người phù hợp và quyết định cưới",
        effects: { FAM: 2, HAP: 1, FIN: -1 },
        special: "marry",
      })
    }

    // Lựa chọn có con (nếu đã cưới nhưng chưa có con)
    if (gameState.married && !gameState.hasChildren) {
      choices.push({
        id: "have-children",
        text: "Có con",
        description: "Quyết định sinh con và xây dựng gia đình",
        effects: { FIN: -2, FAM: 1, HAP: 2, STR: 1 },
        special: "children",
      })
    }

    setCurrentChoices(choices)
  }

  const makeChoice = (choice: Choice) => {
    setGameState((prev) => {
      const newStats = { ...prev.stats }

      // Áp dụng hiệu ứng của lựa chọn
      Object.entries(choice.effects).forEach(([stat, value]) => {
        newStats[stat as keyof typeof newStats] += value
        // Giới hạn stats từ 0-10
        newStats[stat as keyof typeof newStats] = Math.max(0, Math.min(10, newStats[stat as keyof typeof newStats]))
      })

      // Áp dụng hiệu ứng đặc biệt
      const newState = {
        ...prev,
        stats: newStats,
        married: choice.special === "marry" ? true : prev.married,
        hasChildren: choice.special === "children" ? true : prev.hasChildren,
        hasHouse: choice.special === "house-buy" ? true : prev.hasHouse,
        rentingHouse: choice.special === "house-rent" ? true : prev.rentingHouse,
      }

      // Xử lý khởi nghiệp (random)
      if (choice.special === "startup") {
        const success = Math.random() > 0.5
        newState.stats.FIN += success ? 2 : -2
        newState.currentEvent = success
          ? "Khởi nghiệp thành công! Bạn kiếm được nhiều tiền."
          : "Khởi nghiệp thất bại. Bạn mất một khoản tiền."
      }

      // Áp dụng hiệu ứng hàng vòng
      if (newState.rentingHouse) {
        newState.stats.FIN = Math.max(0, newState.stats.FIN - 1)
      }
      if (newState.hasChildren) {
        newState.stats.FIN = Math.max(0, newState.stats.FIN - 1)
        newState.stats.FAM = Math.min(10, newState.stats.FAM + 1)
      }
      if (newState.stats.STA > 0) {
        newState.stats.FIN = Math.min(10, newState.stats.FIN + 1)
      }

      // Sự kiện ngẫu nhiên (30%)
      if (Math.random() < 0.3) {
        const events = [
          { text: "Làm ăn thành công!", effect: { FIN: 3 } },
          { text: "Làm ăn thất bại.", effect: { FIN: -2 } },
          { text: "Ốm nhẹ, cần nghỉ ngơi.", effect: { HEA: -2, STR: 1 } },
          { text: "Người thân cần giúp đỡ.", effect: { FAM: 1, FIN: -1 } },
          { text: "Đi du lịch thư giãn.", effect: { HAP: 1, STR: -1 } },
        ]

        // Sự kiện hiếm (5% tai nạn, 2% trúng số)
        if (Math.random() < 0.05) {
          events.push({ text: "Tai nạn nhẹ!", effect: { HEA: -3, STR: 2 } })
        }
        if (Math.random() < 0.02) {
          events.push({ text: "Trúng số!", effect: { FIN: 5 } })
        }

        const randomEvent = events[Math.floor(Math.random() * events.length)]
        Object.entries(randomEvent.effect).forEach(([stat, value]) => {
          newState.stats[stat as keyof typeof newState.stats] += value
          newState.stats[stat as keyof typeof newState.stats] = Math.max(
            0,
            Math.min(10, newState.stats[stat as keyof typeof newState.stats]),
          )
        })
        newState.currentEvent = randomEvent.text
      }

      // Chuyển vòng tiếp theo
      const nextAge = prev.age + 2
      const nextRound = prev.round + 1

      if (nextAge > 41) {
        // Kết thúc game
        newState.gameOver = true
        newState.ending = calculateEnding(newState)
      } else {
        newState.age = nextAge
        newState.round = nextRound

        // Lão hóa tự nhiên ở tuổi 41
        if (nextAge === 41) {
          newState.stats.HEA = Math.max(0, newState.stats.HEA - 2)
        }
      }

      // Kiểm tra ending sớm
      if (newState.stats.STR >= 9) {
        newState.gameOver = true
        newState.ending = "🔥 Burnout - Cạn kiệt, gục ngã trước áp lực xã hội."
      } else if (newState.stats.FIN <= 0 && newState.hasChildren) {
        newState.gameOver = true
        newState.ending = "💸 Phá sản gia đình - Áp lực cơm áo gạo tiền đè nặng."
      }

      if (!newState.gameOver) {
        setStatHistory((prev) => [...prev, { ...newState.stats, age: newState.age }])
      }

      // Clear preview stats
      setPreviewStats(null)

      return newState
    })
  }

  const previewChoice = (choice: Choice) => {
    const preview = { ...gameState.stats }
    Object.entries(choice.effects).forEach(([stat, value]) => {
      preview[stat as keyof typeof preview] += value
      preview[stat as keyof typeof preview] = Math.max(0, Math.min(10, preview[stat as keyof typeof preview]))
    })
    setPreviewStats(preview)
  }

  const clearPreview = () => {
    setPreviewStats(null)
  }

  const calculateEnding = (state: GameState): string => {
    const { stats, married, hasChildren } = state

    // Override endings
    if (stats.STR >= 9) return "🔥 Burnout - Cạn kiệt, gục ngã trước áp lực xã hội."
    if (stats.FIN <= 0 && hasChildren) return "💸 Phá sản gia đình - Áp lực cơm áo gạo tiền đè nặng."

    // Core endings
    if (stats.FIN >= 8 && stats.FAM <= 4) return "🏦 Tỷ phú cô đơn - Ý thức cá nhân tách biệt khỏi ý thức xã hội."
    if (stats.FIN >= 7 && stats.FAM >= 7)
      return "🏡 Gia đình sung túc - Tồn tại vật chất đầy đủ, ý thức ổn định, hạnh phúc."
    if (stats.FAM >= 8 && stats.FIN <= 4)
      return "🏚 Túp liều tranh, hai trái tim vàng - Gia đình hạnh phúc nhưng kinh tế thiếu thốn."
    if (stats.CAR >= 8 && stats.HAP <= 4) return "🚀 Cỗ máy công việc - Vật chất & sự nghiệp lấn át đời sống tinh thần."
    if (stats.HEA >= 8 && stats.STR <= 5) return "🧘 Sống khỏe sống lâu - Chú trọng sức khỏe, sống an yên."
    if (!married && stats.HAP >= 7) return "🎵 Độc thân tự tại - Không lập gia đình nhưng vẫn hạnh phúc."

    return "📜 Một đời bình thường - Cuộc sống êm đềm, không có gì đặc biệt."
  }

  const resetGame = () => {
    setGameState(initialState)
    setCurrentChoices([])
    setStatHistory([{ ...initialState.stats, age: 25 }])
    setPreviewStats(null)
    setGameStarted(false)
    setPlayerInfo({ name: "", studentId: "" })
  }

  const StatBar = ({
    stat,
    value,
    label,
    previewValue,
  }: {
    stat: keyof typeof STAT_ICONS
    value: number
    label: string
    previewValue?: number
  }) => {
    const Icon = STAT_ICONS[stat]
    const colorClass = STAT_COLORS[stat]
    const displayValue = previewValue !== undefined ? previewValue : value
    const hasChange = previewValue !== undefined && previewValue !== value

    return (
      <div className={`space-y-2 ${hasChange ? "stat-change-animation" : ""}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${colorClass}`} />
            <span className="text-sm font-medium">{label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">{displayValue}/10</span>
            {hasChange && (
              <span className={`text-xs ${previewValue! > value ? "text-green-600" : "text-red-600"}`}>
                ({previewValue! > value ? "+" : ""}
                {previewValue! - value})
              </span>
            )}
          </div>
        </div>
        <div className="relative">
          <Progress value={value * 10} className="h-2 stat-bar" />
          {hasChange && <Progress value={displayValue * 10} className="h-2 stat-bar absolute top-0 opacity-60" />}
        </div>
      </div>
    )
  }

  const StatsRadarChart = () => {
    const chartData = [
      { stat: "Tài chính", value: gameState.stats.FIN, fullMark: 10 },
      { stat: "Sự nghiệp", value: gameState.stats.CAR, fullMark: 10 },
      { stat: "Hạnh phúc", value: gameState.stats.HAP, fullMark: 10 },
      { stat: "Gia đình", value: gameState.stats.FAM, fullMark: 10 },
      { stat: "Sức khỏe", value: gameState.stats.HEA, fullMark: 10 },
      { stat: "Căng thẳng", value: 10 - gameState.stats.STR, fullMark: 10 }, // Reverse stress for better visualization
    ]

    return (
      <div className="h-64 sm:h-80 chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" className="text-xs" />
            <PolarRadiusAxis angle={90} domain={[0, 10]} className="text-xs" />
            <Radar
              name="Chỉ số hiện tại"
              dataKey="value"
              stroke="var(--color-game-primary)"
              fill="var(--color-game-primary)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  const StatsProgressChart = () => {
    const chartData = statHistory.map((entry) => ({
      age: `${entry.age} tuổi`,
      "Tài chính": entry.FIN,
      "Sự nghiệp": entry.CAR,
      "Hạnh phúc": entry.HAP,
      "Gia đình": entry.FAM,
      "Sức khỏe": entry.HEA,
      "Căng thẳng": entry.STR,
    }))

    return (
      <div className="h-64 sm:h-80 chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" className="text-xs" />
            <YAxis domain={[0, 10]} className="text-xs" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Tài chính" fill="var(--color-game-primary)" />
            <Bar dataKey="Sự nghiệp" fill="var(--color-game-secondary)" />
            <Bar dataKey="Hạnh phúc" fill="var(--color-game-accent)" />
            <Bar dataKey="Gia đình" fill="var(--color-game-warning)" />
            <Bar dataKey="Sức khỏe" fill="var(--color-game-success)" />
            <Bar dataKey="Căng thẳng" fill="var(--color-game-danger)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (gameState.gameOver) {
    return (
      <div className="min-h-screen game-gradient p-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="w-full">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl sm:text-3xl leading-tight">Kết thúc cuộc hành trình</CardTitle>
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="text-sm text-muted-foreground">
                  Người chơi: <strong className="text-foreground">{playerInfo.name}</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  MSSV: <strong className="text-foreground">{playerInfo.studentId}</strong>
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Tuổi {gameState.age}
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {gameState.married ? "Đã kết hôn" : "Độc thân"}
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {gameState.hasChildren ? "Có con" : "Chưa có con"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertDescription className="text-base sm:text-lg text-center font-semibold leading-relaxed">
                  {gameState.ending}
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BarChart3 className="h-5 w-5" />
                      Chỉ số cuối game
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 sm:h-80">
                      <StatsRadarChart />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="h-5 w-5" />
                      Tiến trình cuộc đời
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 sm:h-80">
                      <StatsProgressChart />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <StatBar stat="FIN" value={gameState.stats.FIN} label="Tài chính" />
                <StatBar stat="CAR" value={gameState.stats.CAR} label="Sự nghiệp" />
                <StatBar stat="HAP" value={gameState.stats.HAP} label="Hạnh phúc" />
                <StatBar stat="FAM" value={gameState.stats.FAM} label="Gia đình" />
                <StatBar stat="HEA" value={gameState.stats.HEA} label="Sức khỏe" />
                <StatBar stat="STR" value={gameState.stats.STR} label="Căng thẳng" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={exportToPDF}
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12 bg-transparent"
                >
                  <Download className="h-4 w-4" />
                  Xuất PDF
                </Button>
                <Button onClick={resetGame} className="flex items-center justify-center gap-2 h-12">
                  <RotateCcw className="h-4 w-4" />
                  Chơi lại
                </Button>
                <Button variant="outline" onClick={() => window.location.reload()} className="h-12">
                  Về trang chủ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen game-gradient">
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 h-10 sm:h-auto"
            size="sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Về trang chủ</span>
          </Button>

          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold">Tuổi {gameState.age}</h1>
            <p className="text-sm text-muted-foreground">Vòng {gameState.round}/8</p>
            <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
              {playerInfo.name} - {playerInfo.studentId}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex gap-2">
              <Button variant="outline" onClick={() => setShowStats(!showStats)} size="sm">
                {showStats ? "Ẩn" : "Hiện"} chỉ số
              </Button>
              <Button variant="outline" onClick={() => setShowCharts(!showCharts)} size="sm">
                <BarChart3 className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="sm:hidden"
              size="sm"
            >
              {showMobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {showMobileMenu && (
          <Card className="mb-4 sm:hidden">
            <CardContent className="p-4">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                  {playerInfo.name} - {playerInfo.studentId}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowStats(!showStats)
                      setShowMobileMenu(false)
                    }}
                    className="flex-1"
                    size="sm"
                  >
                    {showStats ? "Ẩn" : "Hiện"} chỉ số
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowCharts(!showCharts)
                      setShowMobileMenu(false)
                    }}
                    className="flex-1"
                    size="sm"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Biểu đồ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {showCharts && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="h-5 w-5" />
                  Biểu đồ radar
                </CardTitle>
                <CardDescription className="text-sm">Tổng quan về tình trạng cuộc sống</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-80">
                  <StatsRadarChart />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5" />
                  Tiến trình theo thời gian
                </CardTitle>
                <CardDescription className="text-sm">Sự thay đổi các chỉ số qua từng giai đoạn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-80">
                  <StatsProgressChart />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {showStats && (
          <Card className="mb-6 sm:mb-8 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-lg">Chỉ số hiện tại</span>
                <div className="flex flex-wrap gap-2">
                  {gameState.married && (
                    <Badge variant="secondary" className="text-xs">
                      Đã cưới
                    </Badge>
                  )}
                  {gameState.hasChildren && (
                    <Badge variant="secondary" className="text-xs">
                      Có con
                    </Badge>
                  )}
                  {gameState.hasHouse && (
                    <Badge variant="secondary" className="text-xs">
                      Có nhà
                    </Badge>
                  )}
                  {gameState.rentingHouse && (
                    <Badge variant="outline" className="text-xs">
                      Thuê nhà
                    </Badge>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
                <StatBar stat="FIN" value={gameState.stats.FIN} label="Tài chính" previewValue={previewStats?.FIN} />
                <StatBar stat="CAR" value={gameState.stats.CAR} label="Sự nghiệp" previewValue={previewStats?.CAR} />
                <StatBar stat="HAP" value={gameState.stats.HAP} label="Hạnh phúc" previewValue={previewStats?.HAP} />
                <StatBar stat="FAM" value={gameState.stats.FAM} label="Gia đình" previewValue={previewStats?.FAM} />
                <StatBar stat="HEA" value={gameState.stats.HEA} label="Sức khỏe" previewValue={previewStats?.HEA} />
                <StatBar stat="STR" value={gameState.stats.STR} label="Căng thẳng" previewValue={previewStats?.STR} />
              </div>
            </CardContent>
          </Card>
        )}

        {gameState.currentEvent && (
          <Alert className="mb-6 sm:mb-8">
            <AlertDescription className="text-center font-medium text-sm sm:text-base leading-relaxed">
              {gameState.currentEvent}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {currentChoices.map((choice) => (
            <Card
              key={choice.id}
              className="choice-card choice-preview cursor-pointer hover:border-primary transition-all duration-200 active:scale-95"
              onClick={() => makeChoice(choice)}
              onMouseEnter={() => previewChoice(choice)}
              onMouseLeave={clearPreview}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg leading-tight">{choice.text}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{choice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(choice.effects).map(([stat, value]) => {
                    const Icon = STAT_ICONS[stat as keyof typeof STAT_ICONS]
                    const colorClass = STAT_COLORS[stat as keyof typeof STAT_COLORS]
                    return (
                      <div key={stat} className="flex items-center gap-2 text-sm">
                        <Icon className={`h-4 w-4 ${colorClass} flex-shrink-0`} />
                        <span className="min-w-0 flex-1">{stat}:</span>
                        <span className={`font-medium ${value > 0 ? "text-green-600" : "text-red-600"}`}>
                          {value > 0 ? "+" : ""}
                          {value}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Tiến độ game</span>
            <span>{gameState.round}/8 vòng</span>
          </div>
          <Progress value={(gameState.round / 8) * 100} className="h-2 sm:h-3" />
        </div>
      </div>
    </div>
  )
}
