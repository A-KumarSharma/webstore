import { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // For navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send(
      'ak-sharma',
      'template_8vn678o',
      formData,
      'Uiklll5qn78NbRXx5'
    ).then((result) => {
        console.log(result.text);
        navigate("/"); // Redirect to the homepage after sending the email
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div  className='dark:bg-slate-900 dark:text-white' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img   src="R (1).png" alt="" style={styles.profileImage} />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

        <label htmlFor="message">Message:</label>
        <textarea className="dark:bg-slate-900 dark:text-white" id="message" name="message" value={formData.message} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'none' }} />

        <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', background: '#007BFF', color: '#fff', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: '500px',
    height: 'auto',
    borderRadius: '100px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  
  }

};