import { motion } from 'framer-motion'

export default function Line(props) {
  return (
    <motion.div
      {...props}
      className={`w-full h-[3px] ${props.open ? 'bg-white' : 'bg-gray-800'}`}
    />
  )
}