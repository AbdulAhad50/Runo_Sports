import Home from "./components/Hero";
import CardSh from "./components/showCard";
import HeroBar from "./components/HeroBar";

export default function HomePage() {
  return (
    <div>
        <Home/>
        <HeroBar/>

        <div className="CardSH flex flex-col gap-6">
            <CardSh/>
            <CardSh/>
            <CardSh/>
            <CardSh/>
            <CardSh/>
            <CardSh/>
            <CardSh/>
        </div>
    </div>
  );
}
