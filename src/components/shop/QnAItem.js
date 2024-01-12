import React, { Fragment, useState } from 'react';
import { dateFormat } from '../../util';

function QnAItem(props) {
  const { status, title, content, date, _id, signUserNicname } = props.item;
  const [text, setText] = useState(false);

  const handleChange = () => {setText(prev => !prev)};

  return (
    <Fragment key={_id}>
      <tr key={_id} className={text ? 'borderBottom active' : 'borderBottom'} >
        <td className='status'>{status}</td>
        <td className='title cursor-pointer' onClick={handleChange}>{title}</td>
        <td className='author'>{signUserNicname}</td>
        <td className='date'>{dateFormat(date)}</td>
      </tr>
      {text &&
        <tr className='contentTr'>
          <td></td>
          <td className='title'>{content}</td>
        </tr>}
    </Fragment>
  );
}

export default QnAItem;