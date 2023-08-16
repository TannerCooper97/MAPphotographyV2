import PortfolioHero from "../components/portfolio-components/portfolioHero";
import portfolioImages from "../components/portfolio-components/wedding-images";
import Masonry from "../components/GUI/masonry";

function PortfolioPage(){
    return(
        <>
            <PortfolioHero />
            <Masonry galleryImages={portfolioImages} />
        </>
    )
}
export default PortfolioPage;