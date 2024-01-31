import { Layout, Spin } from 'antd';
import { AppHeader } from './AppHeader';
import { AppSider } from './AppSider';
import { AppContent } from './AppContent';
import { useCrypto } from '../../shared/hooks/useCrypto';

export const AppLayout = () => {
    const { loading } = useCrypto();
    if (loading) {
        return <Spin fullscreen />;
    }
    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    );
};
