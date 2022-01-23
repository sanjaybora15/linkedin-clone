import React from "react";
import ProfileCard from "../../../components/profile-card";
import "./style.scss";

const Sidebar = () => {
    return(
        <div className="theme-sidebar">
            <ProfileCard
                name="Lucille Montgomery"
                description="UI/UX Designer"
                imageLink="https://qph.fs.quoracdn.net/main-qimg-8a38a121a5ce6242e72d3bfbf276540f.webp"
                profileLink="https://linkedIn.com/in/lucille.."
                connectionCount={767}
                viewsCount={60}
                onEditClick={() => null}
            />
        </div>
    )
}

export default Sidebar;
