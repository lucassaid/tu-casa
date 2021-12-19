import { mdiPhone } from "@mdi/js"
import Icon from "@mdi/react"
import Image from "next/image"
import { contact } from "../../data/contactInfo"
import uy from '../../public/uruguay.png'
import Menu from "./Menu"

export default function TopBar({ children }) {

  const rightItems = (
    <>
      <div className="mr-3 md:mr-4 w-6 h-4 md:w-7 md:h-5 relative rounded-sm overflow-hidden shadow-md">
        <Image
          src={uy}
          layout="fill"
          alt="tu-casa-uruguay"
          className="filter brightness-110 "
        />
      </div>
      <a
        href={`tel:${contact.WHATSAPP}`}
        className="bg-slate-100 rounded px-1 py-0.5 text-sm md:text-base flex items-center gap-2"
      >
         {contact.WHATSAPP} <Icon path={mdiPhone} size={0.8}/> 
      </a>
    </>
  )

  return (
    <>
      <div className="flex items-center justify-end py-3 px-4 sm:px-6 md:px-8">
        {rightItems}
      </div>
      <nav className="flex items-center justify-end pt-3 pb-20 px-4 sm:px-6 md:px-8">
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