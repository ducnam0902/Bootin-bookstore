import FeatureAuthor from "@bootin/components/FeatureAuthor";
import Policy from "@bootin/components/Policy";
import PopularBook from "@bootin/components/PopularBook";
import Slide from "@bootin/components/Slide";

const Homepage = () => {
  return (
    <div>
      <Slide />
      <Policy />
      <PopularBook />
      <FeatureAuthor />
    </div>
  );
};

export default Homepage;
