import React, { useState, useEffect } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import { mentions } from "./utils";
import Image from "@material-tailwind/react/Image";

const SignatureSuggestions = ({ showModal, shouldShowModal, setSignee, addSignature }) => {


    const decorateSignatureList = () => mentions.map(person => {
        return (
            <div 
                className="flex items-center p-4 rouded-lg hover:bg-gray-100 cursor-pointer text-gray-700 text-sm border-l-2 border-[#00b8d1] mb-2 shadow-md" 
                onClick={() => handleSignee(person)} key={person.id}>
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

    const handleSignee = (signee) => {
        setSignee(signee);
        shouldShowModal(false);
        addSignature(signee);
    }

    return (
        <>
            <Modal active={showModal} toggler={showModal => shouldShowModal(!showModal)}>
                <ModalHeader toggler={() => shouldShowModal(false)}>
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
