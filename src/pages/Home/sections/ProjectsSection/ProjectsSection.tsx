import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const projects: ProjectCardProps[] = [
        {
            title: "Project 1",
            subtitle: "Subtitle 1",
            srcImg: "/path/to/image1.jpg",
            description: "Description of Project 1",
            technologies: "React, TypeScript, Material-UI",
            websiteURL: "https://example.com/project1",
            codeURL: "https://github.com/example/project1"
        },
        {
            title: "Project 2",
            subtitle: "Subtitle 2",
            srcImg: "/path/to/image2.jpg",
            description: "Description of Project 2",
            technologies: "Next.js, Tailwind CSS, Node.js",
            websiteURL: "https://example.com/project2",
            codeURL: "https://github.com/example/project2"
        }
    ];

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
