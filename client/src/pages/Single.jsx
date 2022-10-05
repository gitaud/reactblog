import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

export default function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
          <div className="info">
            <span>Alicia</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className='link' to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h1>
        <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue metus, rutrum ac elit vel, tincidunt molestie orci. Integer arcu velit, pharetra eu leo in, egestas hendrerit lacus. Aenean faucibus, ante vel suscipit pretium, mauris arcu gravida dolor, a egestas felis mi eget ante. Duis elementum lobortis justo, vitae tincidunt erat imperdiet id. 
        </p>
        <br />
        <p>
          Nunc elementum justo et urna rutrum accumsan. Nullam vehicula dui ac ligula hendrerit, a suscipit metus luctus. Maecenas id nisi lorem. In mauris velit, porttitor et aliquam commodo, molestie non dui. Nam ut pretium est. Praesent aliquet lacinia nisl in interdum. 
        </p>
        <br />
        <p>
          Integer consequat nibh nec congue fermentum. Mauris a elit at mauris suscipit faucibus nec ac neque. Nam magna velit, convallis sodales mollis in, condimentum in magna.
        </p>
        <br />
        <p>
          Vivamus tincidunt risus sed turpis maximus egestas et vel massa. Donec gravida pellentesque consequat. Praesent sed nisl sit amet tortor lacinia iaculis sed eget massa. Duis eu lorem non magna condimentum auctor id ac arcu. 
        </p>
        <br />
        <p>
          Sed sollicitudin enim in erat aliquet tincidunt. Aliquam pharetra faucibus nunc ac cursus. Vestibulum ac enim a erat faucibus imperdiet sit amet id metus. Proin non libero eget odio tempus sagittis at dapibus augue. 
        </p>
        <br />
        <p>
          Donec rutrum magna non justo viverra facilisis. Donec aliquet ex non leo aliquet convallis. Fusce semper enim erat, pretium eleifend nisi faucibus eu. Mauris tempus tempor vulputate. Nunc justo lectus, fermentum in risus eget, lobortis sollicitudin tortor. Nullam pulvinar luctus lacinia.
        </p>
        <br />
        <p>
          Aliquam erat volutpat. Mauris lacinia quis turpis vel ultricies. Phasellus sit amet purus non augue pulvinar ultrices. Nulla sagittis, risus nec tempor imperdiet, neque libero consequat augue, at mattis nulla orci in orci. Donec eros metus, mollis et posuere sit amet, dapibus quis nulla. Proin feugiat viverra felis id varius. 
        </p>
        <br />
        <p>

          Pellentesque aliquet ligula sit amet ex gravida ullamcorper. Donec pharetra orci purus, sit amet cursus massa tincidunt eget. Pellentesque sollicitudin metus sed molestie lacinia. Pellentesque molestie rhoncus ante vitae luctus. Nullam interdum velit mi. Aenean ac odio tempor, vestibulum felis at, sagittis sapien. Mauris at malesuada felis, in lobortis nisl. Nam id mi lor
        </p>
        </div>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}
