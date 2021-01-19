import * as React from 'react';
import { JokeContainer } from './styles';
import { useQuery, gql } from '@apollo/client';
import IJokeModel from '../../models/joke-model';
import Moment from 'react-moment';
import Loading from '../../common-components/loading';

const  Joke = (props: any) => {
  let { category } = props.match.params;

  const JOKE = gql`
  query GetJoke {
    joke(category: "${category}") {
      categories,
      icon_url,
      updated_at,
      url,
      value,
    }
  }
`;

  const { loading, error, data } = useQuery(JOKE);
  // const joke: IJokeModel = data.joke;

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <JokeContainer>
      <div className="card mb-3 jokecard" style={{maxWidth: 540}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`${data.joke.icon_url}`} className="card-img imgSize" alt="chuck norris icon" />
          </div>
          <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">{data.joke.categories}</h5>
              <p className="card-text">{data.joke.value}</p>
              <p className="card-text"><small className="text-muted">Last updated at: <Moment format="YYYY-MM-DD HH:mm">{data.joke.updated_at}</Moment> </small></p>
            </div>
          </div>
        </div>
      </div>
    </JokeContainer>
  );

}
export default Joke
