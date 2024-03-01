import Carousel from "./components/Carousel";
import Products from "./products/components/Products";


export default function Home() {
  return (
    <div className="mt-12 px-12 flex flex-col items-center gap-8">
      <Carousel />
      <Products />
    </div>
  )
}
