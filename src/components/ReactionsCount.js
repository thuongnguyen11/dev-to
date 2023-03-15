import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function ReactionsCount({articleInformation}) {
    return (
        <div>
            <div className="flex">
                <FavoriteBorderIcon />
                <div className="text-sm">{articleInformation.public_reactions_count}</div>
            </div>

            <div className="flex">
                <ChatBubbleOutlineOutlinedIcon />
                <div className="text-sm">{articleInformation.comments_count}</div>
            </div>

            <div className="flex">
                <BookmarkBorderOutlinedIcon />
                <div className="text-sm">{articleInformation.comments_count}</div>
            </div>
        </div>
    )
}

export default ReactionsCount;