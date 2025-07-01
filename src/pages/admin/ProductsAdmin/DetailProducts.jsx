import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailProductAPI } from '../../../api/productAdminAPI';

const DetailProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await getDetailProductAPI(id);
                setProduct(res.data)
            } catch (error) {
                console.log(error);

            }
        };
        fetchDetail()
    }, [id])

    if (!product) return <>Dang tai ...</>
    return (
        <div>DetailProducts

            <h2> chi tiet san pham,</h2>
            <p><b>ten: </b>{product.ten}</p>
            <p><b>gia: </b>{product.gia}</p>
            <p><b>anh: </b>{product.anh}</p>
        </div>
    )
}

export default DetailProducts