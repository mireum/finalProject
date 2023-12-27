import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .modalContent {
    background-color: #ffffff;
    width: 250px;
    height: 150px;
    padding: 15px;
  }
`;

function PayModal(props) {
  const modalBackground = useRef();
  const [show, setShow] = useState(props.show);

  return (
    <>
      {
        show &&
          <ModalContainer className='modalContainer' ref={modalBackground} onClick={(e) => {
            if (e.target === modalBackground.current) {
              setShow(false);
            }
          }}>
            <div className='modalContent'>
              <p>모달임요</p>
              <button onClick={() => {setShow(false)}}>닫기</button>
            </div>

          </ModalContainer>
      }
    </>
  );
}

export default PayModal;