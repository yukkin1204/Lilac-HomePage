import { ImageSlider } from "@/components/util/ImageSlider"

export function TopSection() {
    return (
        <section className="px-4 bg-white/80">
            <div className="relative">
                <ImageSlider />
            </div>
        </section>
    )
}