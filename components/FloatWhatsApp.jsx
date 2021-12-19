import { mdiWhatsapp } from '@mdi/js'
import Icon from '@mdi/react';

export default function FloatWhatsApp() {

  return (
    <a
      className="fixed bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 md:bottom-10 md:left-10 rounded-full bg-[#25d366] text-white flex items-center justify-center"
      href="https://wa.me/+543413608384"
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="w-8 md:w-10 h-8 md:h-10" path={mdiWhatsapp}/>
    </a>
  )
}