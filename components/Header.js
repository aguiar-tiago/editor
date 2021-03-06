import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut } from "next-auth/client";

const Header = ({session}) => {

    console.log(session?.user?.image)
    return ( 
        <header className="flex items-center mx-auto sticky top-0 z-50 bg-white shadow-md">
            <div className="bg-gray-800 w-20 align-middle h-20 p-2">
                <img
                    onClick={signOut}
                    loading="lazy"
                    className="cursor-pointer h-12 w-12 rounded-full ml-2"
                    src={session?.user?.image}
                    alt="profile"
                />
            </div>

            <div className=" mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="hidden md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl" />
            </Button>
        </header>
     );
}
 
export default Header;