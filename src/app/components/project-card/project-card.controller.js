class ProjectCardController {
    constructor() {
        this.project = {};
    }

    setProject(project) {
        this.project = project;
    }

    getProject() {
        return this.project;
    }
}

export default ProjectCardController;