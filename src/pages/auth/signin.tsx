import { getProviders } from 'next-auth/react';

import 'react-toastify/dist/ReactToastify.css';
import { Auth } from '../../components/Auth';
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

// eslint-disable-next-line @typescript-eslint/no-shadow
const SignIn: React.FC<Props> = (props) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-sky-50 to-gray-200 py-16">
      <Auth {...props} />
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
