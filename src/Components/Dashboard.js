import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';
import { Button } from './ArticleCard';
import { IoMdAddCircle } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  // Dashboard will display current saved articles and give the user the ability to create, delete, and update current articles.
  // Maybe Archiving an article would be better than deleting? Never truly delete, but archive. This would be a separate route and a page of Archived articles.

  const articleStore = [];
  const { push } = useHistory();
  const [articles, setArticles] = useState(articleStore);

  useEffect(() => {
    axios
      .get('https://pintereachunit4.herokuapp.com/api/articles')
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAdd = () => {
    push('/add');
  };
  return (
    <div className="Dashboard active-bg">
      <header>
        <h1 id="dashboardTitle">My Articles</h1>
        <Button primary onClick={handleAdd}>
          <IoMdAddCircle /> Add another article
        </Button>
      </header>
      <section className="CardDashboard">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    </div>
  );
};

export default Dashboard;
