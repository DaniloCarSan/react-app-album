import Photo from "../../../domain/entities/photo";
import { Container, Image, Title } from './styles';

type Props = {
    photo: Photo;
}

const CardPhoto = ({ photo }: Props) => {
    return (
        <Container>
            <Image src={photo.thumbnailUrl} alt={photo.title} />
            <Title>{photo.title}</Title>
        </Container>
    );
}

export default CardPhoto;