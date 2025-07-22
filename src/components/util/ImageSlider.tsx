"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const SLIDE_COUNT = 4

export function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // 自動スライド機能
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
        // 5秒後に自動再生を再開
        setTimeout(() => setIsAutoPlaying(true), 5000)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 5000)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 5000)
    }

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            {/* メインスライダー */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                        <div key={index} className="min-w-full relative">
                            <Image
                                src={`/images/スライド${index}.jpeg`}
                                alt={`ボードゲームの様子${index + 1}`}
                                height={400}
                                width={600}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h3 className="text-8xl font-bold text-violet-200 text-center px-4 drop-shadow-lg">
                        The Best Boardgame Moment
                    </h3>
                </div>

                {/* ナビゲーションボタン */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    onClick={goToPrevious}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    onClick={goToNext}
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>

            {/* インジケーター */}
            <div className="flex justify-center space-x-2 mt-4">
                {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-orange-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`スライド ${index + 1} に移動`}
                    />
                ))}
            </div>
        </div>
    )
}
