import React, { useState, useEffect } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { mentions } from "./utils";
import Image from "@material-tailwind/react/Image";

const SignatureSuggestions = ({ shouldShowModal }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(shouldShowModal !== showModal) {
            setShowModal(!showModal)
        }

    }, [shouldShowModal]);

    const decorateSignatureList = () => mentions.map((person, index) => {
            return (
                <div className="flex items-center p-4 rouded-lg hover:bg-gray-100 cursor-pointer text-gray-700 text-sm border-l-2 border-[#00b8d1] mb-2 shadow-md">
                    <Image 
                        src={person.avatar}
                        rounded={true}
                        raised={false}
                        alt="Rounded Image"
                        className="w-10"
                    />
                    <p className="flex-grow pl-5">
                        {person.name}
                    </p>
                </div>
            )
        })

    return (
        <>
            <Modal active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Choose a Signee
                </ModalHeader>
                <ModalBody>
                    {decorateSignatureList()}
                </ModalBody>
            </Modal>
        </>
     );
}
 
export default SignatureSuggestions;
