export const getVideoCarouselData = () => {
  return [
    {
      intro: 'Welcome to the',
      title: 'Indian Space Research Organization',
      description: '',
      videoPath: 'videos/earth.mp4',
      link: ''
    },
    {
      intro: 'Mission',
      title: 'Chandrayaan 3',
      description: 'Chandrayaan 3 is a follow-on mission to chandrayaan 2 to demonstrate end-to end capability in safe landing and roving on the lunar surface. It consist of Lander and Rover configuration.',
      videoPath: 'videos/moon.mp4',
      link: '/missions/chandrayaan-3'
    },
    {
      intro: 'Project',
      title: 'Bhoonidhi',
      description: 'Bhoonidhi enables access to our extensive archive of Remote Sensing data of 46 satellites, including Indian and Remote Sensing sensors acquired over 33 years.',
      videoPath: 'videos/bhoonidhi.mp4',
      link: '/project/bhoonidhi'
    }
  ];
};

export const getFlashNewsData = () => {
  return [
    'Aditya-L1 solar observatory is successfully inserted into Halo-Orbit around Sun-Earth L1.',
    'XPoSat is launched successfully by PSLV-C58.',
    'RESPOND BASKET 2023 - Last date for submission of proposals extended till February 7, 2024.',
    'Mission Gaganyaan: TV D1 Test Flight is accomplished.',
    'Aditya-L1: HEL1OS captures first High-Energy X-ray glimpse of Solar Flares.',
  ];
};