import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../assets/json/projects.json';
import t from '../../utils/t';
import GithubRepoCard from '../../components/GithubRepoCard/GithubRepoCard';

const Projects = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Box>
        <h1>{t('p_t')}</h1>
      </Box>
      <h2>{t('p_f_w')}</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3, // Adds spacing between cards
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {projects.map((project) => (
          <Box
            key={project.id}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(33.33% - 16px)',
              }, // Responsive widths
            }}
          >
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>
      <Box>
        <h1>{t('p_gh_t')}</h1>
      </Box>
      <h2>{t('p_gh_t_s')}</h2>
      <GithubRepoCard />
    </Box>
  );
};

export default Projects;
