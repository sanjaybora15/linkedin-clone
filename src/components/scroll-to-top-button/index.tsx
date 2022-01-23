import React from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

interface IProps {
   onClick: () => void;
   label: string
}

const style: any = {
    borderRadius: 5,
    background: "white",
    padding: 20,
    fontWeight: 600,
    width: "100%",
    cursor: "pointer",
    border: "1px solid #e7e7e7",
}

const ScrollTOTopButton = (props: IProps) => {
    return(
        <React.Fragment>
           <button
               onClick={() => props.onClick()}
               style={style}
           >
               {props.label} &nbsp; <ArrowUpwardRoundedIcon/>
           </button>
        </React.Fragment>
    )
}

export default ScrollTOTopButton;
