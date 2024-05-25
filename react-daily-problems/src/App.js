import logo from "./logo.svg";
import "./App.css";
import Accordian from "./Components/1.Accordian/lndex";
import PasswordGeneratoe from "./Components/2.Password Generator";
import ConditionalDropDowns from "./Components/3.Conditional Dropdowns";
import StarRating from "./Components/4.Star Rating/Index";
function App() {
  return (
    <div className="App">
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
