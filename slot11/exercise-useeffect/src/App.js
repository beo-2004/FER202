import React, { useState } from "react";
import UserPosts from "./components/UserPosts";
import ValidatedInput from "./components/ValidatedInput";
import LoginForm from "./components/LoginForm";
import ComprehensiveForm from "./components/ComprehensiveForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">React Form Validation Examples</h1>
      
      <div className="mb-5">
        <h2>Exercise 1: User Posts</h2>
        <h3>Danh sách bài viết của người dùng {userId}</h3>
        <UserPosts userId={userId} />
        <button 
          className="btn btn-primary mt-3"
          onClick={() => setUserId(userId + 1)}
        >
          Xem bài viết của người dùng khác
        </button>
      </div>

      <div className="mb-5">
        <h2>Exercise 4: Basic Input Validation</h2>
        <ValidatedInput />
      </div>

      <div className="mb-5">
        <h2>Exercise 5: Email and Password Validation</h2>
        <LoginForm />
      </div>

      <div className="mb-5">
        <h2>Exercise 6: Comprehensive Form Validation</h2>
        <ComprehensiveForm />
      </div>
    </div>
  );
}

export default App;
