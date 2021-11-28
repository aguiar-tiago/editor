import Head from 'next/head'
import Header from '../components/Header';
import Icon from "@material-tailwind/react/Icon";
import { useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';
import DocumentRow from '../components/DocumentRow';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import Sidebar from './SideBar';
import NewDocumentModal from './NewDocumentModal';
import NewDocument from './NewDocument';

const ProposalsDashboard = ({session}) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ input, setInput ] = useState('');

    const [snapshot] = useCollectionOnce(
      db
        .collection('userDocs')
        .doc(session.user.email)
        .collection('docs')
        .orderBy('timestamp', 'desc')
    );

    const createDocument = () => {
        if(!input) return;
        db.collection('userDocs').doc(session.user.email).collection('docs').add({
          fileName: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
        setShowModal(false);
      }

      return (
        <div>
          <Head>
            <title>Proposify</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header session={session}/>
          <NewDocumentModal 
            showModal={showModal}
            input={input} 
            createDocument={createDocument}
            setInput={setInput}
            setShowModal={setShowModal}
          />

          <div className="flex flex-row min-h-screen">
            <Sidebar />
            <div className="flex flex-col mx-auto w-full">
              <NewDocument session={session} setShowModal={setShowModal}/>

              <section className="bg-white px-10 md:px-0">
                <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
                  <div className="flex items-center justify-between pb-5">
                    <h2 className="font-medium flex-grow">My Documents</h2>
                    <p className="mr-12">Date Created</p>
                    <Icon name="folder" size="3xl" color="gray" />
                  </div>
                </div>
          
                <div className="max-w-3xl mx-auto px-10 md:px-0">
                  {snapshot && snapshot?.docs.map(doc => (
                    <DocumentRow 
                      key={doc.id}
                      id={doc.id}
                      fileName={doc.data().fileName}
                      date={doc.data().timestamp}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
      </div>
    )
}
 
export default ProposalsDashboard;