import { Calendar, MapPin, Clock, JapaneseYen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ScheduleSection() {
    return (
        <section id="schedule" className="py-16 px-4">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">活動予定</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-screen-md mx-auto">
                    <Card className="border-purple-200">
                        <CardHeader>
                            <CardTitle className="flex items-center text-purple-400">
                                <Calendar className="mr-2 h-5 w-5" />
                                第99回ボードゲーム会
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="mr-2 h-4 w-4" />
                                    2025/8/3(日) 09:30 - 17:00
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    大阪府吹田市（詳細は参加希望者に連絡）
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <JapaneseYen className="mr-2 h-4 w-4" />
                                    200円
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-purple-200">
                        <CardHeader>
                            <CardTitle className="flex items-center text-purple-400">
                                <Calendar className="mr-2 h-5 w-5" />
                                第100回ボードゲーム会
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="mr-2 h-4 w-4" />
                                    2025/9/27(土) 13:00 - 21:30
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    大阪府吹田市（詳細は参加希望者に連絡）
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <JapaneseYen className="mr-2 h-4 w-4" />
                                    300円
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}