import { AxiosInstance } from "axios";
import api from "./api";
import AlbumEntity from "../entities/album";

export class AlbumDataSource {

    private api: AxiosInstance;

    private resorce = "/albums";

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    public async all(): Promise<AlbumEntity[]> {
        const response = await this.api.get(this.resorce)
        return response.data;
    }

    public async byId(id: number): Promise<AlbumEntity> {
        const response = await this.api.get(`${this.resorce}/${id}`)
        return response.data;
    }

}

export const instance = new AlbumDataSource(api);