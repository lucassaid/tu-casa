import Image from "next/image"
import uy from '../../public/uruguay.png'
import Menu from "./Menu"

export default function TopBar({ children }) {

  const rightItems = (
    <>
      <div className="mr-3 md:mr-4 w-6 h-4 md:w-7 md:h-5 relative rounded overflow-hidden">
        <Image
          src={uy}
          layout="fill"
          alt="tu-casa-uruguay"
        />
      </div>
      <a
        href="tel:+543413608384"
        className="bg-slate-200 rounded px-1 py-0.5 text-sm md:text-base"
      >
        +54-341-360-8384 📞
      </a>
    </>
  )

  return (
    <>
      <div className="py-3 flex items-center justify-end px-4">
        {rightItems}
      </div>
      <nav className="flex items-center justify-end px-4 py-6 lg:px-8">
        <h4 className="mr-auto">
          TU CASA
        </h4>
        <div
          className="hidden md:block"
        >
          <Menu/>
        </div>
        {children}
      </nav>
    </>
  )
}