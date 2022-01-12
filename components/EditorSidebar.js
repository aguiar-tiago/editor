import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const EditorSidebar = ({addSignature}) => {
    return ( 
        <>
            <nav className="bg-gray-800 w-20 justify-between flex flex-col fixed right-0 top-[118px]">
                <div className="mt-10 mb-10">
                    <div>
                        <ul>
                            <li className="mb-2">
                                <Button
                                    onMouseDown={addSignature}
                                    color="gray"
                                    buttonType="outline"
                                    iconOnly={true}
                                    ripple="dark"
                                    rounded={false}
                                    className="h-20 w-20 border-0"
                                >
                                <Icon 
                                        name="drive_file_rename_outline"
                                        size="xl"
                                    />
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
                                    <Icon name="pie_chart" size="xl" />
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
                                    <Icon name="groups" size="xl" />
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
                                    <Icon name="view_agenda" size="xl" />
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
                                    <Icon name="widgets" size="xl" />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default EditorSidebar;