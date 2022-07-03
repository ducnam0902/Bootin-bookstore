import FeatureAuthor from "@bootin/components/FeatureAuthor";
import Policy from "@bootin/components/Policy";
import PopularBook from "@bootin/components/PopularBook";
import Slide from "@bootin/components/Slide";
import WonderfulGift from "@bootin/components/WonderfulGift";

const Homepage = () => {
  return (
    <div>
      <Slide />
      <Policy />
      <PopularBook />
      <FeatureAuthor />
      <WonderfulGift />
    </div>
  );
};

export default Homepage;
