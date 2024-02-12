import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close-menu.svg"

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src={close} alt="" className="w-5" />
        ) : (
          <img src={menu} alt="" className="w-5" />
        )}
      </button>
    </>
  )
}

export default Menu