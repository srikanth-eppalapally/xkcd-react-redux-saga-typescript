import React from 'react';
import loader from '../images/loading.gif';



interface Props {

}


const LoadingSpinner: React.FC<Props> = (props) => {
    return (
        <div>
            <img src={loader} alt="Loading" />
        </div>
    );
}



export default LoadingSpinner;