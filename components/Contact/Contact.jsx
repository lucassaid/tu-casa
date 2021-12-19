import Button from '../Button'

export default function Contact() {
  
  return (
    <div className="text-lg md:text-xl">
      <div className="mb-2">
        <label>Teléfono y/o email</label>
      </div>
      <input
        type="text"
        className="form-control border-2 border-white/70 focus:border-white focus:ring-1 ring-white bg-transparent w-full"
        maxLength={50}
      />
      <div className="h-6" />
      <div className="mb-2">
        <label>Notas</label>
      </div>
      <textarea
        rows="4"
        className="form-control border-2 border-white/70 focus:border-white focus:ring-1 ring-white bg-transparent w-full resize-none"
        maxLength={400}
      />
      <div className="h-6" />
      <div className="text-right">
        <Button
          className="border-2 border-white/70 hover:border-white text-white"
        >
          Enviar
        </Button>
      </div>
    </div>
  )
}