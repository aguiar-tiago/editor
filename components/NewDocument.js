import { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

const NewDocument = ({session, setShowModal}) => {
    const comingSoonRef = useRef();
    return ( 
        <section className="bg-[#F8F9FA] pb-10 px-10">
            <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between py-6">
                <h2 className="text-gray-700 text-3xl">Hi {session.user.name},</h2>
                <Button
                    color="gray"
                    buttonType="outline"
                    iconOnly={true}
                    ripple="dark"
                    className="h-20 w-20 border-0"
                >
                    <Icon name="more_vert" size="3xl" />
                </Button>
            </div>

            <div className="flex">
                <div>
                    <div onClick={() => setShowModal(true)} className=" flex mr-5 mx-0 justify-center align-middle relative h-52 w-40 border-2 cursor-pointer items-center hover:border-[#00b8d1]">
                        <Icon
                            style={{color: '#00b8d1'}}
                            name="add_circle" 
                            size="6xl" />
                    </div>
                    <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Start Blank</p>
                </div>

                <div>
                    <div
                        ref={comingSoonRef}
                        className="
                            flex 
                            mr-5 
                            justify-center 
                            align-middle 
                            relative 
                            h-52 
                            w-40 
                            border-2 
                            cursor-pointer 
                            items-center 
                            hover:border-[#00b8d1]">
                        <Icon
                            style={{color: '#00b8d1'}}
                            name="color_lens" 
                            size="6xl" />
                    </div>
                    <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Use a Theme</p>
                </div>
                <Tooltips placement="top" ref={comingSoonRef}>
                    <TooltipsContent>Coming soon</TooltipsContent>
                </Tooltips>
            </div>

            </div>
        </section>
     );
}
 
export default NewDocument;