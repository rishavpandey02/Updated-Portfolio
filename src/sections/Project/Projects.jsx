import React from 'react'
import styles from './Projects.module.css'
import weatherApp from '../../assets/weatherApp.png'
import movieSearcher from '../../assets/frontendProject.png';
import LuxeWheels from '../../assets/MERNProject.png';
import recipeForum from '../../assets/fullStackProject.png';
import ProjectCard from '../../common/ProjectCard'

export default function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard 
           src={weatherApp} 
           link="https://github.com/rishavpandey02/Weather-Dashboard.git" 
           h3="Weather App"
           p="Weather App using OpenWeather API"
           />
            <ProjectCard 
           src={movieSearcher} 
           link="https://github.com/rishavpandey02/moviesearch.git" 
           h3="Movie Searcher App"
           p="Movie Searcher App using Youtube and OMDB API "
           />
            <ProjectCard 
           src={LuxeWheels} 
           link="https://github.com/rishavpandey02/CarRental.git" 
           h3="Car Rental App"
           p="Car Rental App using MERN Stack"
           />
            <ProjectCard 
           src={recipeForum} 
           link="https://github.com/rishavpandey02/recipe-forum.git" 
           h3="Recipe Forum App"
           p="Full Stack recipe forum app"
           />
        </div>
    </section>
  )
}
