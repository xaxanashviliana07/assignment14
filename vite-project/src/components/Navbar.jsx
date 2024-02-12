import { useState } from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  const [links, setLinks] = useState(navbar)

  return (
    <>
      <ul className="flex flex-col bg-white rounded-lg shadow-lg absolute w-11/12 left-4 mt-5 p-5 md:bg-transparent md:shadow-none md:flex-row md:w-auto md:relative md:left-auto md:mt-0 md:p-0">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className="cursor-pointer text-black my-2 md:text-white md:mx-5 md:my-0"
          >
            {title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar