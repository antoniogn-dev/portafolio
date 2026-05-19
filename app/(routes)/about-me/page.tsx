import Avatar from "@/components/Avatar"
import ContainerPage from "@/components/Container"
import CounterServices from "@/components/Counter-services"
import TimeLine from "@/components/Time-Line"
import TransitionPage from "@/components/Transition-Page"

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi{" "}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices />
                <TimeLine/>
            </ContainerPage>
        </>
    )
}

export default PageAboutMe