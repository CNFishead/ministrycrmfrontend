import { RiHome2Fill } from "react-icons/ri";
import { MdVideoLibrary, MdPlaylistPlay, MdSettings, MdLiveTv, MdLiveHelp, MdAttachMoney } from "react-icons/md";
import { FaRegBell, FaMoneyCheckAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsBox, BsBroadcastPin } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";

import { BsFillPeopleFill } from "react-icons/bs";

import { IoAnalyticsSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";

export const navigation = (options?: any) => {
  return {
    home: {
      title: "Home",
      links: {
        home: {
          title: "Home",
          link: "/",
          icon: <RiHome2Fill />,
        },
      },
      hidden: options?.user ? false : true,
      // subLinks: {
      //   analytics: {
      //     title: 'Analytics',
      //     link: '/home/analytics',
      //     icon: <IoAnalyticsSharp />,
      //   },
      // },
    },
    ministries: {
      title: "Ministry Details",
      links: {
        ministries: {
          title: "Ministries",
          link: "/ministries",
          icon: <BsBox />,
        },
        staff: {
          title: "Staff",
          link: "/staff",
          icon: <BsFillPeopleFill />,
          sub_links: {
            new_staff: {
              title: "New Staff",
              link: "/staff/new",
              icon: (
                <>
                  <AiOutlinePlus />
                  <BsFillPeopleFill />
                </>
              ),
            },
          },
        },
      },
      hidden: options?.user ? false : true,
    },
    members: {
      title: "Members",
      links: {
        members: {
          title: "Members",
          link: "/members",
          icon: <BsFillPeopleFill />,
        },
        families: {
          title: "Families",
          link: "/families",
          icon: <BsFillPeopleFill />,
        }
      },
      hidden: options?.user ? false : true,
    },
    account_details: {
      title: "Account Details",
      links: {
        account_details: {
          title: "Edit Account Settings",
          link: "/account_details",
          icon: <CgProfile />,
        },
      },
      hidden: options?.user ? false : true,
    },
    auth: {
      title: "Auth",
      links: {
        login: {
          title: "Login",
          link: "/auth/login",
          icon: <CgProfile />,
          hidden: false,
        },
        register: {
          title: "Register",
          link: "/auth/register",
          icon: <CgProfile />,
        },
        forgot_password: {
          title: "Forgot Password",
          link: "/auth/forgotpassword",
          icon: <CgProfile />,
        },
        reset_password: {
          title: "Reset Password",
          link: "/auth/resetpassword",
          icon: <CgProfile />,
        },
      },
      hidden: options?.user ? true : false,
    },
  };
};
