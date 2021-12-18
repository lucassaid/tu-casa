import Image from "next/image"
import uy from '../public/uruguay.png'

export default function TopBar() {

  const rightItems = (
    <>
      <div className="mr-5 w-9 h-6 relative rounded overflow-hidden">
        <Image
          src={uy}
          layout="fill"
        />
      </div>
      <a
        href="tel:+543413608384"
        className="bg-slate-100 rounded px-2 py-1"
      >
        +54-341-360-8384 📞
      </a>
    </>
  )

  return (
    <nav className="flex items-center justify-end px-4 py-6 lg:px-8">
      <h4 className="mr-auto">
        TU CASA
      </h4>
      {rightItems}
    </nav>
  )
}