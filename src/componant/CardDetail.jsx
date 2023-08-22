import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, DEL, REMOVE } from '../redux/actions/actions';


const CardDetail = () => {
    const dispatch = useDispatch();
    const [first, setfirst] = useState([])
    const { id } = useParams();
    const getdata = useSelector((state) => state.cardtreducer.carts);
    const copper = () => {
        let copredatas = getdata.filter((e) => {
            return e.id == id;
        })
        setfirst(copredatas);
    }
    useEffect(() => {
        copper()
    }, [id])
    const anviget = useNavigate()
    const del = (id) => {
        dispatch(DEL(id));
        anviget("/")
    }
    const remove = (e) => {
        dispatch(REMOVE(e))
    }
    const send = (e) => {
        dispatch(ADD(e))
    }

    return (
        <>
            <div className="container my-3">
                <h1 className='text-center'> Iteams Details Card</h1>
                {
                    first && first.map((e) => {
                        return (
                            <>

                                <section className=' mt-3 d-flex row  rborder-radius box-shadow'>
                                    <div className="col-lg-5 col-md-6   col-sm-9 items_img ">
                                        <img className='border-radius w-100' src={e.imgdata} alt="" />
                                    </div>
                                    <div className="col-lg-5 col-sm-9 col-md-6">
                                        <table className='my-3  my-lg-3'>
                                            <tr>
                                                <td className='px-lg-2 px-sm-0 '>
                                                    <p><strong>Restaurant</strong> :{e.ename}</p>
                                                    <p><b>Price</b> : ₹{e.price}</p>
                                                    <p><b>Dishes</b>{e.address}</p>
                                                    <p><b>Total</b>:₹ {e.price * e.qnty}</p>
                                                </td>
                                                <td className='px-2'>
                                                    <p>
                                                        <strong>Rating :</strong> <span className='text-light ' style={{ background: "green", padding: "8px 8px", borderRadius: "10px" }}>{e.rating}  ★</span>
                                                    </p>
                                                    <p><strong>Order Review :</strong> {e.somedata}</p>
                                                    <p><strong>Remove :</strong> <RiDeleteBin6Fill onClick={() => del(e.id)} className='text-danger' style={{ fontSize: 30, cursor: "pointer" }} /></p>
                                                </td>
                                            </tr>
                                        </table>
                                        <button onClick={e.qnty <= 1 ? () => del(e.id) : () => remove(e)} className='btn bg-info-subtle  mx-3'>-</button>
                                        <span>{e.qnty}</span>
                                        <button onClick={() => send(e)} className='btn bg-info-subtle  mx-3'>+</button>
                                    </div>
                                </section>
                            </>
                        )
                    })
                }

            </div>
        </>
    );
}

export default CardDetail;
