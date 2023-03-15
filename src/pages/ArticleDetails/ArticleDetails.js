
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import './ArticleDetails.css';

function ArticleDetails() {
    const [articleInformation, setArticleInformation] = useState({});

    let { author, slug } = useParams();


    useEffect(() => {
        fetch(`https://dev.to/api/articles/${author}/${slug}`)
            .then((response) => response.json())
            .then((data) => setArticleInformation(data));
    })



    return (
        <div>
            <img src={articleInformation?.cover_image} className="w-full"></img>
            <div className="p-4">
                <div className="flex items-center">
                    <img src={articleInformation?.social_image} className="inline-block w-10 h-10 rounded-full"></img>
                    <div className="ml-3">
                        <div className="text-sm font-semibold">{articleInformation?.user?.name}</div>
                        <div className="text-xs">{`Post on ${articleInformation?.readable_publish_date}`}</div>
                    </div>
                </div>

                <div className="font-bold text-xl my-2">{articleInformation?.description}</div>
                <ul className="flex">
                    {articleInformation?.tags?.map((tag, index) => {
                        return (
                            <li className="mr-2 text-sm" key={index}>#{tag}</li>
                        )
                    })}
                </ul>
                <div className="overflow-hidden"  dangerouslySetInnerHTML={{__html: articleInformation?.body_html}}></div>

            </div>

        </div>
    )
}

export default ArticleDetails;