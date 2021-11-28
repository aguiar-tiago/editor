import { getSession, useSession } from "next-auth/client";
import Login from '../components/Login';
import ProposalsDashboard from '../components/ProposalsDashboard';

export default function Home() {
  const [ session ] = useSession();

  if(!session) {
    return <Login />
  } else {
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