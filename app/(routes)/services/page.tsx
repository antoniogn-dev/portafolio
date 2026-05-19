import AvatarServices from "@/components/Avatar-Services"
import CircleImage from "@/components/Circle-Image"
import TransitionPage from "@/components/Transition-Page"

const PageServices = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-112.5">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis{" "}
            <span className="font-bold text-secondary">servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando tecnologias como HTML, CSS, JavaScript y Wordpress, diseño de iterfaces de la identidad de marca de mis clientes y mejorar su presencia en linea, tambien me especializo en el manejo de Excel para la generacion de Dashboard, Tablas Dinamicas y Macros.</p>

          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
        </div>
        
        {/* slider */}
        <div className="">

        </div>
      </div>
    </>
  )
}

export default PageServices