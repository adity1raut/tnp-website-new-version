import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import EUpcoming from "./EUpcoming";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { news_list } from '../../../constants/index';
import Loading from "../../Utilities/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import {
  faNewspaper, faCalendarDays
} from "@fortawesome/free-solid-svg-icons";


const NewsSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Ensure the list of news items is taller than the container for the marquee effect
    const marqueeHeight = marqueeRef.current.clientHeight;
    const contentHeight = marqueeRef.current.scrollHeight;

    if (contentHeight > marqueeHeight) {
      gsap.to(marqueeRef.current, {
        y: -(contentHeight - marqueeHeight),
        repeat: -1,
        duration: 20, // Adjust speed of the animation
        ease: "none"
      });
    }
  }, [news_list]);

  return (
    <div className="sm:w-[50%] w-full p-2 h-96">
      <h2 className="mx-2 text-2xl"><FontAwesomeIcon icon={faNewspaper} className="mx-2" />Updates</h2>
      <div className="flex-col items-start justify-start w-[80%] mx-auto text-left" ref={marqueeRef}>
        {
          news_list.map((item, index) => (
            <>
              <div className="m-4" key={item.title}>
                {/* Your content goes here */}
                {/* <h3 className="text-xl text-center sm:text-2xl"><Link to='/studentSection' className='font-bold text-red-700 hover:text-red-700 hover:underline'>{item.title} <span className="text-sm">(See more)</span></Link></h3> */}
                <h3 className="text-xl text-center sm:text-2xl"><span className='font-bold text-red-700 hover:text-red-700 hover:underline'>{item.title}</span></h3>
                <p className="text-center">{item.news}</p>
                <p className="text-center">{item.dates}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

const EventsSection = () => {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEventList = async () => {
      setIsLoading(true);
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        let templist = res.data;
        templist.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
        setEventsList(templist.slice(0, 5));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchEventList();
    // console.log(eventsList)
  }, []);
  return (
    <>
      <div className="sm:w-[50%] w-full p-2">
        <h2 className="mx-2 text-2xl"><FontAwesomeIcon icon={faCalendarDays} className="mx-2" />Events & Workshops</h2>
        {isLoading ? (<Loading size="80" width="10" speed="1" />) : (
          <div className="flex-col items-center justify-center w-full align-middle sm:h-80 h-96">
            {
              eventsList.map((items, index) => {
                return (
                  <div className='flex-col items-start justify-center m-4 sm:m-1' key={index}>
                    <h3 className="">{items.eventName}</h3>
                    <p className="">{items.eventOrg} <span className="font-bold text-red-700 hover:underline hover:text-red-700">Dt:{items.eventDate != undefined ? items.eventDate.slice(0, 10) : ''}</span> </p>
                    {/* <span><Link to='/studentSection' className='font-bold text-red-700 hover:underline hover:text-red-700'>(See Details)</Link></span>  */}
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
    </>
  )
}

const NewsEvents = () => {
  return (
    <>
      <div className="flex flex-col m-2 nav-medium-light-shadows sm:flex-row">
        <NewsSection />
        <EventsSection />
      </div>
    </>
  )
}

export default SectionWrapper(NewsEvents, "");