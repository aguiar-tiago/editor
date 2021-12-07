import React, { useState, createContext, useEffect } from 'react';
import { 
    EditorState,
    convertFromRaw,
    convertToRaw
} from "draft-js";
import { db } from "../../firebase";
import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

export const DatabaseContext = createContext({});

const DatabaseProvider = props => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const router = useRouter();
    const { id } = router.query;
    const [session] = useSession();

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

      return (
        <DatabaseContext.Provider value={{editorState, setEditorState, onEditorStateChange}}>
            {props.children}
        </DatabaseContext.Provider>
      )
}

export default DatabaseProvider;