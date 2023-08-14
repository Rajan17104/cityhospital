import { Height } from '@mui/icons-material';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import FavoriteIcon from '@mui/icons-material/Favorite';

function Customcard({ values, btnVal, onclick1, favorite }) {
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
                    {
                        favorite ?
                            <button onClick={() => favorite(values.id)} style={{ marginLeft: '70px' }}>
                                <FavoriteBorderIcon />
                            </button> :
                            <FavoriteBorderIcon /> ?

                                <FavoriteBorderIcon /> : <FavoriteIcon />
                    }
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