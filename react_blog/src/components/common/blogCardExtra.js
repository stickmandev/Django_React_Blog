import React from "react";
import moment from "moment";
import { Link } from 'react-router-dom';

const BlogCardExtra = (props) => {
    return(
        <React.Fragment key={props.data.id}>
            <div  className="blogCardExtras">
                <img  src={props.data.image} alt={props.data.title} width={200} height={200}></img>
                
                <div  className="blogContent">
                    <div  className="blogTitle">{props.data.title}</div>
                    <Link to='/${props.data.slug}'>
                        <button>Continue Reading</button>
                    </Link>
                    <div  className="footer">
                        <small>Created By: {props.data.author.username}, On {moment(new Date(props.data.created_at)).format('DD-MM-YYYY')}</small> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default BlogCardExtra