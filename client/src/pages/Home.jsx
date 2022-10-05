import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const posts = [
    {
      id: 1,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaq6jjAODstTzlyqNh2Om7OOKDW8hGo02wA&usqp=CAU"
    },
    {
      id: 2,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://images.all-free-download.com/images/graphiclarge/nice_flower_204265.jpg" 
    },
    {
      id: 3,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://www.enwallpaper.com/wp-content/uploads/2021/04/cool-cat-wallpaper-suitable-for-all-mobiles-by-jcdesignerusa-dct0y5y-fullview.jpg" 
    },
    {
      id: 4,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUmSS3HNLfTRjoKyHrR13NZO_cDY1EzBYZg&usqp=CAU" 
    },
    {
      id: 5,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://images.pexels.com/photos/1486844/pexels-photo-1486844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    },
    {
      id: 6,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://static.saltinourhair.com/wp-content/uploads/2021/08/27130846/nice-france-9.jpg" 
    },
    {
      id: 7,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIndiQEWd0Cl9C_sKsQc8S-KyRWz5OEXF0Kw&usqp=CAU" 
    },
    {
      id: 8,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://cdn.sweetescape.com/images/city_photos/6157/mobile/thumbnail_sweetescape-nice-photography-d1a902d8-8ec4-464e-855c-b81c1d3c6e98.jpg" 
    },
    {
      id: 9,
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum dolor id lorem hendrerit, eu commodo tellus varius. Suspendisse",
      image: "https://static.toiimg.com/thumb/58495918/15027399_1439567879390663_7771844902277915250_n.jpg?width=1200&height=900" 
    }
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.image} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
