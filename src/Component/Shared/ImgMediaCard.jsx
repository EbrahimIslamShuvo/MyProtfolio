import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ project }) {
  return (
    <Card
      className=""
      sx={{
        maxWidth: 345,
        m: 2,
        bgcolor: '#1c222a',
        color: 'white',
      }}
      data-aos="fade-up"
    >
      <CardMedia
        component="img"
        alt={project?.name || 'Project Image'}
        height="180"
        image={project?.image || '/static/images/cards/contemplative-reptile.jpg'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {project?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#d1d5db' }}>
          {project?.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project?.live_link && (
          <Button
            size="small"
            href={`https://${project.live_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </Button>
        )}
        {project?.github_link && (
          <Button
            size="small"
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
