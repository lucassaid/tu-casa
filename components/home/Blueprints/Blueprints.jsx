import Image from "next/image"
import { blueprints } from "./blueprints.data"

function Blueprint({ title, size, price, image}) {

  return (
    <div
      className="border rounded-lg h-full text-center"
    >
      <div className="h-8" />
      <h4 className="mb-1">
        {title}
      </h4>
      <p>{size}m²</p>
      <h4 className="text-blue-500">
        ${price}
      </h4>
      <div>
        <img
          src={image}
          objectFit="contain"
          style={{mixBlendMode: 'multiply'}}
        />
      </div>
    </div>
  )
}

export default function Blueprints() {
  return (
    <div className="flex relative items-stretch w-full gap-6 snap-x overflow-x-auto scroll-px-20">
      {blueprints.map((model, i) => (
        <div
          key={i}
          className="w-[70vw] md:w-auto md:flex-1 snap-center shrink-0 first:pl-8 last:pr-8"
        >
          <Blueprint {...model} />
        </div>
      ))}
    </div>
  )
}