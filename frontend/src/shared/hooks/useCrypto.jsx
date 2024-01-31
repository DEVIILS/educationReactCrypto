import { useContext } from 'react';
import { CryptoContext } from '../../context/crypto-context';

export const useCrypto = () => useContext(CryptoContext);
