import React from 'react';
import ImgMediaCard from '../../Component/Shared/ImgMediaCard';
import useProject from '../../Data/useProject';

const Work = () => {
    const {projects} = useProject();
    return (
        <div className="flex flex-wrap justify-center">
            {
                projects?.map(project => (
                    <ImgMediaCard key={project.id} project={project} />
                ))
            }
        </div>
    );
};

export default Work;