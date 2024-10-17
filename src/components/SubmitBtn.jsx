import React from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    const isSubmiting = navigation.state === 'submitting'
    return (
       <button className='btn btn-primary btn-block' disabled={isSubmiting}>
{isSubmiting ? <> <span className='loading loading-spinner'>Sending</span></>:text}
       </button>
    );
}

export default SubmitBtn;
