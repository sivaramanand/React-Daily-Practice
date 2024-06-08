import logo from "./logo.svg";
import "./App.css";
import Accordian from "./Components/1.Accordian/lndex";
import PasswordGeneratoe from "./Components/2.Password Generator";
import ConditionalDropDowns from "./Components/3.Conditional Dropdowns";
import StarRating from "./Components/4.Star Rating/Index";
import ImageSlider from "./Components/5.Image Slider";
import Index from "./Components/101.flex check";
import LoadMore from "./Components/6.load more";
import TreeView from "./Components/9.tree view";
import QrCodeGenerator from "./Components/7. Qr code generator/Index";
import CustomScrollIndicator from "./Components/8.Custom Scroll Indicator";
import GithubProfileFinder from "./Components/10.github profile finder";
import menus from "./Components/9.tree view/data";
import MusicPlayer from "./Components/11.music player";
function App() {
  return (
    <div className="App">
      {/*<CustomScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      {/*<GithubProfileFinder></GithubProfileFinder>*/}
      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/*<TreeView menus={menus} />*/}
      <MusicPlayer></MusicPlayer>
    </div>
  );
}

export default App;
