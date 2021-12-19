import Image from "next/image"
import home from '../../public/6946.jpg'

const homeImage = (
  <div
    className="md:w-5/12 flex-grow"
  >
    <Image src={home} alt="tu-casa-home" />
  </div>
)

export default function Header() {
  return (
    <header className="text-center md:text-left relative">
      <div className="container z-10 relative md:flex flex-row-reverse gap-8 items-center">
        {homeImage}
        <div className="md:w-7/12">
          <h2 className="mb-3 mt-5 md:mt-0">
            Tener tu <span className="text-lime-500">propia casa</span> es posible
          </h2>
          <h4 className="text-gray-700">
            No evapores el dinero en alquiler, invertilo en <u className="decoration-sky-500 decoration-wavy underline-offset-8">tu hogar.</u>
          </h4>
        </div>
      </div>
    </header>
  )
}