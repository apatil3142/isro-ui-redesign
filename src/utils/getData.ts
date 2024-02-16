import Insat3ds from '../assets/insat_3ds_sdsc.png';
import AdityaL1 from '../assets/adityal1_mag_boom_deployment_2.png';
import POEM3 from '../assets/POEM3.jpg';
import PSLVC58 from '../assets/PSLV-C58.png';
import PSLVC57 from '../assets/PSLVC56_PostImg.jpg.webp';
import GSLVF14 from '../assets/GSLVF14.jpg';
import GAGANYANTVD1 from '../assets/gaganyaan-mission-170618618-3x4.webp';

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

export const getLatestNews = () => {
  return [
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'Aditya_L1_MAG_Boom_Deployment',
      title: 'Successful Deployment of Magnetometer Boom on Aditya-L1 in Halo Orbit',
      description: `The 6-meter long magnetometer boom on the Aditya-L1 satellite has been successfully deployed. It is deployed in the Halo orbit at the Lagrange point L-1, 
      on January 11, 2024. The boom had been in stowed condition for 132 days since the Aditya-L1 launch. The boom carries two state-of-the-art, high-accuracy fluxgate 
      magnetometer sensors that measure the low intensity interplanetary magnetic field in space. The sensors are deployed at distances of 3 and 6 meters from the spacecraft body. 
      Mounting them at these distances minimizes the impact of the spacecraft generated magnetic field on measurements. , and using two of them assists precise estimation of this 
      influence.The dual sensor system facilitates cancelling out the spacecraft's magnetic influence. The boom segments are constructed from carbon fibre reinforced polymer and 
      serve as interfaces for the sensor mounting and mechanism elements. The articulated boom mechanism comprises 5 segments interconnected through spring-driven hinge mechanisms, 
      allowing for folding and deploying actions. The deployment occurs in an accordion fashion, controlled by a novel patented Kevlar closed control loop mechanism, with hinges 
      locking the segments into the deployed configuration. During the stowed condition, the boom is securely held in position by two hold-downs, transferring launch loads to the 
      spacecraft body. A thermal cutter-based release system is employed to execute the boom deployment on command. Date received through the telemetry switches confirm the hold-down 
      release, first motion, and locking of all hinges. The observed in-orbit deployment time was approximately 9 s, well within the predicted range of 8 to 12 s. All telemetry 
      indications for hinge locking and hold-down release were within nominal parameters.`,
      thumbnail: AdityaL1,
    },
    {
      id: 'POEM-3_Mission_achieves_Payload_objectives',
      title: 'POEM-3 Mission achieves all its Payload objectives',
      description: `POEM-3, the PSLV Orbital Experimental Module-3, India’s unique inexpensive space platform using the spent PS4 stage of the PSLV-C58 vehicle that launched XPoSat 
      on January 1, 2024, has successfully achieved all its objectives. After deploying the satellite into its intended orbit at 650 km, the vehicle was lowered to 350 km circular 
      orbit to minimize the time of orbit decay after completion of the experiment. It is a three-axis-attitude controlled platform with power generation and telecommand & telemetry 
      capabilities, for supporting Payloads. By 25th day in orbit, POEM-3 completed 400 orbits. Its current orbit measures around 322 km by 352 km. It is predicted that POEM-3 will continue orbiting for approximately 
      73 more days before re-entering the Earth’s atmosphere. POEM-3 flew with nine Payloads from VSSC, PRL, Academia, and Space start-ups inducted through IN-SPACe. Over this period, each payload was put into operation, 
      as planned and performance was demonstrated. The experiments of ARKA200 (Xenon Based Electric Propulsion) and RUDRA (HAN based Green Propellant Thruster) from Bellatrix, 
      and LEAP-TD (Satellite Bus with VHF/UHF Downlink & UHF Uplink – Tested using IIST ground station) from Dhruva Space were completed. Payload Data is collected regularly for 
      WeSAT (Solar irradiance and UV Index study) from LBS Institute of Technology for Women, BeliefSat0(Amateur Radio satellite) from KJ Somayia Institute of Technology, 
      RSEM (Radiation Shielding experiment) from TakeMe2Space, and DEX (interplanetary Dust particle experiment) from PRL for every orbit. 100 W Fuel Cell Power System(FCPS) and 
      Si-C based High Power Li-Ion (10AH/32V) Battery from VSSC were also demonstrated. Thus all payload objectives were fully met. In missions of POEM-1 to POEM-3, ISRO has flown 
      a total of 21 payloads from various institutes and industries. After achieving all objectives, more experiments with POEM-3 are planned for generating data for future missions 
      including upcoming POEM configurations. With the orbital decay and reentry of POEM-3 in three months, PSLV-C58 XPoSat mission will be leaving zero debris in space.`,
      thumbnail: POEM3,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
    {
      id: 'INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR',
      title: 'INSAT-3DS Satellite Flagged off to SDSC-SHAR',
      description: `INSAT-3DS, is an exclusive meteorological satellite realized by ISRO with the primary objective to provide continuity of services to 
      the existing in-orbit INSAT-3D and 3DR satellites and significantly enhancing the capabilities of INSAT system is flagged off to SDSC-SHAR launch port 
      on January 25, 2024 for the launch onboard GSLV F14. The Satellite had successfully completed Satellite Assembly, 
      Integration & Testing activities at U R Rao Satellite Centre, Bengaluru. Pre-Shipment Review (PSR) was held with the participation of members from 
      user community on January 25, 2024. The satellite is a user funded project with Ministry of Earth Science (MoES), configured around ISRO's well proven I-2k 
      bus platform with a Lift-Off Mass of 2275 kg. Indian Industries have significantly contributed in the making of the Satellite.
      The satellite is designed for enhanced meteorological observations and monitoring of land and ocean surfaces for weather forecasting and disaster warning, 
      with state-of-the-art payloads viz., 6 channel Imager & 19 channel Sounder meteorology payloads, communication payloads viz., 
      The Data Relay Transponder (DRT) and Satellite aided Search and Rescue (SAS&R) transponder. The Data relay transponder (DRT) instrument, receives meteorological, 
      hydrological and oceanographic data from automatic Data Collection Platforms / Automatic Weather Stations (AWS) and augments the weather forecasting capabilities. 
      Satellite aided Search and Rescue (SAS&R) transponder is incorporated in the satellite to relay a distress signal alert detection from the beacon transmitters for 
      search and rescue services with global receive coverage.`,
      thumbnail: Insat3ds,
    },
  ];
};

export const getRecentUpdates = () => {
  return [
    {
      id: 'GSLV-F14_INSAT-3DS_mission',
      title: 'GSLV-F14/INSAT-3DS MISSION',
      description: 'The launch of the GSLV-F14/INSAT-3DS mission is set for Saturday, February 17, 2024, at 17:30 Hrs.',
      thumbnail: GSLVF14
    },
    {
      id: 'PSLV_C58_XPoSat_Mission',
      title: 'PSLV-C58 / XPoSat Mission',
      description: 'PSLV-C58 launched XPOSAT on Jan 01, 2024, adjusting orbit for 3-axis stability with POEM-3 experiment.',
      thumbnail: PSLVC58
    },
    {
      id: 'Gaganyaan_TV-D1_Mission',
      title: 'Gaganyaan TV-D1 Mission',
      description: 'TV D1 Test Flight is accomplished. Crew Escape System performed as intended. Mission Gaganyaan gets off on a successful note.',
      thumbnail: GAGANYANTVD1
    },
    {
      id: 'Aditya_L1',
      title: 'PSLV-C57/Aditya-L1 Mission',
      description: 'Successful Deployment of Magnetometer Boom on Aditya-L1 in Halo Orbit',
      thumbnail: PSLVC57
    },

  ];
};