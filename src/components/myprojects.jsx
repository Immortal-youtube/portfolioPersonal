import { Helmet } from "react-helmet";
import Navbar from "./navbar";


export default function MyProject(){
    return(
        
        <div>
            <Helmet>
            My Projects
            </Helmet>
            <Navbar />
            <p>Work in progress</p>
        </div>
    );
}