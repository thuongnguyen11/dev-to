
import ArticleItem from "./ArticleItem/ArticleItem.js";



function ArticlesList({articlesList}) {
    return (
        <div className="py-3">
            {articlesList.map(article => {
                return (
                    <ArticleItem article={article} key={article.id} />
                )
            })}
        </div>
    )
}

export default ArticlesList;