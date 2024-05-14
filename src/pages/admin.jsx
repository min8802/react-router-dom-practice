import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {

    const {password} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (password !== "1234") {
            navigate("/");
        }
    }, []);

    return (
      <div className="bg-blue-900 min-h-screen flex justify-center items-center">
        Admin
      </div>
    );
  };
  
  export default Admin;