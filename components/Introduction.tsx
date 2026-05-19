"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"


const Introduction = () => {
    return (
        <div className="z-20 w-full bg-dark/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:grid-cols-2">
                <Image src="/home-4.png" priority width={800} height={800} alt="Profile pic" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo,
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                3000,
                                "puedes optimizarlo",
                                3000,
                                "puedes implementarlo",
                                3000,
                                "puedes desarrollarlo",
                                3000
                            ]} 
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            className="block font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                            Como desarrollador de frontend, wordpress y experto en Excel, me dedico a combinar diseño y funcionabilidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                            <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">Ver proyectos</Link>
                            <Link href="/contact" className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">Contacta conmigo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction