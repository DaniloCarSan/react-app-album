import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as A from '../../App.styles';
import Loading from '../../components/Loading';

import { instance as photoRepository } from '../../../domain/repositories/photo';
import Photo from '../../../domain/entities/photo';

type PhotoPageParams = {
    album: string;
    photo: string;
}

const PhotoPage = () => {

    const [photo, setPhoto] = useState<Photo>();
    const [loading, setLoading] = useState(true);

    const params = useParams<PhotoPageParams>();

    useEffect(() => {
        photoRepository.byId(Number(params.photo)).then(setPhoto).finally(() => setLoading(false));
    }, [params.photo]);

    return !loading ? (
        <A.Container>
            <A.Header>
                <A.Title>{photo?.title}</A.Title>
            </A.Header>
            <A.Content style={{ justifyContent: 'center', backgroundColor: 'transparent' }}>
                <img src={photo?.url} alt={photo?.title} />
            </A.Content>
        </A.Container>
    ) : (<Loading />);
}

export default PhotoPage;