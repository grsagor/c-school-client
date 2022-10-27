import React from 'react';
import Ans from '../Ans/Ans';

const Description = ({description}) => {
    const {qus, ans} = description;
    return (
        <div>
            <div>{qus}</div>
            <ul>
                {
                    ans.map( anspart => <Ans
                        anspart = {anspart}
                    ></Ans> )
                }
            </ul>
        </div>
    );
};

export default Description;