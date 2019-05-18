import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarroService extends ApiService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
  private carroUrl = 'carros';

  getCarros() {
    return this.readAll<any>(this.carroUrl);
  }

  getCarrosByFilter(column, query) {
    return this.readAllByFilter<any>(this.carroUrl, column, query);
  }

  getCarro(id) {
    return this.read<any>(this.carroUrl, id);
  }

  saveCarro(carro) {
    return this.create<any>(this.carroUrl, carro);
  }

  updateCarro(carro) {
    return this.update(this.carroUrl, carro.id, carro);
  }

  deleteCarro(id) {
    return this.delete(this.carroUrl, id);
  }
}

