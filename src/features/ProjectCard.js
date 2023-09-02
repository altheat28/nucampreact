import { Card, CardImg, CardImageOverlay, CardTitle } from 'reactstrap';

const ProjectCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.project.image}
                alt={props.project.name} 
            />
            <CardImageOverlay>
                <CardTitle>{props.project.name}</CardTitle>
            </CardImageOverlay>
        </Card>
    )
};

export default ProjectCard;