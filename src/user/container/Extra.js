// // import React from 'react';
// // import styled from 'styled-components';


// // function Extra(props) {

// //     const Button = styled.button`
    
// //     .btn{
    
// //     }

// //     `

// //     return (
// //         <div>
// //             <Button className='btn'>fdskjndskjcjdsd</Button>
// //         </div>
// //     );
// // }

// // export default Extra;

// import React, { useEffect } from 'react';
// import ListMedicine from './ListMedicine';
// import { TextField } from '@mui/material';
// import Htag from '../UI/H1toH6/Htag';
// import Titel from '../UI/Title/Titel';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchdata } from '../../../redux/action/medicine.action';

// function Medicine1(props) {
//     const dispatch = useDispatch();
//     const medicines = useSelector(state => state.medicine)
//     const [search, setSeacrh] = React.useState([])
//     const [searchvalue, setSeacrhValue] = React.useState(null)

//     useEffect(() => {
//         dispatch(fetchdata())
//     }, [])

//     const handleSearch = (value) => {
//         setSeacrhValue(value)
//         if (searchvalue) {
//             let fdata = medicines.medicine.filter((v) =>
//                 v.name.toLowerCase().includes(value.toLowerCase()) ||
//                 v.date.toString().includes(value) ||
//                 v.price.toString().includes(value) ||
//                 v.name.toLowerCase().includes(value.toLowerCase())
//             )

//             setSeacrh(fdata)
//         }
//     }

//     let localdataCart = JSON.parse(localStorage.getItem("CartData"));
//     let loacalarr = [];

//     const handleclick = (id) => {
//         if (localdataCart) {
//             loacalarr.push({
//                 pid: id,
//                 qyt: 1
//             });
//             localStorage.setItem("CartData", JSON.stringify(loacalarr));
//         } else {
//             localStorage.setItem("CartData", JSON.stringify({
//                 pid: id,
//                 qyt: 1
//             }));
//         }
//         console.log(loacalarr);
//     }

//     return (
//         <section id="medicine" className="medicine">
//             <div className="container">
//                 <div className="section-title">
//                     <Htag name="h2tag1">Medicine</Htag>
//                     <Titel>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
//                         blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
//                         luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</Titel>
//                 </div>
//             </div>
//             <div className="container">
//                 <TextField
//                     margin="dense"
//                     id="search"
//                     label="Search"
//                     name='search'
//                     type="search"
//                     fullWidth
//                     variant="standard"
//                     onChange={(e) => handleSearch(e.target.value)}
//                 />
//                 <div className="row mt-5 justify-content-between">
//                     <ListMedicine Mdata={search.length > 0 ? search : medicines.medicine} Hadleclick={handleclick} />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Medicine1;
