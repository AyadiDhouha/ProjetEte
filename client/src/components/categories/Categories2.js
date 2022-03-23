import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import axios from "axios"

export default function Categories() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, []);
  
  return (
    <div className="main-container">
    
      <div className="filter-container">
        <div className="category-head">
          <ul>
            <Link to={`/courses`} className="link">
              <div  className="category-title">
                <li >All</li>
              </div>
            </Link>

            {cats.map((c) => (
              <Link to={`/coursescat/?cat=${c.name}`} className="link">
                <div  className="category-title">
                  <li >{c.name}</li>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div >
    </div>
  );
}