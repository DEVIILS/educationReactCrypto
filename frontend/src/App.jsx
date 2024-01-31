import { CryptoContextProvider } from './context/crypto-context';
import { AppLayout } from './components/layout/AppLayout';
import { BlurDecorBlock } from './shared/blurDecorBlock';
import { ConfigProvider } from 'antd';
import { tableStyledProvider, cardStyledProvider } from './shared/stylesAllProject';

export default function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        ...tableStyledProvider,
                    },
                    Card: {
                        ...cardStyledProvider,
                    },
                    Button: {
                        colorPrimary: 'linear-gradient(352deg, #292632 40%, #a6c0ee87)',
                        colorPrimaryHover: 'linear-gradient(352deg, #292632 30%, #c67ee3)',
                        colorPrimaryActive: 'linear-gradient(225deg,#6363fa 40%,#cc53fc)',
                    },
                    Statistic: {
                        colorTextDescription: 'antiquewhite',
                    },
                    List: { colorText: 'antiquewhite' },
                },
            }}
        >
            <CryptoContextProvider>
                <BlurDecorBlock />
                <AppLayout />
            </CryptoContextProvider>
        </ConfigProvider>
    );
}
