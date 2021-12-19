import { menuItems } from "../../data/menu";

export default function Menu() {
  
  return (
    <div className="flex gap-6">
      {menuItems.map(item => (
        <a
          key={item.url}
          href={item.url}
        >
          {item.title}
        </a>
      ))}
    </div>
  )
}