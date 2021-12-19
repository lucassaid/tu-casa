import { menuItems } from "../../data/menu";

export default function Menu() {
  
  return (
    <div className="flex gap-8 text-lg">
      {menuItems.map(item => (
        <a
          className="transition hover:underline decoration-2 decoration-wavy underline-offset-4 decoration-amber-400"
          key={item.url}
          href={item.url}
        >
          {item.title}
        </a>
      ))}
    </div>
  )
}