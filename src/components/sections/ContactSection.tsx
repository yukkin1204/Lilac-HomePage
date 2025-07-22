import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
    return (
        <section id="contact" className="py-16 px-4">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">お問い合わせ・参加申込</h3>
                <div className="max-w-2xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">新メンバー募集中！ お気軽にお問い合わせください。</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-400 w-64 mx-auto cursor-pointer">
                                    Googleフォーム
                                </Button>
                                <Button size="lg" className="hover:bg-gray-600 w-64 cursor-pointer mx-auto">
                                    X（旧Twitter）のDM
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}