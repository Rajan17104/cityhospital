import { Height } from '@mui/icons-material';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteIconFilled from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavourite, removeFavourite } from '../../Redux/slice/FavouriteSlice';

function Customcard({ values, btnVal, onclick1, onclick2, favourite, removeFavourite, addFavourite, favouriteTrue }) {
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
                <div className='d-flex ' >
                    <CardTitle tag="h5">
                        {'Name : ' + values.name}
                    </CardTitle>
                    {/* {
                        favouriteTrue ?
                        favourite ?
                                <Button size="small" classes='p-0 bg-transparent remove' onClick={() => removeFavourite(values.id)}>
                                    <FavoriteIconFilled sx={{ color: '#FF6337' }} />
                                </Button>
                                :
                                <Button size="small" classes='p-0 bg-transparent add' onClick={() => addFavourite(values.id)}>
                                    <FavoriteIcon sx={{ color: '#FF6337' }} />
                                </Button>
                            : null
                    } */}
                    
                    <FavoriteIcon sx={{ color: '#FF6337' }} onClick={() => onclick2(values.id)} />

                    {/* <span><FavoriteBorderIcon /></span> */}
                </div>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {'Price : ' + values.price}
                </CardSubtitle>
                <CardText>
                    {'Date : ' + values.expiry}<br />
                    {'Description : ' + values.desc.substring(0, 50)}
                </CardText>




            </CardBody>
            {
                btnVal ?
                    <Button onClick={() => onclick1(values.id)}>
                        {btnVal}
                    </Button> : null
            }

        </Card>



    );
}

export default Customcard;