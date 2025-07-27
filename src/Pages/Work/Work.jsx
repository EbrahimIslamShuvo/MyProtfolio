import React from 'react';
import ImgMediaCard from '../../Component/Shared/ImgMediaCard';
import useProject from '../../Data/useProject';

const Work = () => {
    const { projects } = useProject();
    return (
        <div className="">
            <h1 className='text-center text-white text-2xl'>NB: For Better experience turn your pc theme into Light</h1>
            <div className="flex flex-wrap justify-center">
                {
                    projects?.map(project => (
                        <ImgMediaCard key={project.id} project={project} />
                    ))
                }
            </div>
        </div>
    );
};

export default Work;