import Address from "./Components/Address";
import Hero from "./Components/Hero";
import Popular from "./Components/Popular";
import Recomended from "./Components/Recomended";
import AdminDashboard from "./Components/AdminDashboard";
export default function Home() {
  return (
    <>
      <Hero />
      <Address />
      <Popular/>
     <Recomended/>
     <AdminDashboard/>
    </>
  );
}
