import { Flex, Typography } from 'antd';

export const CoinInfo = ({ coin, withSymbol }) => {
    return (
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{ width: 35, marginRight: 10 }} />
            <Typography.Title level={2} style={{ margin: 0 }}>
                {withSymbol && `(${coin.symbol})`} {coin.name}
            </Typography.Title>
        </Flex>
    );
};
