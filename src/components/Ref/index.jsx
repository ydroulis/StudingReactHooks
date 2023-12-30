import { useEffect, useRef, useState, useMemo } from 'react';
import Proptypes from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('filho renderizado');
  return (
    <div>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const Ref = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const counter = useRef(0);

  console.log('pai renderizado');

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div>
      <h6>Renderizou: {counter.current}x</h6>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
};

Post.propTypes = {
  post: Proptypes.shape({
    id: Proptypes.number,
    title: Proptypes.string,
    body: Proptypes.string,
  }),
  handleClick: Proptypes.func,
};
