import { Suspense } from "react";

import { Product } from "../components/product";
import { Reviews } from "../components/reviews";

export default function ProductdetailPage(){
return (
    <div>
        <h1>Product detai lPage </h1>
        <Suspense fallback={<p>Loading Product details . . .</p>}>
            <Product/>
        </Suspense>
        <Suspense fallback={<p>Loading Review details . . .</p>}>
            <Reviews/>
        </Suspense>
        
    </div>
)
}