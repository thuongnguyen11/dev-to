
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticlesList from '../../components/ArticlesList';
import './Home.css';



function Home() {

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?page=1")
            .then((response) => response.json())
            .then((data) => setArticlesList(data));
    })

    return (
        <div className="background">
            <div className="px-3 pt-4 text-lg">
                <Link to="/" className="pr-6">Relevant</Link>
                <Link to="/latest" className="pr-6">Latest</Link>
                <Link to="/top" className="pr-6">Top</Link>
            </div>
            <ArticlesList articlesList={articlesList}/>

        </div>
    )


}

export default Home;