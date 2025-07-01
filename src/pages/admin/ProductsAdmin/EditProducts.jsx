import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailProductAPI, updateProductAPI } from '../../../api/productAdminAPI';

const EditProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getDetailProductAPI(id);
                reset(res.data); // Pre-fill form với dữ liệu hiện tại
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id, reset]);

    const onSubmit = async (data) => {
        try {
            await updateProductAPI(data, id);
            alert("Sửa thành công");
            reset();
            navigate("/admin/products");
        } catch (error) {
            alert("Sửa thất bại");
            console.log(error);
        }
    };

    return (
        <>
            <h3>Sửa sản phẩm</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Tên sản phẩm</label>
                    <input
                        type="text"
                        {...register("ten", { required: "Không được bỏ trống" })}
                    />
                    {errors.ten && <span>{errors.ten.message}</span>}
                </div>
                <div>
                    <label htmlFor="">Giá</label>
                    <input
                        type="text"
                        {...register("gia", { required: "Không được bỏ trống" })}
                    />
                    {errors.gia && <span>{errors.gia.message}</span>}
                </div>
                <div>
                    <label htmlFor="">Mô tả</label>
                    <input
                        type="text"
                        {...register("mota", { required: "Không được bỏ trống" })}
                    />
                    {errors.mota && <span>{errors.mota.message}</span>}
                </div>
                <div>
                    <label htmlFor="">Ảnh</label>
                    <input
                        type="text"
                        {...register("anh", { required: "Không được bỏ trống" })}
                    />
                    {errors.anh && <span>{errors.anh.message}</span>}
                </div>
                <div>
                    <button type='submit'>Cập nhật</button>
                </div>
            </form>
        </>
    );
};

export default EditProducts;