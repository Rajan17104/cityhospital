import { Height } from '@mui/icons-material';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Customcard({ values, btnVal, onclick1 }) {
    return (

        <Card
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
                <CardTitle tag="h5">
                    {'Name : ' + values.name}
                </CardTitle>
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

                {
                    btnVal ?
                        // <Button
                        //     onClick={() =>onclick1(values.id)}>
                        //     {btnVal}
                        // </Button> : null
                        <Button
                            onClick={() => onclick1(values.id)}>
                            {btnVal}
                        </Button> : null
                }



            </CardBody>
        </Card>
    );
}

export default Customcard;