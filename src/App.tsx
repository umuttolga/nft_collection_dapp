// React Imports
import React, { useState } from 'react'
import MainPage from "./Components/MainPage"

// ThirdWeb Imports
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from '@thirdweb-dev/sdk';

// Style Imports
import '@fontsource/croissant-one';
import { ChakraProvider } from '@chakra-ui/react';

// Make a plain copy to push repo for student to connect thirdweb

function App() {

  // Bnb Testnet Chain ID 
 const chainId = ChainId.BinanceSmartChainTestnet
 
 return (
    <ChakraProvider>
<ThirdwebProvider activeChain={chainId} clientId='744e983622eec46bf3947546f612a2d0'> {/* Client ID Retrieved From Thirdweb Settings Page */}
<MainPage/>
</ThirdwebProvider>
    </ChakraProvider>
    )
}

export default App
