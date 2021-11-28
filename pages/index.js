import Head from 'next/head'
import Header from '../components/Header';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image';
import { getSession, useSession } from "next-auth/client";
import Login from '../components/Login';
import Modal from '@material-tailwind/react/Modal';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import { useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';
import ProposalsDashboard from '../components/ProposalsDashboard';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

export default function Home() {
  const [ session ] = useSession();

  
  if(!session) {
    return <Login />
  }else {
    return <ProposalsDashboard session={session} />
  };
  
 
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}