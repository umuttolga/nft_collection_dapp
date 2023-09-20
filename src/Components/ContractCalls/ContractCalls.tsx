import { useContract, useNFTs, useMintNFT, useAddress, useContractWrite } from '@thirdweb-dev/react'

interface Data {
    name:string,
    address:string
}

// Execute Functions
export const mintNNFTCall = () => {
    // Get Contract
    const contractInstance = useContract("0x788EB411B4259E68fEA204284b584a133DF2be6D"); // Contract Address
    const contract = contractInstance?.contract
   
    // Mint NFT Contract Call
    const { mutateAsync: mintTo, isLoading } = useContractWrite(contract, "mintTo")
    const address: any = useAddress()

    // Mint NFT Function Call Frontend
    const handleNewMint = (data: any) => {
      const tx = contract?.erc721.mintTo(address, data)

    }
    return {handleNewMint}
}

// Query Functions

export const getAllNtfs = () => {
    
    // Get Contract
    const {contract} = useContract("0x788EB411B4259E68fEA204284b584a133DF2be6D") // Contract Address
    
    // Fetch NFTs
    const { data: nfts, isLoading, error } = useNFTs(contract, { start: 0, count: 100 });
    return {nfts, isLoading}
}