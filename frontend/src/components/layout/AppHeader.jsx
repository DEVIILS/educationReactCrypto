import { Layout, Select, Space, Button, Modal, Drawer, Typography } from 'antd';
import { useState } from 'react';
import { useCrypto } from '../../shared/hooks/useCrypto';
import { CoinInfoModal } from '../../shared/CoinInfoModal';
import { AddAssetForm } from '../../shared/AddAssetForm';
import { headerStyle } from '../../shared/stylesAllProject';

const headerPortfolioStyle = {
    // color: '#292632',
    letterSpacing: '2px',
    fontWeight: 700,
    fontSize: '2rem',
    letterSpacing: '5px',
    fontWeight: 400,
    color: '#fff',
    // backgroundImage: 'linear-gradient(225deg,#6363fa 40%,#cc53fc)',
    // backgroundImage: 'linear-gradient(261deg, #292632 30%, #c67ee3)',
    backgroundImage: 'linear-gradient(352deg, #292632 40%, #a6c0ee87)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

export const AppHeader = () => {
    const { assets, crypto } = useCrypto();
    const [drawer, setDrawer] = useState(false);
    const [select, setSelect] = useState(false);
    const [modal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);

    const keyDownHandler = (event) => {
        if (event.key === 'Escape') {
            setSelect((prev) => !prev);
        }
    };

    const handleSelect = (value) => {
        setCoin(crypto.find((c) => c.id === value));
        setModal(true);
        console.log(value);
    };

    const cryptoPriceMap = crypto.reduce((acc, coin) => {
        acc[coin.id] = coin.price;
        return acc;
    }, {});
    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: '18rem',
                }}
                onKeyDown={keyDownHandler}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value="press / to open"
                options={crypto.map((coin) => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} />
                        {option.data.label}
                    </Space>
                )}
            />

            <Typography.Title style={{ paddingTop: '1rem' }} level={3}>
                <Typography.Text style={headerPortfolioStyle}>
                    Portfolio:{' '}
                    {assets
                        .map((asset) => asset.amount * cryptoPriceMap[asset.id])
                        .reduce((acc, value) => (acc += value), 0)
                        .toFixed(2)}
                    $
                </Typography.Text>
            </Typography.Title>

            <Button type="primary" onClick={() => setDrawer(true)}>
                Add Asset
            </Button>

            <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer
                width={600}
                title="Add Asset"
                onClose={() => setDrawer(false)}
                open={drawer}
                destroyOnClose
            >
                <AddAssetForm onClose={() => setDrawer(false)} />
            </Drawer>
        </Layout.Header>
    );
};
