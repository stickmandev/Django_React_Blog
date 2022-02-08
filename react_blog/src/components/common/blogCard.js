import moment from "moment";
import React from "react";
import { Link } from 'react-router-dom';

const removeTag = (content) => {
    const regex = /(<([^>]+)>)/ig
    return content.replace(regex,'');
}

const BlogCard = (props) => {
    return (
        <React.Fragment key={props.data.id}>
            <div  className="blogCard" >
                <img  src={props.data.image} alt={props.data.title} width={200} height={200}></img>
                
                <div  className="blogContent">
                    <div  className="blogTitle">{props.data.title}</div>
                    <p> 
                        {removeTag(props.data.content).toString().substring(0, 30)} 
                        {removeTag(props.data.content).toString().length > 30 && "..."} 
                    </p>
                    <Link to={`/${props.data.slug}`}>
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

export default BlogCard