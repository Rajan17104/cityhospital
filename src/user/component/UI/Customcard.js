import { Height } from '@mui/icons-material';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteIconFilled from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addFavourite, removeFavourite } from '../../Redux/slice/FavouriteSlice';

function Customcard({ values, btnVal,onclick1, onclick2, removefav, item, favouriteTrue }) {
    return (

        <Card className='card'
            style={{
                width: '18rem'
            }}
        >
            {
                values.url ? <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                /> :
                    null
            }

            <CardBody>
                <div className='d-flex' style={{ justifyContent: 'space-between' }} >
                    <CardTitle tag="h5">
                       <b>Name :</b> {values.name}

                    </CardTitle>
                    {
                        favouriteTrue ?
                            item ?
                                // favData 
                                <FavoriteIcon sx={{ color: '#FF6337' }} onClick={() => removefav(values.id)} /> :
                                < FavoriteBorderIcon onClick={() => onclick2(values.id)} /> :
                            null
                    }
                </div>

                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                   <b>Price :</b> {values.price}
                </CardSubtitle>
                <CardText>
                  <b>Ex.Date :</b> {values.expiry}<br></br>
                   <b>Desc :</b> {values.desc.substring(0, 50)}
                </CardText>
                <br></br>
                <div style={{ justifyContent: 'space-between' }}>
                    <div>
                        {
                            btnVal ?
                                <Button onClick={() => onclick1(values.id)} style={{ backgroundColor: '#FF6337' }}>
                                    {btnVal}
                                </Button> : null
                        }
                     
                    </div>
                </div>

            </CardBody >
        </Card >



    );
}

export default Customcard;