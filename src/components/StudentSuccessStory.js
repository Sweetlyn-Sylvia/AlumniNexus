import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const StudentSuccessStories = () => {
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/success-stories');
        const data = await response.json();
        setSuccessStories(data);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Alumni Success Stories</h1>
      <div className="row">
        {successStories.map((story) => (
          <div key={story._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{story.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  By: {story.alumniName} ({story.batch})
                </h6>
                <p className="card-text">{story.story}</p>
                <p className="card-text">
                  <strong>Achievements:</strong> {story.achievements}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSuccessStories;
