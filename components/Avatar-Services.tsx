import Image from "next/image"
import MotionTransition from "./Transition-Component"

const AvatarServices = () => {
  return (
    <MotionTransition position="right" className="bottom-0 hidden left-0 md:inline-block md:absolute">
        <Image src="/services.png" width={300} height={300} className="w-[350px] h-full" alt="Avatar"/>
    </MotionTransition>
  )
}

export default AvatarServices