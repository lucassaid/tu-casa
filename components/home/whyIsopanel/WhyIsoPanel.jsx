import { whyIsoPanel } from './whyIsopanel.data'

export default function WhyIsoPanel({}) {
  
  return (
    <div className="flex flex-wrap">
      {whyIsoPanel.map(reason => (
        <div
          key={reason.title}
          className="w-full md:w-6/12 text-center my-8 px-10"
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl mb-3">{reason.icon}</div>
          <h3 className="mb-3">{reason.title}</h3>
          <p>{reason.description}</p>
        </div>
      ))}
    </div>
  )
}