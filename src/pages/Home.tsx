import HeroBanner from "../components/HeroBanner";
import ProductList from "./ProductList";

interface HomeProps {
    searchQuery: string;
}

const Home = ({searchQuery}: HomeProps) => {
    return(
        <>
            <HeroBanner />
            <ProductList searchQuery={searchQuery}/>
        </>
    );
};

export default Home;