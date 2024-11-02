import Donation from "../donation/Donation"
import Header from "../header/Header"
import Itens from "../itens/Itens"
import OnTrend from "../onTrend/OnTrend"
import Reviews from "../reviews-customers/Reviews"
function HomePage(){
    return(
        <>
            <Header></Header>
            <Itens></Itens>
            <OnTrend></OnTrend>
            <Donation></Donation>
            <Reviews></Reviews>
        </>
    )
}
export default HomePage