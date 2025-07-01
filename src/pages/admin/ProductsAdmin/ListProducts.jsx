import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteProductAPI, getAllProductsAPI } from '../../../api/productAdminAPI';

const ListProducts = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const res = await getAllProductsAPI()
                setProduct(res.data)
            } catch (error) {
                console.log(error);
            }

        };
        fetchList()
    }, []);


    const handleDelete = async (id) => {
        if (window.confirm("are you ready")) {
            try {
                await deleteProductAPI(id);
                setProduct(product.filter((item) => item.id !== id))
            } catch (error) {
                alert("xoa that bai", error)
            }
        }
    }
    return (
        <>
            <h3>danh sach san pham</h3>
            <Link to="add">them san pham</Link>
            <div>
                <table className=''>
                    <thead>

                        <tr>
                            <th>ten </th>
                            <th>gia</th>
                            <th>mo ta</th>
                            <th>anh</th>
                            <th>hanh dong</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ten}</td>
                                <td>{item.gia}</td>
                                <td><img src={item.anh} alt="" /></td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>xoa</button>

                                    <Link to={`/admin/products/${item.id}`}><button>xem chi tiet</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    )
};
export default ListProducts;