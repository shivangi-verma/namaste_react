import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus()
    const { loggedInUser } = useContext(UserContext)
    // subscribing to a store using the selector 
    const cartItems = useSelector((store) => (store.cart.items))


    return (
        <div className="flex justify-between header">
            <div className="w-24 px-4 py-2 logo-container">
                <Link to={"/"}>  <img src={LOGO_URL} alt="App Logo" className="logo" />  </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex px-4 mx-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4"><Link to={"/cart"}>Cart - ({cartItems.length} Items)</Link></li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header