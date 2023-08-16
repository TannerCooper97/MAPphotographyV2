import ServiceHero from "../components/services-components/ServiceHero";
import ServiceProducts from "../components/services-components/ServiceProducts";
import "../styles/services-styles/service.scss";


function ServicesPage(){
    return(
        <main className=".main-services">
            <div>
            <ServiceHero/>
            </div>
            <div>
            <ServiceProducts/>
            </div>
        </main>
    )
}
export default ServicesPage;