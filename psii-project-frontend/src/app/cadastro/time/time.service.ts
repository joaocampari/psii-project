import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService extends ApiService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
  private timeUrl = 'times';

  getTimes() {
    return this.readAll<any>(this.timeUrl, null);
  }

  getTime(id) {
    return this.read<any>(this.timeUrl, id);
  }

  saveTime(time) {
    return this.create<any>(this.timeUrl, time);
  }

  updateTime(time) {
    return this.update(this.timeUrl, time.id, time);
  }

  deleteTime(id) {
    return this.delete(this.timeUrl, id);
  }
}

