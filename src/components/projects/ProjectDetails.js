import React from 'react'

const  ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(id)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sed repellat obcaecati deleniti unde? Nihil aspernatur sapiente iure corporis rerum minus maiores quae velit ducimus impedit, ad temporibus porro quia.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by AB</div>
                    <div>5 November 2am </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;