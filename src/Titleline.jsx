import react from "react";
import Sdata from "./Sdata";
import Card from "./Cards";


const Netflix = () => {
    return(
        <Card 
          key={Sdata[1].id} 
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          sName={Sdata[1].sName}
          link={Sdata[1].link}
        />
      );
}

export default Netflix;