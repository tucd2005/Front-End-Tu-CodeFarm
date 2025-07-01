import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { createProductAPI } from '../../../api/productAdminAPI';

const AddProduct = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await createProductAPI(data);
            alert("thanh cong")
            reset()
            navigate("/admin/products")

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">ten sp</label>
                    <input type="text" {...register("ten", { required: "khong duoc bor trong" })} />
                </div>
                <div>
                    <label htmlFor="">gia</label>
                    <input type="text"  {...register("gia", { required: "khong duoc bor trong" })} />
                </div>
                <div>
                    <label htmlFor="">anh</label>
                    <input type="text"  {...register("anh", { required: "khong duoc bor trong" })} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddProduct