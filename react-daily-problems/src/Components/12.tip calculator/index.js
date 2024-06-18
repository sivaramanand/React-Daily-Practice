import React,{useState,useEffect} from 'react'
import "./style.css"
const Index1 = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await response.json();
        setUser(data.results[0]);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      fetchUser();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div className="user-container">
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
        <button onClick={fetchUser}>Get New User</button>
      </div>
    );
}

export default Index1
