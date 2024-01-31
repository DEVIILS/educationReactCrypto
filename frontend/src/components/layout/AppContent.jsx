import { Layout } from 'antd';
import { PortfolioChart } from '../../shared/PortfolioChart';
import { AssetTable } from '../../shared/AssetTable';
import { contentStyle } from '../../shared/stylesAllProject';

export const AppContent = () => {
    return (
        <Layout.Content style={contentStyle}>
            <PortfolioChart />
            <AssetTable />
        </Layout.Content>
    );
};
