import Main from "./HomeTop/HomeTop";
import ExploreRentals from "./ExploreRentals/ExploreRentals";
import MostRental from "./MostRental/MostRental";
import ManageProperty from "./ManageProperty/ManageProperty";
import MainHeader from "../Headers/MainHeader/MainHeader";
function Home() {
    return (
    <>
        <MainHeader />
        <Main />
        <ExploreRentals />
        <MostRental />
        <ManageProperty />
    </>
    );
}

export default Home;
