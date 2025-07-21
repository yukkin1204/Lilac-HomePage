import Image from 'next/image'

export function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 bg-white/50">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Lilacについて</h3>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="/placeholder.svg"
                            alt="ボードゲームを楽しむメンバーたち"
                            height={400}
                            width={600}
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-2xl font-semibold text-gray-800">楽しさを共有する仲間たち</h4>
                        <p className="text-gray-600 leading-relaxed">
                            私たちのサークル「Lilac」は、2020年に設立されたボードゲーム愛好者の集まりです。
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-orange-100 rounded-lg">
                                <div className="text-2xl font-bold text-orange-600">30+</div>
                                <div className="text-sm text-gray-600">アクティブメンバー</div>
                            </div>
                            <div className="text-center p-4 bg-orange-100 rounded-lg">
                                <div className="text-2xl font-bold text-orange-600">100+</div>
                                <div className="text-sm text-gray-600">所有ゲーム数</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}