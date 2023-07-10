import React from 'react';
import { HeadingH1, HeadingH2 } from './heading.style';

function Heading({children}) {
    return (
        <>
       <HeadingH1>
        {children}
       </HeadingH1>

        <HeadingH2>
            {children}
        </HeadingH2>

       </>
    );
}

export default Heading;