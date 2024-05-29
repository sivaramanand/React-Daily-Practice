import logo from "./logo.svg";
import "./App.css";
import Accordian from "./Components/1.Accordian/lndex";
import PasswordGeneratoe from "./Components/2.Password Generator";
import ConditionalDropDowns from "./Components/3.Conditional Dropdowns";
import StarRating from "./Components/4.Star Rating/Index";
import ImageSlider from "./Components/5.Image Slider";
import Index from "./Components/101.flex check";
function App() {
  return (
    <div className="App">
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
    </div>
  );
}

export default App;
