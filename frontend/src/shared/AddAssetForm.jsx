import { Select, Space, Divider, Form, InputNumber, Button, DatePicker, Result } from 'antd';
import { useState, useRef } from 'react';
import { useCrypto } from './hooks/useCrypto';
import { CoinInfo } from './CoinInfo';

const validateMessages = {
    required: '${label} is required!',
    types: {
        number: '${label} is not valid number',
    },
    number: {
        range: '${label} must be berween ${min} and ${max}',
    },
};

export const AddAssetForm = ({ onClose }) => {
    const { crypto, addAsset } = useCrypto();
    const [form] = Form.useForm();
    const [coin, setCoin] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const assetRef = useRef(false);

    if (submitted) {
        return (
            <Result
                status="success"
                title="New Asset Added"
                subTitle={`Added ${assetRef.current.amount} of ${coin.name} by price ${assetRef.current.price}$`}
                extra={[
                    <Button type="primary" key="close" onClick={onClose}>
                        Close
                    </Button>,
                ]}
            />
        );
    }

    if (!coin) {
        return (
            <Select
                style={{ width: '100%' }}
                onSelect={(value) => setCoin(crypto.find((c) => c.id === value))}
                placeholder="Select coin"
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
        );
    }

    const onFinish = (values) => {
        console.log(values);
        const newAsset = {
            id: coin.id,
            amount: values.amount,
            price: values.price,
            date: values.date?.$d ?? new Date(),
        };
        assetRef.current = newAsset;
        setSubmitted(true);
        addAsset(newAsset);
    };
    const handleAmountChange = (value) => {
        const price = form.getFieldValue('price');
        form.setFieldsValue({
            total: +(value * price).toFixed(2),
        });
    };
    const handlePriceChange = (value) => {
        const amount = form.getFieldValue('amount');
        form.setFieldsValue({
            total: +(amount * value).toFixed(2),
        });
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 10,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                price: +coin.price.toFixed(2),
            }}
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <CoinInfo coin={coin} />
            <Divider />

            <Form.Item
                label="Amount"
                name="amount"
                rules={[
                    {
                        required: true,
                        type: 'number',
                        min: 0,
                    },
                ]}
            >
                <InputNumber
                    placeholder="Enter coin amount"
                    style={{ width: '100%' }}
                    onChange={handleAmountChange}
                />
            </Form.Item>

            {/* PRICE */}
            <Form.Item label="Price" name="price">
                <InputNumber onChange={handlePriceChange} style={{ width: '100%' }} />
            </Form.Item>

            {/* DATE */}
            <Form.Item label="Date & Time" name="date">
                <DatePicker showTime />
            </Form.Item>

            {/* TOTAL */}
            <Form.Item label="Total" name="total">
                <InputNumber disabled style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Asset
                </Button>
            </Form.Item>
        </Form>
    );
};
