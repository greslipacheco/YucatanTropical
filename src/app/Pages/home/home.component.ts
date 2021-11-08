import { Component, OnInit } from '@angular/core';
import { YucatanService } from '../../Services/yucatan.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public city: any;
  //variable de prueba
  public city_name: string='';
 // variables del json
  
  public precip: string='';
  public app_temp: string='';
  public clouds: string='';
  public rh: string='';
  public temp: string='';
  
  // public wind_cdir: string='';
  public wind_cdir_full: string='';
  public wind_dir: string='';
  public wind_spd: string='';
  //imagen
  public conditionIcon: string='';
  public imgconditionIcon: string='';
  public description: string='';

  public datetime2: string='';
  public datetime: string='';
  

  public data= {} as any;

  //pronostico

  public date!: string | number | Date;
  public date2!: string | number | Date;
  public date3!: string | number | Date;
  public date4!: string | number | Date;
  public date5!: string | number | Date;
  public date6!: string | number | Date;
  public date7!: string | number | Date;


  public temp1: string='';
  public temp2: string='';
  public temp3: string='';
  public temp4: string='';
  public temp5: string='';
  public temp6: string='';

  public temp_min1: string='';
  public temp_min2: string='';
  public temp_min3: string='';
  public temp_min4: string='';
  public temp_min5: string='';
  public temp_min6: string='';
  
  public description1: string='';
  public description2: string='';
  public description3: string='';
  public description4: string='';
  public description5: string='';
  public description6: string='';

  public imgconditionIcon1: string='';
  public imgconditionIcon2: string='';
  public imgconditionIcon3: string='';
  public imgconditionIcon4: string='';
  public imgconditionIcon5: string='';
  public imgconditionIcon6: string='';
  
  
  
  
  constructor(private YucatanService:YucatanService, public datepipe: DatePipe){}
 
  ngOnInit(): void {
    this.getcityWeather('merida');
    this.getcityWeather2('merida');
  }
  getcityWeather(city: string): void {
    this.YucatanService.getWeather(city).subscribe(
      res=>{
        this.data=res;
        console.table(this.data);

        this.city_name=this.data['data'][0]['city_name'];
        this.temp=this.data['data'][0]['temp'];
        this.wind_dir=this.data['data'][0]['wind_dir'];
        this.wind_cdir_full=this.data['data'][0]['wind_cdir'];
        this.wind_spd=this.data['data'][0]['wind_spd'];
        this.description=this.data['data'][0]['weather']['description'];
        this.imgconditionIcon=this.data['data'][0]['weather']['icon'];
        this.clouds=this.data['data'][0]['clouds'];
        this.precip=this.data['data'][0]['precip'];
        
      },
    )
  }
  getcityWeather2(city: string): void {
    this.YucatanService.getWeather2(city).subscribe(
      res=>{
        this.data=res;
        console.table(this.data);
        this.datetime2=this.data['data'][0]['datetime'];
        //temperatura maxima
        this.temp1=this.data['data'][1]['max_temp'];
        this.temp2=this.data['data'][2]['max_temp'];
        this.temp3=this.data['data'][3]['max_temp'];
        this.temp4=this.data['data'][4]['max_temp'];
        this.temp5=this.data['data'][5]['max_temp'];
        this.temp6=this.data['data'][6]['max_temp'];
        // temperatura minima
        this.temp_min1=this.data['data'][1]['app_min_temp'];
        this.temp_min2=this.data['data'][2]['app_min_temp'];
        this.temp_min3=this.data['data'][3]['app_min_temp'];
        this.temp_min4=this.data['data'][4]['app_min_temp'];
        this.temp_min5=this.data['data'][5]['app_min_temp'];
        this.temp_min6=this.data['data'][6]['app_min_temp'];
        // descripcion pronostico
        this.description1=this.data['data'][1]['weather']['description'];
        this.description2=this.data['data'][2]['weather']['description'];
        this.description3=this.data['data'][3]['weather']['description'];
        this.description4=this.data['data'][4]['weather']['description'];
        this.description5=this.data['data'][5]['weather']['description'];
        this.description6=this.data['data'][6]['weather']['description'];
        //imagen 
        this.imgconditionIcon1=this.data['data'][1]['weather']['icon'];
        this.imgconditionIcon2=this.data['data'][2]['weather']['icon'];
        this.imgconditionIcon3=this.data['data'][3]['weather']['icon'];
        this.imgconditionIcon4=this.data['data'][4]['weather']['icon'];
        this.imgconditionIcon5=this.data['data'][5]['weather']['icon'];
        this.imgconditionIcon6=this.data['data'][6]['weather']['icon'];
        

        // funcion de fecha
        this.date = this.data['data'][0]['datetime'];
        let latest_date =this.datepipe.transform(this.date, 'EEEE');
        this.date2 = this.data['data'][1]['datetime'];
        let latest_date2 =this.datepipe.transform(this.date2, 'EEEE');
        this.date3 = this.data['data'][2]['datetime'];
        let latest_date3 =this.datepipe.transform(this.date, 'EEEE');
        this.date4 = this.data['data'][3]['datetime'];
        let latest_date4 =this.datepipe.transform(this.date, 'EEEE');
        this.date5 = this.data['data'][4]['datetime'];
        let latest_date5 =this.datepipe.transform(this.date, 'EEEE');
        this.date6 = this.data['data'][5]['datetime'];
        let latest_date6 =this.datepipe.transform(this.date, 'EEEE');
        this.date7 = this.data['data'][6]['datetime'];
        let latest_date7 =this.datepipe.transform(this.date, 'EEEE');
        console.log(latest_date);
        console.log(this.date);

      },
    )
  }
  onUpdateWeather(event: any):void {
    this.getcityWeather(this.city);
    this.getcityWeather2(this.city);
  }  
}
