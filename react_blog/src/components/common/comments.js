import React, {useState, useEffect} from "react";
import axios from 'axios';
import { BLOG_COMMENTS_URL } from "../utils/urls";
import CommentCard from "./commentCard";

const Comments = (props) => {
    const [fetching, setFetching] = useState(true);
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        getBlogComments()
    }, []);

    const getBlogComments = () => {
        axios.get(BLOG_COMMENTS_URL + props.id /*`?blog_id=${props.id}`*/).then(
            res => {
                setCommentList(res.data);
                setFetching(false);
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err.response.data);
            }
        )
    };



    const loadComments = (commentList) => {
        console.log(commentList);
        
        return commentList.map(
            (key, item) => {
                return <CommentCard data={key} />
            }
        );
    };

    return(
        <div className="comments">
            <h3>comments:</h3>
            {
                fetching && <i> Loading...</i>
            }

            {
                !fetching && commentList.length < 1 ? (

                    <h4>No comment available</h4>

                ) : (

                    loadComments(commentList)
                    
                )
            }   
            
         </div>
    );
};

export default  Comments