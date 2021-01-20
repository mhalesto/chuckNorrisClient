import React, { useState } from 'react';
import { CategoriesContainer } from './styles';
import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import Loading from '../../common-components/loading';
import { useSelector, useDispatch, connect } from 'react-redux';
import { receiveCategories } from '../../store/actions/categories';
import { bindActionCreators } from 'redux';
import categories from '../../store/reducers/categories';

const CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(CATEGORIES);

  React.useEffect(() => {
    dispatch(receiveCategories(data));
  }, [dispatch, data])

  const store: any = useSelector((categories) => categories);
  console.log('Store is:', store);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  
  if (store) {
    return data.categories.map((category: any) => (
      <CategoriesContainer key={category}>
        <Link to={`/joke/${category}`}> 
          <div className="card cardStyle" style={{ alignItems: 'center'}}>
            <h3 className="h3">{category}</h3>
          </div>
        </Link>
      </CategoriesContainer>
    ));
  }
}

function mapStateToProps() { return {} }
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ ...categories }, dispatch);
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories))
