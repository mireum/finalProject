import React from 'react';
import { useParams } from 'react-router-dom';
import { ToktokDetailWrapper } from '../../css/Community';
import ToktokDetailCommentItem from './ToktokDetailCommentItem';

function ToktokDetail(props) {

  const testlist = [
    {
      name: '준우',
      content: '이이야이야111'
    },
    {
      name: '하은',
      content: '이이야이야222'
    },
    {
      name: '민수',
      content: '이이야이야333'
    },
    {
      name: '지우최고',
      content: '이이야이야444'
    },
  ]


  const { postId } = useParams();

  return (
    <ToktokDetailWrapper>
      {postId} 강아지의 디테일 페이지지임임임임
      <div className='a'>
        사진 게시글 등등
      </div>
      <hr /><br />

      {testlist.map((testlistMap) => {
        return <ToktokDetailCommentItem
          name={testlistMap.name}
          content={testlistMap.content}
        />
      })}
    </ToktokDetailWrapper>
  );
}

export default ToktokDetail;