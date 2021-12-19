import Button from "./Button";

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

        <div className="w-full max-w-md text-lg md:text-xl">
          <div className="mb-2">
            <label>Teléfono y/o email</label>
          </div>
          <input
            type="text"
            className="form-control bg-white w-full text-gray-800"
          />
          <div className="h-6" />
          <div className="mb-2">
            <label>Notas</label>
          </div>
          <textarea
            rows="4"
            className="form-control bg-white w-full text-gray-800"
          />
          <div className="h-6" />
          <Button
            className="bg-orange-500/50 text-white w-full"
          >
            Enviar
          </Button>
        </div>
      </div>
      <div className="h-16 md:h-20"/>
      <div className="bg-orange-500/50 py-8">
        <div className="container">
          mas data
        </div>
      </div>
    </footer>
  )
}