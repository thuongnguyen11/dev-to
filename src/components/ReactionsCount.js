

function ReactionsCount() {
    return (
        <div>
            <div className="">
                <FavoriteBorderIcon />
                <div className="text-sm">{article.public_reactions_count}</div>
            </div>

            <div className="">
                <ChatBubbleOutlineOutlinedIcon />
                <div className="text-sm">{article.comments_count}</div>
            </div>

            <div className="">
                <BookmarkBorderOutlinedIcon />

            </div>
        </div>
    )
}

export default ReactionsCount;