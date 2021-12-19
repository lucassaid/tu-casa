import Image from "next/image"
import { blueprints } from "./blueprints.data"

function Blueprint({ title, size, price, image}) {

  return (
    <div
      className="bg-white shadow-xl rounded-lg h-full text-center"
    >
      <div className="h-8" />
      <h4 className="mb-1">
        {title}
      </h4>
      <p>{size}m²</p>
      <h4 className="text-blue-500 mb-3">
        ${price}
      </h4>
      <div className="relative h-72" style={{mixBlendMode: 'multiply'}}>
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt={`Tu casa - ${title}`}
        />
      </div>
    </div>
  )
}

export default function Blueprints() {
  return (
    <div className="flex relative items-stretch w-full gap-6 md:gap-10 snap-mandatory snap-x overflow-x-auto scroll-px-20 pb-10">
      {blueprints.map((model, i) => (
        <div
          key={i}
          className="w-[70vw] md:w-auto md:flex-1 snap-always snap-center shrink-0 first:pl-8 last:pr-8"
        >
          <Blueprint {...model} />
        </div>
      ))}
    </div>
  )
}