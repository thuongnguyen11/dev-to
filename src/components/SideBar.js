
// import './Header.css';

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function SideBar() {
    return (
        <div className="m-4">
            <h1 className="font-bold text-lg pb-4">DEV Community</h1>
            <ul>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Home</div>
                </li>
                <li className="flex py-2">
                    <FeaturedPlayListIcon className="mr-3" />
                    <div>Listings</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Podcasts</div>
                </li>
                <li className="flex py-2">
                    <VideoLibraryIcon className="mr-3" />
                    <div>Video</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Tags</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>FAQ</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Forem Shop</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Sponsors</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>About</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Contact</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Guides</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Software comparisons</div>
                </li>

            </ul>

            <h1 className="font-bold text-lg pt-6 pb-4">Other</h1>
            <ul>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Code of Conduct</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Private Policy</div>
                </li>
                <li className="flex py-2">
                    <HomeWorkIcon className="mr-3" />
                    <div>Teams of use</div>
                </li>
            </ul>

            <ul className="flex pt-4">
                <li className="mr-4"><TwitterIcon /></li>
                <li className="mr-4"><FacebookIcon /></li>
                <li className="mr-4"><GitHubIcon /></li>
                <li className="mr-4"><InstagramIcon /></li>
                <li className="mr-4"><InstagramIcon /></li>
                <li className="mr-4"><InstagramIcon /></li>
            </ul>
        </div>
    )
}

export default SideBar;