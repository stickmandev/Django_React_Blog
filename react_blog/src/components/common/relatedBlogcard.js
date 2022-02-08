import moment from "moment";

const RelatedBlogCard = (props) => {
    return(
        <div  className="RelatedBlogCard" id={props.data.id}>
            <img  src={props.data.image} alt={props.data.title} width={200} height={200}></img>
            
            <div  className="blogContent">
                <div  className="blogTitle">{props.data.title}</div>
                <button>Continue Reading</button>
                <div  className="footer">
                    <small>Created By: {props.data.author.username}, On {moment(new Date(props.data.created_at)).format('DD-MM-YYYY')}</small> 
                </div>
            </div>
        </div>
    );
};

export default RelatedBlogCard