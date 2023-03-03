import { useState } from 'react';

import { getProviders } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Auth, Role } from '../../components/Auth';
import { Modal } from '../../components/Modal';
import { AppConfig } from '../../config/AppConfig';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

interface Props {
  title: string;
  providers: Provider[];
}

/**
 * 0 => open Modal
 * 1 => set candidate
 * 2 => set company
 * 3 => close modal
 */
type FourPlet = 0 | 1 | 2 | 3;

// eslint-disable-next-line @typescript-eslint/no-shadow
const SignIn: React.FC<Props> = (props) => {
  // Can be moved a global state.
  const [showModal, setShowModal] = useState<FourPlet>(0);
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-sky-50 to-gray-200 py-16">
      <ToastContainer />
      <Auth {...props} showModal={showModal} />
      <Modal show={showModal}>
        <Role
          onClose={(val: FourPlet) => {
            setShowModal(val);
          }}
        />
      </Modal>
      <div id="modal-root"></div>
    </div>
  );
};

// FIXME need to try static props in her
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
      title: AppConfig.title,
    },
  };
}

export default SignIn;
