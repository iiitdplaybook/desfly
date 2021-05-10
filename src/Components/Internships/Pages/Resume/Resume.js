import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { HiDownload } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import PageFooter from '../../PageFooter';
import { metadata } from '../../metadata';
import '../global.css';
import './Resume.css';

const Resume = ({ callback, list }) => {
  const [focus, setFocus] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    dots: true,
    beforeChange: (current, next) => setFocus(next),
  };

  return (
    <div className='resume' style={{ width: '85%', margin: '0 auto' }}>
      <div className='upper_container'>
        <p style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>
          As recommended by students, for students.
        </p>
        <div style={{ width: 'auto', marginTop: '40px' }}>
          <button className='download'>
            <IconContext.Provider
              value={{
                color: '#03ccac',
                display: 'inline',
                marginRight: '5px',
              }}
            >
              {/* <a href={list[focus].linkedin}> */}
              <div className='icon'>
                <HiDownload />
              </div>
              {/* </a> */}
            </IconContext.Provider>
            Download the IIITD template
          </button>
        </div>
      </div>
      <div className='resume_slider'>
        <Slider {...settings}>
          {list.map((item, index) => (
            <div className='container'>
              <img
                className={focus === index ? 'resume_img active' : 'resume_img'}
                src={item.link}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='resume_details'>
        <div className='profile'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={list[focus].image} className='avatar' />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className='header'>
                <h1>{list[focus].name}</h1>
                <IconContext.Provider
                  value={{
                    color: 'black',
                    display: 'inline',
                  }}
                >
                  <div className='linkedin_icon'>
                    <FaLinkedinIn style={{ height: '20px', width: '20px' }} />
                  </div>
                </IconContext.Provider>
              </div>
              <div>Batch of {list[focus].batch}</div>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>The resume below worked for:</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {list[focus].tags.map((item) => (
              <div className='company_tag'>{item}</div>
            ))}
          </div>
        </div>
        <div className='full_resume'>
          <img src={list[focus].link} />
        </div>
      </div>
      <PageFooter
        settings={{
          left: {
            alignment: 'left',
            image: metadata['introduction'].image,
            redirect: {
              linkType: 'component',
              componentName: 'introduction',
            },
            setActive: callback,
            title: 'Introduction',
          },
          right: {
            alignment: 'right',
            image: metadata['preparation'].image,
            redirect: {
              linkType: 'component',
              componentName: 'preparation',
            },
            setActive: callback,
            title: 'Get started with internship preparation',
          },
        }}
      />
    </div>
  );
};

export default Resume;
