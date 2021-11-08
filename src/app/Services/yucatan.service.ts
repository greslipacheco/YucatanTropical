import { TestBed } from '@angular/core/testing';

//libreria importada para el json
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class YucatanService {

  constructor(private http: HttpClient) { }

  getWeather(city: any):Observable <any>{
    return this.http.get('https://api.weatherbit.io/v2.0/current?city='+city+'&country=mexico&key=824735a927bf408bb6a263611567ca17&lang=es')
    
    
  }  
  getWeather2(city: any):Observable <any>{
    // return this.http.get('https://api.weatherbit.io/v2.0/current?city='+city+'&country=mexico&key=824735a927bf408bb6a263611567ca17&lang=es')
    // https://api.weatherbit.io/v2.0/forecast/daily?city=merida&country=mexico&key=824735a927bf408bb6a263611567ca17&lang=es&days=7
    return this.http.get('https://api.weatherbit.io/v2.0/forecast/daily?city='+city+'&country=mexico&key=824735a927bf408bb6a263611567ca17&lang=es&days=7')
  } 
  //https://newsapi.org/v2/top-headlines?country=mx&apiKey=033da963de414c9a9180084afdd580a2
  

}
