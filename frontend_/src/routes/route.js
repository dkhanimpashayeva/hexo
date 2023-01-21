import Mainroot from "../layouts/Mainroot";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import AddTestimonials from "../pages/AddTest/AddTestimonials";

const ROUTES=[
    {
        path:"/",
        element:<Mainroot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
           {
            path:'about',
            element:<About/>
           },{
            path:'blog',
            element:<Blog/>
           },
           {
            path:'contact',
            element:<Contact/>
           },
           {
            path:'projects',
            element:<Projects/>
           },
           {
            path:'services',
            element:<Services/>
           },
           {
            path:'addtestimonials',
            element:<AddTestimonials/>
           }

        ]
    
    
    }
]
export default ROUTES