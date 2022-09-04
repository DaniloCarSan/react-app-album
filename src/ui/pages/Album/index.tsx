import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as A from '../../App.styles';

import { instance as albumRepository } from '../../../domain/repositories/album';
import AlbumEntity from '../../../domain/entities/album';
import Loading from '../../components/Loading';

type AlbumPageParams = {
    id: string;
}

const AlbumPage = () => {

    const [album, setAlbum] = useState<AlbumEntity>();
    const [loading, setLoading] = useState(true);

    const params = useParams<AlbumPageParams>();

    useEffect(() => {
        albumRepository.byId(Number(params.id)).then(setAlbum).finally(() => setLoading(false));
    }, [params.id]);

    return !loading ? (
        <A.Container>
            <A.Header>
                <A.Title>{album?.title}</A.Title>
            </A.Header>
        </A.Container>
    ) : (<Loading />);
}

export default AlbumPage;