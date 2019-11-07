import { getGlobal } from '../../utils/electron';

import Link from 'umi/link';


function Index() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{ getGlobal('title') }</h1>
      <br />
      <br />
      <img src={require('../../assets/yay.jpg')} width='400' />

      <div>
        <Link to="/list">去列表页</Link>
      </div>
    </div>
  );
}

export default Index;
