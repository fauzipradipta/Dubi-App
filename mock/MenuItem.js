import SVG, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import tools from '../assets/Tools.svg';
import {Image} from 'react-native';

const MenuItem = [
    {   
        id: 1,
        title: 'Home',
        icon: ( 
            <SVG width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/SVG">
                <Path 
                    d="M4.7998 14.1331V7.46647H8.7998V14.1331M0.799805 5.46647L6.7998 0.799805L12.7998 5.46647V12.7998C12.7998 13.1534 12.6593 13.4926 12.4093 13.7426C12.1592 13.9927 11.8201 14.1331 11.4665 14.1331H2.13314C1.77952 14.1331 1.44038 13.9927 1.19033 13.7426C0.94028 13.4926 0.799805 13.1534 0.799805 12.7998V5.46647Z" 
                    stroke="#1E1E1E" 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </SVG>
        ) 
    },
    {
        id: 2,
        title: 'Profile',
        icon: (
            <SVG width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/SVG">
                <Path 
                    d="M11.4665 12.7998V11.4665C11.4665 10.7592 11.1855 10.081 10.6854 9.58085C10.1853 9.08076 9.50705 8.7998 8.7998 8.7998H3.46647C2.75923 8.7998 2.08095 9.08076 1.58085 9.58085C1.08076 10.081 0.799805 10.7592 0.799805 11.4665V12.7998M8.7998 3.46647C8.7998 4.93923 7.6059 6.13314 6.13314 6.13314C4.66038 6.13314 3.46647 4.93923 3.46647 3.46647C3.46647 1.99371 4.66038 0.799805 6.13314 0.799805C7.6059 0.799805 8.7998 1.99371 8.7998 3.46647Z" 
                    stroke="#1E1E1E" 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </SVG>
        )
    }, 
    {
        id: 3,
        title: 'Trackers',
        icon: (
            <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/SVG">
                <G clipPath="url(#clip0_173_1519)">
                    <Path 
                        d="M8.00016 5.99985V7.99985L9.00016 8.99985M11.0068 11.5665L10.7735 14.1199C10.7435 14.4523 10.5898 14.7614 10.343 14.986C10.0961 15.2107 9.77394 15.3345 9.44016 15.3332H6.5535C6.21972 15.3345 5.89757 15.2107 5.6507 14.986C5.40383 14.7614 5.2502 14.4523 5.22016 14.1199L4.98683 11.5665M4.9935 4.43318L5.22683 1.87985C5.25677 1.54857 5.40945 1.24044 5.65491 1.01595C5.90036 0.791462 6.22086 0.666828 6.5535 0.666515H9.4535C9.78728 0.665161 10.1094 0.789047 10.3563 1.0137C10.6032 1.23835 10.7568 1.54742 10.7868 1.87985L11.0202 4.43318M12.6668 7.99985C12.6668 10.5772 10.5775 12.6665 8.00016 12.6665C5.42283 12.6665 3.3335 10.5772 3.3335 7.99985C3.3335 5.42252 5.42283 3.33318 8.00016 3.33318C10.5775 3.33318 12.6668 5.42252 12.6668 7.99985Z" 
                        stroke="#1E1E1E" 
                        strokeWidth="1.6" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_173_1519">
                        <Rect width="16" height="16" fill="white"/>
                    </ClipPath>
                </Defs>
            </SVG>
        )
    },

    {
        id:4,
        title: 'Flow Chart',
        icon: (
            <SVG width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/SVG">
                <Path d="M15.3332 0.799805L8.99984 7.13314L5.6665 3.7998L0.666504 8.7998M15.3332 0.799805H11.3332M15.3332 0.799805L15.3332 4.7998" stroke="#1E1E1E" 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </SVG>

        )
    },
    {
        id:5, 
        title:'Goals', 
        icon:(
            <SVG width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clippath="url(#clip0_173_1514)">
                    <Path d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z" stroke="#1E1E1E" 
                        strokeWidth="1.6" 
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                    <Path d="M8.00016 12.0002C10.2093 12.0002 12.0002 10.2093 12.0002 8.00016C12.0002 5.79102 10.2093 4.00016 8.00016 4.00016C5.79102 4.00016 4.00016 5.79102 4.00016 8.00016C4.00016 10.2093 5.79102 12.0002 8.00016 12.0002Z" stroke="#1E1E1E" 
                        strokeWidth="1.6"  
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                    <Path d="M8.00016 9.3335C8.73654 9.3335 9.3335 8.73654 9.3335 8.00016C9.3335 7.26378 8.73654 6.66683 8.00016 6.66683C7.26378 6.66683 6.66683 7.26378 6.66683 8.00016C6.66683 8.73654 7.26378 9.3335 8.00016 9.3335Z" stroke="#1E1E1E"  
                        strokeWidth="1.6"   
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                </G>
                <Defs>
                <ClipPath id="clip0_173_1514">
                <Rect width="16" height="16" fill="white"/>
                </ClipPath>
                </Defs>
            </SVG>

        )
    },
    {
    id: 6,
    title: 'Tools', 
    // icon: (
    //     <SVG width="16" height="16" viewBox="0 0 18 18" fill="none">
    //         <G stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    //         {/* Wrench/screwdriver shape */}
    //         <Path d="M5 4.5L4 5.5L5.5 7L7 5.5L5 4.5Z" />
    //         <Path d="M12.5 11L11.5 12L13 13.5L14.5 12L12.5 11Z" />
    //         {/* Handle */}
    //         <Path d="M8.5 2.5L4.5 6.5" />
    //         <Path d="M13.5 9L9.5 13" />
    //         {/* Screw heads */}
    //         <Path d="M3.5 8.5C3.5 9.60457 4.39543 10.5 5.5 10.5C6.60457 10.5 7.5 9.60457 7.5 8.5C7.5 7.39543 6.60457 6.5 5.5 6.5C4.39543 6.5 3.5 7.39543 3.5 8.5Z" />
    //         <Path d="M10.5 13.5C10.5 14.6046 11.3954 15.5 12.5 15.5C13.6046 15.5 14.5 14.6046 14.5 13.5C14.5 12.3954 13.6046 11.5 12.5 11.5C11.3954 11.5 10.5 12.3954 10.5 13.5Z" />
    //         </G>
    //     </SVG>

    // )
    }
];

export default MenuItem;