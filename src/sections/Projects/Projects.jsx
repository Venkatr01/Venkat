import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          // src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a6fbc5b68d0e8000145b1ae/0x0.png"
          src="https://images4.fanpop.com/image/photos/22100000/The-letter-O-the-letter-o-22189162-2560-2560.jpg"
          link="https://orangepay.vercel.app/"
          h3="OrangePay"
          p="Pay App"
        />
        <ProjectCard
          src="https://www.pngall.com/wp-content/uploads/2/F-Letter-Transparent.png"
          link="https://francisian.vercel.app/"
          h3="Francisian"
          p="College App"
        />
        <ProjectCard
          src="https://img.freepik.com/free-vector/coming-soon-construction-hanging-text-background_1017-37034.jpg?size=338&ext=jpg"
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Coming soon.."
          // p="Glasses Shop"
        />
        <ProjectCard
          src="https://img.freepik.com/free-vector/coming-soon-construction-hanging-text-background_1017-37034.jpg?size=338&ext=jpg"
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Coming Soon.."
          // p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
