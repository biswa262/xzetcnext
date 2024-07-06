import Image from 'next/image';
import naxosLogo from '../public/images/naxos.png';

const FirstBanner = () => {
    return (
      <div className="container flex justify-around bg-purple-600 md:justify-between">
        <div className="app-details w-4/12 ml-48 mt-40">
          <h1 className="text-5xl font-bold text-white leading-tight mb-4 ml-4">
            Showcase your <br />
            App in one place
          </h1>
          <p className="headDetail text-xl text-white mb-4 ml-4">
            Duis facilisis sem sed metus malesuada rhoncus. Nulla tincidunt
            tincidunt lectus at lacinia. Pellentesque ullamcorper arcu id rutrum
            volutpat. Donec suscipit auctor enim vel dignissim.
          </p>
          <div className="container2 flex">
            <div className="paragraph p-4">
              <p className="plat text-gray-400">Available on</p>
              <p className="download text-2xl">Play Store</p>
            </div>
            <div className="paragraph p-4">
              <p className="plat text-gray-400">Download on</p>
              <p className="download text-2xl">App Store</p>
            </div>
          </div>
        </div>
        <Image 
          src={naxosLogo} 
          alt="App Interface" 
          className="w-3/12 ml-auto mr-8 mt-20" 
        />
      </div>
    );
  };
  
  export default FirstBanner;
