import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function GamesSection() {
    return (
        <section id="games" className="py-16 px-4 bg-white/50">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">人気のゲーム</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <Image
                                src="/placeholder.svg"
                                alt="カタンの開拓者たち"
                                height={200}
                                width={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>カタンの開拓者たち</CardTitle>
                            <div className="flex gap-2">
                                <Badge variant="secondary">戦略</Badge>
                                <Badge variant="secondary">3-4人</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">資源を集めて島を開拓する、戦略性の高いボードゲームです。</p>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                            <Image
                                src="/placeholder.svg"
                                alt="宝石の煌めき"
                                height={200}
                                width={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>宝石の煌めき</CardTitle>
                            <div className="flex gap-2">
                                <Badge variant="secondary">エンジン構築</Badge>
                                <Badge variant="secondary">2-4人</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">宝石商となって富と名声を築く、シンプルで奥深いゲームです。</p>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                            <Image
                                src="/placeholder.svg"
                                alt="アズール"
                                height={200}
                                width={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>アズール</CardTitle>
                            <div className="flex gap-2">
                                <Badge variant="secondary">パズル</Badge>
                                <Badge variant="secondary">2-4人</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">美しいタイルを使って宮殿の壁を装飾する芸術的なゲームです。</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}