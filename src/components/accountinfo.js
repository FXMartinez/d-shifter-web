import React from 'react';
import { Header, Comment } from 'semantic-ui-react'

function AccountInfo(props) {

    

    return (
        console.log('account', props.findComment(props.user.id)),
        <div>

            <div className='profile'>
                { 
                props.user.image 
                ? 
                <img src={ props.user.image } alt='' className='img-fit' /> 
                : 
                <img src='https://muhka-ensembles.imgix.net/assets/public/000/017/626/large/blank.png?w=768&h=768&dpr=2.625&ch=DPR&auto=format%2Ccompress' alt='' className='img-fit' /> 
            } <br/>
                <Header as='h3'>
                Username: {props.user.username}
                </Header> <br/>
                {/* active: {props.user.active} <br/>
                sex: { props.user.sex } <br/>
            bio: { props.user.bio } <br/> */}
            </div>
            <div>  
                <Comment.Group>
                    <Header as='h3' dividing>
                    Comments
                    </Header>

                    {props.findComment(props.user.id).map(comment => {
                        return  <Comment>
                                <Comment.Avatar src={props.findGamename(comment.game_id).image} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{ props.findGamename(comment.game_id).name }</Comment.Author>
                                        {/* {console.log(props.findGamename(comment.game_id).name)} */}
                                        <Comment.Metadata>
                                        </Comment.Metadata>
                                        <Comment.Text> { comment.content } </Comment.Text> <br/>
                                    </Comment.Content>
                                    <Header as='h3' dividing></Header>
                                </Comment>
                    })}


                </Comment.Group>
            </div>
        </div>
    )
}

export default AccountInfo;