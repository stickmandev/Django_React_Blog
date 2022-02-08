import React,{useState, useEffect} from "react";
import axios from "axios";
import { BLOG_COMMENTS_URL } from "../utils/urls";
import ReactDOM from 'react-dom'

const CommentComp = (props) => {
    const [commentData, setCommentData] = useState({blog_id: props.id});
    const[loading, setLoading] = useState(false)
    const [ commentSent, setCommentSent] = useState('')

    const handleChange = (e) => {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value
        });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        axios.post(BLOG_COMMENTS_URL, commentData).then(
            res => {
                console.log(res.data)
                setLoading(false)
                setCommentData({ blog_id: props.id })
        
            },
            err => {
                console.log(err.response.data)
            }
        );

        console.log(commentData);

        setCommentSent('Comment Sent');

        const timer = setTimeout(() => {
            setCommentSent('')
        }, 1500);

        timer()

        clearTimeout(timer)
    };

    /*
    ReactDOM.render(
        <p>comment sent</p>,
        document.getElementsByClassName('comment_sent')
    );
        
    */

    return (
        <div className="formOverlay">
            <h3>Drop a comment</h3>
            
            <form onSubmit={onSubmit} method="post">
                <input 
                    placeholder="Enter your Name" 
                    type="text" 
                    name="name" 
                    size="40" 
                    value={commentData.name || ''} 
                    onChange={handleChange} 
                />   <br/><br/>

                <textarea 
                    placeholder="Enter your comment" 
                    name="comment" 
                    rows="10" 
                    cols="40" 
                    value={commentData.comment || ''} 
                    onChange={handleChange} 
                    required
                />    

                <br/><br/>

                <button type="submit" disabled= {loading} >
                    {loading ? 'Submitting...' : 'submit'}
                </button>

                <div className="comment_sent"> 
                    <p>
                        {commentSent}
                    </p>
                </div>
            </form>
            
        </div>
    )

    
}

export default  CommentComp
