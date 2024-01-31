import { Divider, Flex, Tag, Typography } from 'antd';
import { CoinInfo } from './CoinInfo';

export const CoinInfoModal = ({ coin }) => {
    // return <h2>{coin.name}</h2>;
    return (
        <>
            <CoinInfo coin={coin} withSymbol />
            <Divider />
            <Typography.Paragraph>
                <Typography.Text strong style={{ marginRight: '5px' }}>
                    1 hour:
                </Typography.Text>
                <Tag
                    color={coin.priceChange1h > 0 ? 'green' : 'red'}
                    style={{ marginRight: '20px' }}
                >
                    {coin.priceChange1h} %
                </Tag>
                <Typography.Text strong style={{ marginRight: '5px' }}>
                    1 day:
                </Typography.Text>
                <Tag
                    color={coin.priceChange1d > 0 ? 'green' : 'red'}
                    style={{ marginRight: '20px' }}
                >
                    {coin.priceChange1d} %
                </Tag>
                <Typography.Text strong style={{ marginRight: '5px' }}>
                    1 week:
                </Typography.Text>
                <Tag
                    color={coin.priceChange1w > 0 ? 'green' : 'red'}
                    style={{ marginRight: '20px' }}
                >
                    {coin.priceChange1w} %
                </Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong style={{ marginRight: '5px' }}>
                    Price:
                </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong style={{ marginRight: '5px' }}>
                    Price BTC:
                </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong style={{ marginRight: '5px' }}>
                    Market Cap:
                </Typography.Text>
                {coin.marketCap}$
            </Typography.Paragraph>
            {coin.contractAddress && (
                <Typography.Paragraph>
                    <Typography.Text strong style={{ marginRight: '5px' }}>
                        Contract Adress:
                    </Typography.Text>
                    {coin.contractAddress}
                </Typography.Paragraph>
            )}
        </>
    );
};
