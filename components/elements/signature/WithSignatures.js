import React, { useState, useRef } from 'react';
import { EditorState, AtomicBlockUtils } from "draft-js";
import SignatureSuggestions from './elements/signature/SignatureSuggestions';
import { Signature } from './elements/signature/Signature';

const WithSignatures = EditorComponent = ({...props}) => {
    const [open, setOpen] = useState(false);
    const [signee, setSignee] = useState();
    const editorRef = useRef(null);

    const mediaBlockRenderer = (block) => {
        if(block.getType() === 'atomic') {
          return {
            component: Signature,
            editable: false
          }
        }
        return null;
    }

    const addSignature = (person) => {
        if(!person) return;

        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          'signature',
          'MUTABLE',
          {
            name: person.name,
            id: person.id
          }
        )
    
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        const newEditorState = EditorState.set(
          editorState,
          { currentContent: contentStateWithEntity }
        );
    
        setEditorState(AtomicBlockUtils.insertAtomicBlock(
            newEditorState,
            entityKey,
            ' '
          )
        );
        editorRef.current.focus();
      }

    return (
        <>

            <EditorComponent ref={editorRef} blockRendererFn={mediaBlockRenderer} {...props}/>
            <SignatureSuggestions showModal={open} shouldShowModal={setOpen} setSignee={setSignee} addSignature={addSignature}/>
        </>
     );
}
 
export default WithSignatures;