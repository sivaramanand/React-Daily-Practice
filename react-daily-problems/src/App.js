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
import Index1 from "./Components/12.tip calculator";
import App1 from "./Components/13.countdown and stopwatch/stopwatch/Main";
import Todolist from "./Components/14. to do list";
import CurrencyConverter from "./Components/15.currency converter";
import NewsApp from "./Components/16.news app";
import Testimonialslider from "./Components/17.testimonial slider/testimonial slider";
function App() {
  return (
    <div className="App">
      {/*<CustomScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      {/*<GithubProfileFinder></GithubProfileFinder>*/}
      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/*<TreeView menus={menus} />*/}
      {/*<MusicPlayer></MusicPlayer>*/}
      {/*<Index1 />*/}
      {/*<App1 />*/}
      {/*<Todolist />*/}
      {/*<CurrencyConverter />*/}
      {/*<NewsApp />*/}
      <Testimonialslider />
    </div>
  );
}

export default App;
