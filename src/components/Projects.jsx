import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Feeds Fasco Academy.png";
import projImg2 from "../assets/img/Brosur Gedung.jpg";
import projImg3 from "../assets/img/GDSC_CreativeDesign_MohammadFahrezi.png";
import projImg4 from "../assets/img/pamplet ifest akademik.png";
import projImg5 from "../assets/img/Pamflet PTQ 9 A4 copy.png";
import projImg6 from "../assets/img/pamflet podcast v2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Event Poster",
      description: "Fasco Academy Sriwijaya University",
      imgUrl: projImg1,
    },
    {
      title: "Business Poster",
      description: "Piscok Lumerr",
      imgUrl: projImg2,
    },
    {
      title: "Event Poster",
      description: "Google Developer Student Clubs",
      imgUrl: projImg3,
    },
    {
      title: "Competition Poster",
      description: "WIFI Sriwijaya University",
      imgUrl: projImg4,
    },
    {
      title: "Podcast Poster",
      description: "HMIF Sriwijaya University",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const projectsTab2 = [
    {
      title: "Judul Proyek Baru 1",
      description: "Deskripsi Proyek Baru 1",
      imgUrl: projImg1,
    },
    {
      title: "Judul Proyek Baru 2",
      description: "Deskripsi Proyek Baru 2",
      imgUrl: projImg2,
    },
    // Tambahkan proyek lainnya untuk Tab 2 di sini
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
