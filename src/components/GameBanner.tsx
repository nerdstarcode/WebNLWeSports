interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsCount: number;
    bannerNumber: number;
}

export function GameBanner(props: GameBannerProps){
    return(
        <a href="#" className={`relative rounded-lg overflow-hidden keen-slider__slide number-slide${props.bannerNumber}`}>
            <img src={props.bannerUrl} alt="" />
            <div className={`w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 `}>
                <strong className="font-bold text-white block">{props.title}</strong>
                <span className="text-zinc-300 text-sm block mt-1">{props.adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}