import { mdiPhone, mdiEmail } from '@mdi/js'
import Icon from '@mdi/react';
import Contact from './Contact'
import { contact } from '../data/contactInfo'

const Link = ({ prop, value, path }) => (
  <div>
    <a
      href={`${prop}:${value}`}
    >
      <Icon className="inline mr-2" size={1} path={path}/>
      {value}
    </a>
  </div>
)

const bottom = (
  <div className="bg-orange-500/50 py-8">
    <div className="container md:flex">
      <div className="md:w-6/12">
        <Link
          prop="tel"
          path={mdiPhone}
          value={contact.WHATSAPP}
        />
        <Link
          prop="mailto"
          path={mdiEmail}
          value={contact.EMAIL}
        />
      </div>
      <div className="md:w-6/12">
        <h4>Sobre nosotros</h4>
        <p>
          Somos un equipo de Uruguay que combina experiencia en inmobiliaria, construcción y asesoramiento. Nuestro objetivo es que más personas tengan su casa propia. Hacemos de este un objetivo alcanzable para todo el que se lo proponga.
        </p>
      </div>
    </div>
  </div>
)

const wpBar = (
  <div className="bg-[#075e54] py-7 pl-20 md:text-lg md:py-14 md:pl-36 text-[#dcf8c6] font-medium">
    Contactanos por WhatsApp!
  </div>
)

export default function Footer() {
  
  return (
    <footer
      className="bg-amber-500 text-white"
    >
      <div className="h-24 md:h-36"/>
      <div className="container">
        <h2 className="mb-12">
          Dá el primer paso hoy, contactanos!
        </h2>

        <div className="w-full max-w-md">
          <Contact />
        </div>
      </div>
      <div className="h-16 md:h-20"/>
      {bottom}
      {wpBar}
    </footer>
  )
}