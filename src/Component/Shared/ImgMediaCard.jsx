import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function ImgMediaCard({ project }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        backgroundColor: isDark ? '#18181b' : '#fff',
        color: isDark ? '#fff' : '#18181b',
        border: isDark ? '1px solid #333' : '1px solid #eee',
        boxShadow: isDark
          ? '0 4px 24px 0 rgba(255,1,79,0.25)'
          : '0 4px 24px 0 rgba(0,0,0,0.1)'
      }}
      data-aos="fade-up"
    >
      <CardMedia
        component="img"
        alt={project?.name || 'Project Image'}
        height="180"
        image={project?.image || '/static/images/cards/contemplative-reptile.jpg'}
        style={{ filter: isDark ? 'brightness(0.8)' : 'none' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: isDark ? '#fff' : '#18181b' }}>
          {project?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: isDark ? '#e5e5e5' : 'text.secondary' }}>
          {project?.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project?.live_link && (
          <Button size="small" href={`https://${project.live_link}`} target="_blank" rel="noopener noreferrer" sx={{ color: isDark ? '#FF014F' : '#FF014F' }}>Live</Button>
        )}
        {project?.github_link && (
          <Button size="small" href={project.github_link} target="_blank" rel="noopener noreferrer" sx={{ color: isDark ? '#FF014F' : '#FF014F' }}>GitHub</Button>
        )}
      </CardActions>
    </Card>
  );
}
