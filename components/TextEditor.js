import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, getDefaultKeyBinding, KeyBindingUtil, DefaultDraftBlockRenderMap, AtomicBlockUtils } from "draft-js";
import { db } from "../firebase";
import { useRouter } from "next/dist/client/router";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { SignatureSuggestions } from './elements/signature/SignatureSuggestions';
import { Signature } from './elements/signature/Signature';


const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const { hasCommandModifier } = KeyBindingUtil;


function TextEditor() {
  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);

  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };

  const myKeyBindingFn = (e) => {
    if (e.keyCode === 50 /* `2` key */ && hasCommandModifier(e)) {
      return 'myeditor-save';
    }
    return getDefaultKeyBinding(e);
  }

  const handleKeyCommand = (command) => {
    if (command === 'myeditor-save') {
      setOpen(true);
      return 'handled';
    }

    return 'not-handled';
  }

  const mediaBlockRenderer = (block) => {
    if(block.getType() === 'atomic') {
      return {
        component: Signature,
        editable: false
      }
    }
    return null;
  }

  const addSignature = () => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'signature',
      'MUTABLE',
      {
        src: 'placeholder for more info later'
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
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <button onMouseDown={addSignature} className="bg-green p-4 border">Signature</button>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg min-h-screen max-w-5xl mx-auto mb-12 border"
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={myKeyBindingFn}
        blockRendererFn={mediaBlockRenderer}
      />
      
    </div>
  );
}

export default TextEditor;