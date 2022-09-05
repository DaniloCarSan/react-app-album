import { useNavigate } from 'react-router-dom';
import Photo from "../../../domain/entities/photo";
import { Container, Image, Title } from './styles';

type Props = {
    photo: Photo;
}

const CardPhoto = ({ photo }: Props) => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/albums/${photo.albumId}/photos/${photo.id}`);
    }

    return (
        <Container onClick={handleOnClick} >
            <Image src={photo.thumbnailUrl} alt={photo.title} />
            <Title>{photo.title}</Title>
        </Container>
    );
}

export default CardPhoto;