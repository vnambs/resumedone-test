import Image from "next/image";
import { MdListAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { TbClockHour3 } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import Dropdown from "../common/Dropdown/Dropdown";
import RoundedPictures from "../common/images/RoundedPictures";
import SideBarCssMdoule from "./sidebar.module.css";
import SideLink from "../common/Link";
export type sideBarListNavType = {
  text: string;
  href: string;
  icon: React.ReactElement;
};
  const dropdownList: sideBarListNavType[] = [
    { text: "Board 1", href: "#", icon: <Image src={"/directory.png"} alt={"Dir"} width={14} height={14} /> },
    { text: "Board 2", href: "#", icon: <Image src={"/directory.png"} alt={"Dir"} width={14} height={14} /> },
    { text: "Board 3", href: "#", icon: <Image src={"/directory.png"} alt={"Dir"} width={14} height={14} /> },
    { text: "Board agent 1", href: "#", icon: <Image src={"/lock.jpg"} alt={"Lock"} width={14} height={14} /> },
    { text: "Board agent 2", href: "#", icon: <Image src={"/lock.jpg"} alt={"Lock"} width={14} height={14} /> },
    { text: "Board agent 3", href: "#", icon: <Image src={"/lock.jpg"} alt={"Lock"} width={14} height={14} /> },
  ];
const SideBar = () => {
  


  const renderSideLinks = (links: any[]) => {
    return links.map((link, index) => (
      <SideLink key={index} href="#" icon={link.icon}>
        {link.text}
      </SideLink>
    ));
  };

  return (
    <div className={SideBarCssMdoule["container-sidebar"]}>
      <div className={SideBarCssMdoule.content}>
        <div className={SideBarCssMdoule.logo}>
          <Image src='/resumizeme.png' alt='Resumizeme Logo' width={114} height={24} />
        </div>

        <SideLink href={"#"} icon={<MdListAlt size={"1rem"} className={"text-grey"} />} isTitle={true}>
          My templates
        </SideLink>
        <SideLink href={"#"} icon={<BsSearch size={"1rem"} className={"text-grey"} />} isTitle={true}>
          Search
        </SideLink>

        <div>
          {renderSideLinks([
            { text: "Software Engineer" ,icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} />},
            { text: "Computer hardware engineer",icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} /> },
            { text: "Network Engineer",icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} /> },
            { text: "Technical Support",icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} /> },
            { text: "Network administrator" ,icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} />},
            { text: "Management" ,icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} />},
            { text: "Data analysis" ,icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} />},
            { text: "Computer technician" ,icon:<Image src={"/stars.png"} alt={"stars"} width={14} height={14} />},
          ])}
        </div>

        <div>
          {renderSideLinks([
            { text: "Past search 1",icon:<TbClockHour3 size={"1rem"} className={"text-gray"} />  },
            { text: "Past search 2",icon:<TbClockHour3 size={"1rem"} className={"text-gray"} />   },
            { text: "Computers and information...",icon:<TbClockHour3 size={"1rem"} className={"text-gray"} />   },
            { text: "Database Administrator",icon:<TbClockHour3 size={"1rem"} className={"text-gray"} />   },
            { text: "Computer security" ,icon:<TbClockHour3 size={"1rem"} className={"text-gray"} />  },
            { text: "Computer Systems Analyst",icon:<TbClockHour3 size={"1rem"} className={"text-gray"} />   },
          ])}
        </div>

        <div>
          <Dropdown
            title={
              <SideLink href={"#"} icon={<svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V7H3V2ZM3 9V14H13V9H3ZM6 5H10V4H6V5ZM10 12H6V11H10V12Z'
                      fill='#4C4C55'
                    />
                  </svg>} isTitle={true}>
                My boards
              </SideLink>
            }
          >
            {dropdownList.map((speciality, index) => (
              <SideLink key={index} href={speciality.href} icon={speciality.icon}>
                {speciality.text}
              </SideLink>
            ))}
          </Dropdown>
        </div>
      </div>

      <div className={SideBarCssMdoule.footer}>
        <div style={{ width: "32px", cursor: "pointer" }}>
          <RoundedPictures src={"/user.jpg"} width={32} height={32} alt='profile' />
        </div>
        <span style={{ cursor: "pointer" }}>
          <FaGear size={"1rem"} color={"#4C4C55"} />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
