import React, {useState, useEffect} from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BLOG_URL, BLOG_COMMENTS_URL, BLOG_TAG_URL } from "../../utils/urls";
import axios from 'axios';
import RelatedBlogCard from "../../common/relatedBlogcard";
import { useParams } from 'react-router-dom';


const BlogDetails = (props) => {
    const [fetching, setFetching] = useState(true);
    const [singleBlogDetails, setSingleBlogDetails] = useState([]);
    const [blogList, setBlogList] = useState([]);
    const [blogComments, setblogComments] = useState([]);
    const [blogTag, setBlogTag] = useState([]);
    
    const {slug} = useParams();
    
    useEffect(() => {
        getBlogContent()
    }, []);

    const getBlogContent = () => {

        axios.get(BLOG_URL + slug).then(
            res => {
                setSingleBlogDetails(res.data);
                setFetching(false);
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
        
        axios.get(BLOG_COMMENTS_URL).then(
            res => {
                setblogComments(res.data);
                setFetching(false);
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        );

        axios.get(BLOG_TAG_URL).then(
            res => {
                setBlogTag(res.data);
                setFetching(false);
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        );

    }

    return(
        <div className='detailOverlay' >
            <div >
                {
                    fetching?
                        (
                            <div className='blogDetailOverlay'>
                                <Skeleton className="imgSkeleton"  count={1} height={500} width="100%" /><br/>

                                <Skeleton className="title"  count={1} height={25} width="80%" /><br/>
                                <Skeleton className=""  count={1} height={9} width='50%' /><br/>
                            
                                <p className="textContent">
                                    <Skeleton className=""  count={22} height={12} width='100%' />
                                    <Skeleton className=""  count={1} height={12} width='40%' />
                                </p>
            
                                <Skeleton className=""  count={1} height={20} width='337px' /><br/>
                                <Skeleton className=""  count={1} height={160} width='337px' /><br/>
                                <Skeleton className=""  count={1} height={22} width='55px' /><br/>
                                <Skeleton className=""  count={1} height={25} width="105px" /><br/>
                                
                                <Skeleton className=""  count={1} height={17} width='200px' /><br/>
                                <Skeleton className=""  count={1} height={12} width='337px' />
                                <Skeleton className=""  count={1} height={12} width='290px' />
                                <Skeleton className=""  count={1} height={12} width='170px' />
                            </div>
                        ):(
                            <div className='blogDetailOverlay'>
                                <div className="imgSkeleton" style={{ backgroundImage: `url(${singleBlogDetails.image})` }}  />

                                <div>
                                    <h2 className="title" >
                                        {singleBlogDetails.title}
                                    </h2>

                                    <small>
                                        created by: {singleBlogDetails.author.username}  On {singleBlogDetails.created_at}
                                    </small>
                                    
                                    <div className="textContent">
                                        <p >
                                            {singleBlogDetails.content}
                                        </p>
                                    </div>
                                    

                                    <div className="formOverlay">
                                        <h3>Drop a comment</h3>

                                        <form action="" method="post">
                                            <input type="text" name="name" size="40" /><br/><br/>
                                            <textarea name="comment" rows="10" cols="40" /><br/><br/>

                                            <button type="Submit" className="" >submit</button>
                                        </form>
                                    </div>
                                    
                                    <div className="comments">
                                        <h3>comments:</h3>
                                            
                                        <div>
                                            <p>
                                                name-of-commenter wrote:
                                            </p>
                                            <p> this is my comment</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                }



            </div>

            
            <div className="realatedBlogs" >
                {
                    fetching ?
                        (
                            <div  className="blogExtras">
                                <Skeleton className="blogCard"  count={3} height={150} />
                            </div>

                        ) : (
                            <div  className="blogExtras">
                            <h4>Related Blogs</h4>
                            {
                                blogList.map((item, id) => <RelatedBlogCard id={id}  data={item} />)
                            }
                            </div>
                        )
                }
            </div>
            

        </div>
    );
};

export default BlogDetails