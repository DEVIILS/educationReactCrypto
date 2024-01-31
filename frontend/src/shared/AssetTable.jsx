import { Table, ConfigProvider } from 'antd';
import { useCrypto } from './hooks/useCrypto';

import { tableStyle } from './stylesAllProject';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',

        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Price, $',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.amount - b.amount,
    },
];

export const AssetTable = () => {
    const { assets } = useCrypto();
    const data = assets.map((value) => ({
        key: value.id,
        name: value.name,
        price: value.price,
        amount: value.amount,
    }));
    return (
        <Table
            scroll={{ y: 335 }}
            style={tableStyle}
            pagination={false}
            columns={columns}
            dataSource={data}
        />
    );
};
