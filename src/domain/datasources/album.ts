import { AxiosInstance } from "axios";
import api from "./api";
import Album from "../entities/album";

export class AlbumDataSource {

    private api: AxiosInstance;

    static resource = "albums";

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    public async all(): Promise<Album[]> {
        const response = await this.api.get(`/${AlbumDataSource.resource}`)
        return response.data;
    }

    public async byId(id: number): Promise<Album> {
        const response = await this.api.get(`/${AlbumDataSource.resource}/${id}`)
        return response.data;
    }

}

export const instance = new AlbumDataSource(api);