import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

// let localData = JSON.parse(localStorage.getItem("medicines"));

function Medicine(props) {

    const [medicine, setMedicine] = useState([]);

    let localData = JSON.parse(localStorage.getItem("medicines"));


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData !== null) {
            setMedicine(localData)
        }

        console.log(localData);

    }, []);

    return (
        <div>
        
        {
            medicine.map((v) => {
                return (
                <Card

                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                           {v.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                          {v.price}
                        </CardSubtitle>
                        <CardText>
                          {v.date}
                        </CardText>
                        <CardText>
                          {v.desc   }
                        </CardText>
                    </CardBody>
                </Card>
                )

            })
         }
        </div>
    );


}

export default Medicine;