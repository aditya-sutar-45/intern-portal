import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="hero h-[92.5vh]">
      <div className="hero-content text-center">
        <div className="w-screen">
          <h1 className="text-5xl font-bold font-chivo m-4">
            <span className="font-lora font-normal italic">
              Welcome to the{" "}
            </span>{" "}
            Intern Portal!
          </h1>
          <button
            className="btn btn-primary font-lora"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashbaord <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
