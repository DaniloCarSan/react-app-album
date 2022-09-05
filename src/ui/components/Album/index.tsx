import { useNavigate } from 'react-router-dom';
import Album from '../../../domain/entities/album';
import { Container, Title, Order } from './styles';

type Props = {
    album: Album;
    index: number;
}

const Allbum = ({ album, index }: Props) => {

    const navigate = useNavigate();

    const handleClickGoAlbumPage = () => {
        navigate(`/albums/${album.id}`);
    };

    return (
        <Container key={album.id} onClick={handleClickGoAlbumPage}>
            <Order>{index + 1}</Order>
            <Title>{album.title}</Title>
        </Container>
    );
}

export default Allbum;