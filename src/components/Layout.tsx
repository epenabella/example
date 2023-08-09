// import { useLocation } from "react-router-dom";
// import { useMemo } from "react";
import Header from "./navigation/Header";

type Props = {
     children: React.ReactNode;
     routes: {name: string, path: string}[]
}

const Layout = ({routes, ...props}:Props) => {
//     const location = useLocation();
    
    return <div className='demo-layout'>
        <Header routes={routes}/>
        <main>{props.children}</main>
        {/* <Footer isHomePage={isRedesignPage}/> */}
      </div>
}

export default Layout;
