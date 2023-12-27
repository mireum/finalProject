import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ShopModal(props) {
  const navigate = useNavigate()
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>알림</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        장바구니에 상품을 담았습니다.<br />
        장바구니로 이동하시겠습니까?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">
          취소
        </Button>
        <Button variant="primary" onClick={() => navigate('/cart')}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShopModal;