import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import ListMedicines from './ListMedicines';
import { getMedicine } from '../../Redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Redux/slice/CartSlice';
import { getDepartmentData } from '../../Redux/action/department.action';
import ListDepartment from './ListDepartment';
import { getDepartmentApiData } from '../../../common/apis/department.api';
import { fetchDepartment } from '../../Redux/slice/DepartmentSlice';
import { Title } from '../../component/UI/Subtitel/subtitel.style';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
// import { addToCart } from '../../Redux/action/cart.action';

function DepartmentData(props) {

    // const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    const dispatch = useDispatch();
    const department = useSelector(state => state.department)

    // useEffect(() => {
    //     let localData = JSON.parse(localStorage.getItem("medicines"));

    //     if (localData) {
    //         setData(localData)
    //     }

    //     console.log(localData);

    // }, []);

    useEffect(() => {
        dispatch(fetchDepartment())
    }, [])

    const handlechange = (val) => {
        console.log(val);

        let mdata = department.department

        let fData = mdata.filter((v, i) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.expiry.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        );

        console.log(fData);

        setSearch(fData)
    }

    // const handleCart = (id) => {
    //     dispatch(addCart(id))
    //     console.log("handle cart called" + id);
    // }

    // const onFavorite = (id) => {

    // }

    let theme = useContext(ThemeContext)

    return (

        <section id="departments" className={`departments ${theme.theme}`}>
            <div className="container">
                <div className="section-title">
                    <h2>Departments</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            {
                                department.department.map((v, i) => {
                                    return (
                                        <li className="nav-item">
                                            <a className={i === 0 ? "nav-link active show" : "nav-link"} data-bs-toggle="tab" href={`#tab-${i + 1}`}>{v.name}</a>
                                        </li>
                                    );
                                })
                            }

                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            {
                                department.department.map((v, i) => {
                                    return (
                                        <div className={i === 0 ? 'tab-pane active show' : 'tab-pane'} id={`tab-${i + 1}`}>
                                            <div className='row'>
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>{v.name}</h3>
                                                    <p>{v.desc}</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    {v.date}
                                                    {/* {v.img} */}
                                                    <img src="../assets/img/departments-1.jpg" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {/* <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Cancer</h3>
                                        <Title className="fst-italic">Quisque sapien ipsum, efficitur ac dui et, fringilla viverra tellus. Proin urna
                                            augue, posuere ut pellentesque quis, cursus ac neque.</Title>
                                        <Title>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                                            tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                                            tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</Title>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="../assets/img/departments-2.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Physiotherapy</h3>
                                        <Title className="fst-italic">Fusce placerat ornare enim sed varius. Mauris tortor diam, molestie eget
                                            vulputate a, facilisis quis nibh. Donec blandit efficitur nulla</Title>
                                        <Title>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                                            tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                                            tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</Title>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="../assets/img/departments-3.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Dental</h3>
                                        <Title className="fst-italic"> sollicitudin sed est. Vestibulum volutpat luctus quam sed finibus. Sed luctus
                                            odio eget ex posuere hendrerit. Donec iaculis nisi ut purus.</Title>
                                        <Title>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                                            tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                                            tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</Title>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="../assets/img/departments-4.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-5">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Neurosurgery</h3>
                                        <Title className="fst-italic">Aliquam sed convallis libero. Proin in mi tempor, convallis lectus sed,
                                            convallis mauris. Quisque ac nulla et lorem ultricies vulputate.</Title>
                                        <Title>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                                            tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                                            tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</Title>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="../assets/img/departments-5.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );


}

export default DepartmentData;