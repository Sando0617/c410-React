import { Link } from "react-router-dom";

const BasicMenu = () => {
    return (
        <nav id='navbar' className=" flex bg-blue-300">
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white font-bold">
                    <li className="pr-6 text-2xl list-none">
                        <Link to={'/'} className="text-white no-underline">Main</Link>
                    </li>
                    <li className="pr-6 text-2xl list-none">
                        <Link to={'/about'} className="text-white no-underline">About</Link>
                    </li>
                    <li className="pr-6 text-2xl list-none">
                        <Link to={'/todo/'} className="text-white no-underline">Todo</Link>
                    </li>
                </ul>
            </div>

            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                <div className="text-white text-sm m-1 rounded">
                    Login
                </div>
            </div>
        </nav>
    )
}

export default BasicMenu;