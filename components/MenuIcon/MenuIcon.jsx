import Line from './Line'

export default function MenuIcon({ open }) {

  return (
    <div
      className="flex flex-col justify-between cursor-pointer w-7 h-6 tap-highlight-transparent"
    >
      <Line
        className="origin-left"
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 11 : 0
        }}
        open={open}
      />
      <Line
        animate={{
          scaleX: open ? 0 : 1,
        }}
        transition={{ type: 'spring', duration: 0.4 }}
        open={open}
      />
      <Line
        className="origin-left"
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -11 : 0
        }}
        open={open}
      />
    </div>
  )
}