
import './ArticleItem.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Link } from 'react-router-dom';

function ArticleItem({ article }) {
    return (
        <Link to={article.path}>
            <div className=" bg-white mt-2 box-shadow p-4">
                <div className="flex items-center">
                    <img src={article.social_image} className="inline-block w-10 h-10 rounded-full"></img>
                    <div className="ml-3">
                        <div className="text-sm font-semibold">{article.user.name}</div>
                        <div className="text-xs">{article.readable_publish_date}</div>
                    </div>
                </div>
                <div className="font-bold text-xl my-2">{article.description}</div>
                <ul className="flex">
                    {article.tag_list.map((tag, index) => {
                        return (
                            <li className="mr-2 text-sm" key={index}>#{tag}</li>
                        )
                    })}
                </ul>
                <div className="flex pt-6 justify-between">
                    <div className="flex">
                        <div className="flex pr-4">
                            <FavoriteBorderIcon />
                            <div className="text-sm">{article.public_reactions_count}</div>
                        </div>

                        <div className="flex pl-2">
                            <ChatBubbleOutlineOutlinedIcon />
                            <div className="text-sm">{article.comments_count}</div>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="pr-3 text-sm">{article.reading_time_minutes} min read</div>
                        <BookmarkBorderOutlinedIcon />

                    </div>
                </div>


            </div>
        </Link>
    )
}

export default ArticleItem;