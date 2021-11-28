import { useSession } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Sidebar = () => {

    const [ session ] = useSession();

    return ( 
        <>
            <nav className="bg-gray-800 w-20  justify-between flex flex-col ">
                <div className="mt-10 mb-10">
                <div>
                    <ul>
                        <li className="mb-2">
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="library_books" size="2xl" />
                            </Button>
                        </li>
                        <li className="mb-2">
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="pie_chart" size="2xl" />
                            </Button>
                        </li>
                        <li className="mb-6">
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="groups" size="2xl" />
                            </Button>
                        </li>
                        <li>
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="view_agenda" size="2xl" />
                            </Button>
                        </li>
                        <li>
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="widgets" size="2xl" />
                            </Button>
                        </li>
                        <li>
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="monitor_heart" size="2xl" />
                            </Button>
                        </li>
                        <li>
                            <Button
                                color="gray"
                                buttonType="outline"
                                iconOnly={true}
                                ripple="dark"
                                className="h-20 w-20 border-0"
                            >
                                <Icon name="price_change" size="2xl" />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="mb-4">
                    <Button
                        color="gray"
                        buttonType="outline"
                        iconOnly={true}
                        ripple="dark"
                        className="h-20 w-20 border-0"
                    >
                        <Icon name="settings" size="2xl" />
                    </Button>
                </div>
            </nav>
        </>
     );
}
 
export default Sidebar;