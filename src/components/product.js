import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


function Product(){
    return(
        <div class="prod">

        <div class="box">
            <img src={one} alt="image"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non ut nesciunt? Voluptates, blanditiis! Error iste consectetur eligendi molestias deleniti.</p>
        </div>

        <div class="box">
        <img src={two} alt="villian"></img>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora porro facilis eligendi maiores iste odit exercitationem harum, at amet consectetur?</p>
        </div>

        <div class="box">
        <img src={three} alt="Design"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure ipsam eum saepe? Incidunt asperiores voluptatum nobis libero laudantium? Recusandae?</p>
       </div>

    </div>
    )
}

export default Product