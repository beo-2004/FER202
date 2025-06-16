import React, { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error("Lỗi khi lấy dữ liệu");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Có lỗi xảy ra:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
};

export default UserPosts; 