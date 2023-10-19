import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';

import { NFTProvider } from '../context/NFTContext';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const chains = [sepolia];
const projectId = 'eda8763e88818f43281f73a3ea2e8d95';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const Marketplace = ({ Component, pageProps }) => (
  <>
    <WagmiConfig config={wagmiConfig}>
      <NFTProvider>
        <ThemeProvider attribute="class">
          <div className="dark:bg-nft-dark bg-white min-h-screen">
            <Head>
              <title>AI NFT Marketplace</title>
            </Head>
            <Navbar />
            <div className="pt-65">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>

          <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
        </ThemeProvider>
      </NFTProvider>
    </WagmiConfig>

    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </>
);

export default Marketplace;
