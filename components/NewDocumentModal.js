import Modal from '@material-tailwind/react/Modal';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from "@material-tailwind/react/Button";

const NewDocumentModal = ({showModal, input, createDocument, setInput, setShowModal}) => {
    return ( 
        <Modal
          size="sm"
          active={showModal}
          toggler={() => setShowModal(false)}
        >
          <ModalBody>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="outline-none w-full"
              placeholder="Enter the name of document..."
              onKeyDown={(e) => e.key === "Enter" && createDocument()}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="blue"
              buttonType="link"
              onClick={(e) => setShowModal(false)}
              ripple="dark"
            >
              Cancel
            </Button>
            <Button
              color="blue"
              onClick={createDocument}
              ripple="light"
            >
              Create
            </Button>
          </ModalFooter>
        </Modal>
     );
}
 
export default NewDocumentModal;