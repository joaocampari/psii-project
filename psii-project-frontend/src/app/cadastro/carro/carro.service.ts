import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CarroService extends ApiService {

  private carroUrl = 'carros';

  getCarros() {
    return this.readAll<any>(this.carroUrl, null);
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
}

