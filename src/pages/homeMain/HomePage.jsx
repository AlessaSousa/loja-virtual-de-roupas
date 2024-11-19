import Cover from "../coverHeader/Cover"
import Donation from "../donation/Donation"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Itens from "../itens/Itens"
import OnTrend from "../onTrend/OnTrend"
import Reviews from "../reviews-customers/Reviews"
function HomePage(){
    
    return(
        <>
            <Header></Header>
            <Cover></Cover>
            <Itens></Itens>
            <OnTrend></OnTrend>
            <Donation></Donation>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    )
}
export default HomePage