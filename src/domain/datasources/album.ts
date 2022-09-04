import { AxiosInstance } from "axios";
import api from "../datasources/api";
import AlbumEntity from "../entities/album";

export class AlbumDataSource {

    private api: AxiosInstance;

    private resorce = "/albums";

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    public async getAllAlbums(): Promise<AlbumEntity[]> {
        const response = await this.api.get(this.resorce)
        return response.data;
    }

}

export const instance = new AlbumDataSource(api);