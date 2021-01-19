import * as React from 'react';
import { CategoriesContainer } from './styles';

import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const  Categories = () => {

  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map((category: any) => (
    <CategoriesContainer key={category}>
      <a href="#" className="btn btn-secondary card">{category}</a>
    </CategoriesContainer>
  ));

}
export default Categories
