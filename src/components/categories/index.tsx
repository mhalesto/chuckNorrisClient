import * as React from 'react';
import { CategoriesContainer } from './styles';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Loading from '../../common-components/loading';

const CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const  Categories = () => {

  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return data.categories.map((category: any) => (
    <CategoriesContainer key={category}>
      <Link to={`/joke/${category}`}> 
        <a href="#" className="btn btn-secondary card">{category}</a>
      </Link>
    </CategoriesContainer>
  ));

}
export default Categories
