import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';

import { MarketAddress, MarketAddressABI } from './constants';

export const NFTContext = React.createContext();

const fetchContract = (signerOrProvider) => new ethers.Contract(MarketAddress, MarketAddressABI, signerOrProvider);

export const NFTProvider = ({ children }) => {
  const nftCurrency = 'ETH';
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoadingNFT, setIsLoadingNFT] = useState(false);

  // Define the JSON-RPC endpoints for different providers
  const jsonRpcEndpoint1 = 'https://sepolia.infura.io/v3/2WbzvgJK8c2cWFobTT0gJqxEeut';
  const jsonRpcEndpoint2 = 'YOUR_SECOND_JSON_RPC_ENDPOINT'; // Replace with your second JSON-RPC endpoint

  // Create providers for different JSON-RPC endpoints
  const provider1 = new ethers.providers.JsonRpcProvider(jsonRpcEndpoint1);
  const provider2 = new ethers.providers.JsonRpcProvider(jsonRpcEndpoint2);

  const fetchNFTs = async (selectedProvider) => {
    setIsLoadingNFT(false);

    const contract = fetchContract(selectedProvider);

    // Rest of your fetchNFTs logic remains the same
    // ...

    return items;
  };

  // Modify other functions (fetchMyNFTsOrListedNFTs, createSale, buyNFT) to accept the selected provider

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <NFTContext.Provider
      value={{
        nftCurrency,
        buyNFT,
        createSale,
        fetchNFTs: (selectedProvider) => fetchNFTs(selectedProvider),
        fetchMyNFTsOrListedNFTs,
        connectWallet,
        currentAccount,
        isLoadingNFT,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
