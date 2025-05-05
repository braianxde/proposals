import Button from '@/components/ui/button';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

const ConnectWalletButton = () => {
	const { setShowAuthFlow } = useDynamicContext();
	return <Button onClick={() => setShowAuthFlow(true)}>Connect Wallet</Button>;
};

export default ConnectWalletButton;
