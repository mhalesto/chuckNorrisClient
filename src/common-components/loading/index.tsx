import * as React from 'react';
import { LoadingContainer } from './styles';
import loadingImg from '../../assets/loading.gif';

const Loading = () => {

  return (
    <LoadingContainer>
      <div className="card">
        <img src={loadingImg} className="loadingImgSize" alt="chuck norris icon" />
      </div>
    </LoadingContainer>
  );
}
export default Loading
