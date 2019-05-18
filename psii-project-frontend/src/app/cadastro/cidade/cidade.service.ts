import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends ApiService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
  private cidadeUrl = 'cidades';

  getCidades() {
    return this.readAll<any>(this.cidadeUrl);
  }

  getCidadesByFilter(column, query) {
    return this.readAllByFilter<any>(this.cidadeUrl, column, query);
  }

  getCidade(id) {
    return this.read<any>(this.cidadeUrl, id);
  }

  saveCidade(cidade) {
    return this.create<any>(this.cidadeUrl, cidade);
  }

  updateCidade(cidade) {
    return this.update(this.cidadeUrl, cidade.id, cidade);
  }

  deleteCidade(id) {
    return this.delete(this.cidadeUrl, id);
  }
}

