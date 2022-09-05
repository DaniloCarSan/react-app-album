import Album from '../../../domain/entities/album';
import { Container, Title, Order } from './styles';

type Props = {
    album: Album;
    index: number;
    onClick: (id: number) => void;
}

const Allbum = ({ album, index, onClick }: Props) => {
    return (
        <Container key={album.id} onClick={() => onClick(album.id)}>
            <Order>{index + 1}</Order>
            <Title>{album.title}</Title>
        </Container>
    );
}

export default Allbum;