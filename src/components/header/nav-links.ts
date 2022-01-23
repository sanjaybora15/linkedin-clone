import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const navLinks = [
    {
        title: "Home",
        linkTo: "",
        icon: HomeOutlinedIcon,
        active: true,
        pendingItem: false,
        externalLink: "",
    },
    {
        title: "Network",
        linkTo: "",
        icon: PeopleAltOutlinedIcon,
        active: false,
        pendingItem: false,
        externalLink: ""
    },
    {
        title: "Messaging",
        linkTo: "",
        icon: ChatBubbleOutlineOutlinedIcon,
        active: false,
        pendingItem: false,
        externalLink: ""
    },
    {
        title: "Notifications",
        linkTo: "",
        icon: NotificationsNoneOutlinedIcon,
        active: false,
        pendingItem: true,
        externalLink: ""
    },
    {
        title: "Jobs",
        linkTo: "",
        icon: WorkOutlineOutlinedIcon,
        active: false,
        pendingItem: false,
        externalLink: ""
    },
    {
        title: "Work",
        linkTo: "",
        icon: AppsOutlinedIcon,
        active: false,
        pendingItem: false,
        externalLink: ""
    }
]