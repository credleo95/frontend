import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { RiArchiveDrawerLine } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';
import { RiEmotionNormalLine } from 'react-icons/ri';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { RiEmotionLine } from 'react-icons/ri';
import UpdateModal from './UpdateModal';
import { axiosWithAuth } from '../Utils/AxiosWithAuth';
import axios from 'axios';

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'skyblue' : 'white')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid deepskyblue;
  border-radius: 3px;
`;

const Card = styled.div`
margin-left: 300px; 
margin-right: 300px;
}
`;

const ArticleCard = ({ article, setGlobalArticles }) => {
  const { title, category, link, description, rank } = article;
  const { article_id } = article;
  const ranking = [
    <RiEmotionNormalLine />,
    <RiEmotionLine />,
    <RiEmotionHappyLine />,
  ];
  const rankStatus = [
    'Nice Article',
    'Great Read!',
    'Absolutely Amazing Article!!',
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [localArticles, setLocalArticles] = useState('');
  const handleModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`articles/${article_id}`)
      .then((res) => {
        setLocalArticles(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [article_id]);

  const deleteArticles = (id) => {
    const amendedArticles = article.filter((article) => {
      return article.id !== id;
    });
    setGlobalArticles(amendedArticles);
  };

  const handleDelete = () => {
    axios
      .delete(
        `https://pintereachunit4.herokuapp.com/api/articles/${article_id}`
      )
      .then((res) => {
        console.log(res);
        deleteArticles(article_id);
      })
      .catch((err) => {});
  };
  // Blanket message for features coming soon
  const handleFeature = () => {
    alert('Feature Coming Soon!');
  };
  return (
    <>
      <Card className="CardContainer">
        <p className="title">Title: {title}</p>
        <p>
          Rank: {ranking[rank - 1]} {rankStatus[rank - 1]}{' '}
        </p>
        <p>Category: {category}</p>
        <a className="READMORE" href={link}>
          Read More
        </a>
        <p>Summary: {description}</p>
        <div>
          <Button className="primarybtn" primary onClick={handleModal}>
            <MdEdit /> Edit
          </Button>
          <Button className="primarybtn" primary onClick={handleFeature}>
            <RiArchiveDrawerLine />
            Archive
          </Button>
          <Button className="primarybtn" primary onClick={handleDelete}>
            <TiDelete />
            Delete
          </Button>
        </div>
      </Card>
      {isModalVisible ? (
        <div className="UpdateModalContainer">
          <UpdateModal
            setIsVisible={setIsModalVisible}
            editModal={localArticles}
            setEditModal={setLocalArticles}
            setGlobalArticles={setGlobalArticles}
          />
        </div>
      ) : null}
    </>
  );
};

export default ArticleCard;
