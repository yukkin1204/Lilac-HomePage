import Image from 'next/image'

export function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                src="/images/Lilacロゴ.png"
                                alt="Lilacロゴ"
                                height={60}
                                width={60}
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">ボードゲームコミュニティ Lilac</h1>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">
                            Lilacについて
                        </a>
                        <a href="#schedule" className="text-gray-600 hover:text-orange-600 transition-colors">
                            活動予定
                        </a>
                        <a href="#games" className="text-gray-600 hover:text-orange-600 transition-colors">
                            ゲーム紹介
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                            お問い合わせ
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}