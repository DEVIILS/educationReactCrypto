import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from './hooks/useCrypto';

import { portfolioStyledChart } from './stylesAllProject';
ChartJS.register(ArcElement, Tooltip, Legend);

export const PortfolioChart = () => {
    const { assets, crypto } = useCrypto();
    const data = {
        labels: assets.map((a) => a.name),
        datasets: [
            {
                label: '$',
                data: assets.map((a) => a.totalAmount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.05)',
                    'rgba(54, 162, 235, 0.05)',
                    'rgba(255, 206, 86, 0.05)',
                    'rgba(75, 192, 192, 0.05)',
                    'rgba(153, 102, 255, 0.05)',
                    'rgba(255, 159, 64, 0.05)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={portfolioStyledChart}>
            <Pie data={data} />
        </div>
    );
};
