"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GameEngine } from "@/components/game-engine"
import { Heart, Briefcase, DollarSign, Users, Activity, Zap } from "lucide-react"

export default function HomePage() {
  const [gameStarted, setGameStarted] = useState(false)

  if (gameStarted) {
    return <GameEngine />
  }

  return (
    <div className="min-h-screen game-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4 bg-gradient-to-r from-[color:var(--color-game-primary)] to-[color:var(--color-game-secondary)] bg-clip-text text-transparent">
            Ý Thức & Con Đường Cuộc Đời
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Trải nghiệm cuộc sống từ 25 đến 41 tuổi. Mỗi quyết định sẽ định hình tương lai của bạn.
          </p>
        </header>

        {/* Game Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:border-[color:var(--color-game-primary)] transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-[color:var(--color-game-primary)]" />
                Thể loại
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Mô phỏng - Lựa chọn tình huống - Nhập vai</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[color:var(--color-game-secondary)] transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[color:var(--color-game-secondary)]" />
                Thời lượng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">5-6 phút (8 vòng chơi)</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[color:var(--color-game-accent)] transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[color:var(--color-game-accent)]" />
                Chủ đề
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Ý thức xã hội & vấn đề hôn nhân của giới trẻ</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Overview */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Các chỉ số trong game</CardTitle>
            <CardDescription className="text-center">
              Mỗi quyết định sẽ ảnh hưởng đến 6 chỉ số chính của cuộc sống bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <DollarSign className="h-8 w-8 text-[color:var(--color-game-primary)]" />
                <div>
                  <h3 className="font-semibold">Tài chính (FIN)</h3>
                  <p className="text-sm text-muted-foreground">Tiền bạc, nhà cửa, chi tiêu</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Briefcase className="h-8 w-8 text-[color:var(--color-game-secondary)]" />
                <div>
                  <h3 className="font-semibold">Sự nghiệp (CAR)</h3>
                  <p className="text-sm text-muted-foreground">Thăng tiến, học hành, công việc</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Heart className="h-8 w-8 text-[color:var(--color-game-accent)]" />
                <div>
                  <h3 className="font-semibold">Hạnh phúc (HAP)</h3>
                  <p className="text-sm text-muted-foreground">Sự thoải mái, vui vẻ cá nhân</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Users className="h-8 w-8 text-[color:var(--color-game-warning)]" />
                <div>
                  <h3 className="font-semibold">Gia đình (FAM)</h3>
                  <p className="text-sm text-muted-foreground">Gắn kết vợ/chồng, con cái</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Activity className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-semibold">Sức khỏe (HEA)</h3>
                  <p className="text-sm text-muted-foreground">Thể lực, tinh thần</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Zap className="h-8 w-8 text-[color:var(--color-game-danger)]" />
                <div>
                  <h3 className="font-semibold">Căng thẳng (STR)</h3>
                  <p className="text-sm text-muted-foreground">Áp lực cuộc sống (cao là xấu)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-12 bg-gradient-to-r from-card/80 to-accent/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Ý nghĩa triết học</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-sm">
                Mác - Lênin
              </Badge>
              <p className="text-muted-foreground italic">"Tồn tại xã hội quyết định ý thức xã hội"</p>
            </div>
            <Separator />
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-4 rounded-lg bg-background/50">
                <h4 className="font-semibold mb-2">Mâu thuẫn</h4>
                <p className="text-muted-foreground">Giữa kinh tế - tình cảm, sự nghiệp - sức khỏe</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <h4 className="font-semibold mb-2">Biện chứng</h4>
                <p className="text-muted-foreground">Mỗi lựa chọn tăng cái này nhưng giảm cái kia</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <h4 className="font-semibold mb-2">Quy luật</h4>
                <p className="text-muted-foreground">Lượng - chất: từ độc thân → cưới → có con</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Start Game */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-[color:var(--color-game-primary)] hover:bg-[color:var(--color-game-primary)]/90"
            onClick={() => setGameStarted(true)}
          >
            Bắt đầu cuộc hành trình
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Bạn sẽ bắt đầu ở tuổi 25, vừa ra trường và chuẩn bị bước vào đời
          </p>
        </div>
      </div>
    </div>
  )
}
