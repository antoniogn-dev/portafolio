import AvatarPortfolio from "@/components/Avatar-Portfolio"
import CircleImage from "@/components/Circle-Image"
import PortfolioBox from "@/components/Portfolio-Box"
import TransitionPage from "@/components/Transition-Page"
import { dataPortfolio } from "@/data"

const PortfolioPage = () => {
    return (
        <>
            <TransitionPage />

            <AvatarPortfolio />
            <CircleImage />

            <div className="flex flex-col justify-center h-full mt-40">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="text-secondary font-bold">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data}/>

                    ))}
                </div>
            </div>

        </>
    )
}

export default PortfolioPage