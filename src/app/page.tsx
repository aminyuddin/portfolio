"use client";

import React from 'react';
import { faGithub, faLinkedin, faJava, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faServer, faCodeBranch, faShieldAlt, faRoadBridge, faRobot, faUniversalAccess, faChargingStation, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LiaCertificateSolid } from "react-icons/lia";
import Image from "next/image";
import Motion from '@/components/Motion';

const Portfolio: React.FC = () => {
  const skills = [
    { name: 'Banking', icon: faUniversalAccess, color: '#C7560A' },
    { name: 'Cloud', icon: faCloud, color: '#FF9900' },
    { name: 'Linux', icon: faServer, color: '#333' },
    { name: 'Infrastructure', icon: faRoadBridge, color: 'red' },
    { name: 'Architecture', icon: faCodeBranch, color: '#333' },
    { name: 'Programming', icon: faJava, color: '#0077B5' },
    { name: 'IoT', icon: faChargingStation, color: '#F7DF1E' },
    { name: 'Container', icon: faDocker, color: '#2496ED' },
    { name: 'DevSecOps', icon: faShieldAlt, color: '#6CBEEB' },
    { name: 'Automation', icon: faRobot, color: '#1B529D' },
  ];

  const currentYear = new Date().getFullYear();
  const startYear = 2010;
  const experienceYears = currentYear - startYear;

  const introduction = `${experienceYears} years of working experience in Java and Spring Framework. Actively involved in blockchain technology especially Hyperledger Fabric, Ethereum, and Multichain. Experience in AWS Cloud Infrastructure. A heavy DevOps Practitioner. A serverless and cloud-native advocate with a focus on driving the community forward and empowering developers to make the world a better place.`;

  return (
    
    <div className="min-h-screen bg-gray-100">
      <Motion>
        <div>
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat max-h-28 max-w-2xl mx-auto rounded-tl-2xl rounded-tr-2xl"
            style={{ backgroundImage: "url('/cover-photo.jpg')" }}
          ></div>
            <div className="container mx-auto p-8 flex flex-col items-center justify-center max-w-2xl relative z-10">
              <div className="flex justify-center mb-4 mt-5">
                <Image src="/profile-photo.png" alt="Profile Photo" className="w-32 h-32 rounded-full" width={500} height={500}/>
              </div>

              <h1 className="text-3xl font-bold mb-4 text-center">Ts. Amin Yuddin</h1>

              <div className="flex space-x-6 mb-3">
                <a href="https://www.linkedin.com/in/aminyuddin/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-3xl transition-all ease-in-out duration-100 hover:scale-125" style={{ color: '#0077B5' }} />
                </a>
                <a href="https://github.com/aminyuddin" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-3xl transition-all ease-in-out duration-100 hover:scale-125" style={{ color: '#333' }} />
                </a>
              </div>

              <div className="mt-2">
                <p className="text-lg text-justify mb-2">{introduction}</p>
              </div>
            </div>
        </div>

        <div className="bg-gray-100 py-4">
          <div className="container mx-auto p-4 max-w-2xl">
            <h2 className="text-xl font-bold mb-8 text-center">Technology</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <FontAwesomeIcon icon={skill.icon} className="text-3xl transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-6" style={{ color: skill.color }} />
                  <p className="text-sm mt-1">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Motion>

      <footer className="bg-gray-200 py-4 text-center fixed bottom-0 w-full">
        <div className="container mx-auto max-w-2xl">
          <div className="mx-auto">
            <a
              href="https://www.credly.com/users/amnydn/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 font-bold"
            > 
              <div className="flex items-center justify-center">
                <LiaCertificateSolid className="transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12 text-2xl" />
                <span className='lg:ml-2 lg:mr-2 transition-all ease-in-out duration-100 hover:scale-100 scale-95'>ACHIEVEMENT BADGES</span>
                <LiaCertificateSolid className="transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12 text-2xl" />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
