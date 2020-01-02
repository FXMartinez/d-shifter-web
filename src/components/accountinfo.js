import React from 'react';

function AccountInfo(props) {

    

    return (
        console.log(props),

        <div>
            { 
            props.user.image 
            ? 
            <img src={ props.user.image } alt='' className='img-fit' /> 
            : 
            <img src='https://www.sideshow.com/storage/product-images/9040321/lobo_dc-comics_feature.jpg' alt='' className='img-fit' /> 
            } <br/>
            active: {props.user.active} <br/>
            Username: {props.user.username} <br/>
            sex: { props.user.sex } <br/>
            bio: { props.user.bio } <br/>
        </div>
    )
}

export default AccountInfo;