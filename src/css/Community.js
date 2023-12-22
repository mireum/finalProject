import styled from 'styled-components';

export const CommunityInsertWrapper = styled.div`  // 커뮤니티 인서트 창
  background-color: #ccc;
  .a {
    background-color: #f0f0f0;
    height: 30px;
  }
  .b {
    display: flex;
    flex-flow: column;
    input, textarea {
      padding: 10px 0 ;
      margin: 10px 0;
      background-color: aliceblue;
    }
  }
  `;

// toktok 페이지
export const ToktokWrapper = styled.div`
  width: 1208px;
  height: 1000px;
  background-color: #ccc;
  h1 {
    font-size: 44px;
    font-weight: bold;
    color: #000;
    padding: 10px 20px;
  }
  .between {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .test {
    font-size: 33px;
    color: red;
    background-color: beige;
  }
`;
export const ToktokItemWrapper = styled.div`
  .abc {
    padding: 0 10px;
  }
`;
export const ToktokDetailWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #505050;
    height: 200px;
  }
`;
export const ToktokDetailCommentItemWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #f0f0f0;
    height: 30px;
  }
`;
