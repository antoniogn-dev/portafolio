import CoverParticles from "@/components/cover-particles"
import Introduction from "@/components/Introduction"
import TransitionPage from "@/components/Transition-Page"

const HomePage = () => {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen h-full bg-no-repeat">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  )
}

export default HomePage