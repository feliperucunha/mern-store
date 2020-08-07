import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Detalhes do Produto">
                <Descriptions.Item label="Preço"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Vendidos">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Visualizações"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Descrição"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Adicionar ao Carrinho
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
