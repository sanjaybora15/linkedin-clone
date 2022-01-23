import React from "react";
import ShortProfileCard from "../../../components/short-profile-card";
import "./style.scss";

const widgetData = [
    {
        name: "Nina Douglas",
        desc: "Recruiter - Orange",
        profileId: "100",
        profileImage: "https://qph.fs.quoracdn.net/main-qimg-8a38a121a5ce6242e72d3bfbf276540f.webp"
    },
    {
        name: "Harry Caldwell",
        desc: "Lead Java Developer",
        profileId: "101",
        profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Hettie Patrick",
        desc: "UI/UX Designer",
        profileId: "102",
        profileImage: "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
    },
    {
        name: "Fannie Santiago",
        desc: "SEO specialist",
        profileId: "103",
        profileImage: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
    },
]

const Widgets = () => {
    return(
        <div className="theme-widget">
           <h1 className="theme-heading">People you may know</h1>
            {
                widgetData.length && widgetData.map((data, index) => {
                    return(
                        <ShortProfileCard
                            name={data.name}
                            desc={data.desc}
                            profileImg={data.profileImage}
                            id={data.profileId}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default Widgets;
