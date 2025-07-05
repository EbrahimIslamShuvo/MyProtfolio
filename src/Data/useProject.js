import React, { useState, useEffect } from 'react';

const useProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/Project.json')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return { projects };
};

export default useProject;