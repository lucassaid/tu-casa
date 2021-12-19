import ReactTyped from 'react-typed'

const strings = [
  'planos',
  'inmobiliaria',
  'terreno',
  'financiación',
  'constructor',
]

export default function WeGotYou() {
  return (
    <>
      <span className="text-2xl md:text-3xl">
        🤔&nbsp;
        <ReactTyped
          strings={strings}
          loop
          typeSpeed={15}
          backSpeed={20}
          backDelay={1000}
        />?
      </span>  
      <h3 className="mt-4 text-gray-800">
        <span className="text-amber-500">No te preocupes,</span> te asesoramos y acompañamos en todo el camino.
      </h3>
    </>
  )
}