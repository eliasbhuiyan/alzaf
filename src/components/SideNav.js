import Link from "next/link"
import { FaChevronRight,FaPrint,FaBasketballBall,FaCarSide } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import { PiFlowerLotusLight,PiWatchBold,PiTelevisionSimpleBold  } from "react-icons/pi";
import { IoIosMan } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { MdElectricBolt,MdOutlinePets } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoPhonePortraitSharp } from "react-icons/io5";

export const SideNav = () => {
  return (
    <div className="w-[230px] bg-white py-1.5 pl-1.5 absolute top-full left-0 mt-3">
        <ul className="menu_item">
            <li>
                <Link href='#'>
                    <CgGirl />
                    <span>Womens’ & Girls’ Fashion</span>
                    <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <PiFlowerLotusLight />
                <span>Health & Beauty</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <PiWatchBold />
                <span>Watches, Bags, Jewellery</span>
                <FaChevronRight className="arrow"/>
                </Link>
                <div className="watch-submenu">
                    <ul className="menu_item">
                        <li>
                            <Link href='#'>kids bags
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>laptop bags & cases
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>Luggage
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>Travel Bags
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>Men’s bag
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>Women’s Bag
                             <FaChevronRight className="arrow"/>
                            </Link>
                            <div className="womenBag-submenu">
                                <ul className="menu_item">
                                    <li>
                                        <Link href='#'>Backpacks</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Cross Body & Shulder Bags</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Bag Charms& Accessories</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Clutches</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Top-Handle Bags</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Tote bags</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>wallets</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href='#'>Men’s Watches
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>Women’s Watches
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>Kids Watches
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>women’s jewellery
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>men’s jewellery
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>sunglasses
                             <FaChevronRight className="arrow"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <Link href='#'>
                <IoIosMan />
                <span>Men's & Boys' Fashion</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <RiParentLine />
                <span>Mother & Baby</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <FaPrint />
                <span>Electronics Devices</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <PiTelevisionSimpleBold />
                <span>TV & Home Appliances</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <MdElectricBolt />
                <span>Electronic Accessories</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <FaBasketShopping />
                <span>Groceries</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <CiHome/>
                <span>Home & Lifestyle</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <FaBasketballBall />
                <span>Sports & Outdoors</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <FaCarSide />
                <span>Automobile </span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <IoPhonePortraitSharp />
                <span>Computer and laptop </span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                <MdOutlinePets />
                <span>Pet Supplies</span>
                <FaChevronRight className="arrow"/>
                </Link>
            </li>
        </ul>
    </div>
  )
}
