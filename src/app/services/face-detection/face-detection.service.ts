import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacesRecognized } from './face-detection.modles';

const URL = 'https://api-us.faceplusplus.com/facepp/v3/detect';
const API_KEY = 'CNQPZTjGAlfIZX7bOHEAxVajAn8vbY-A';
const API_SECRET = 'PvHYSEWQB5G6IGPygoL43eBgQgEnocic'; 

@Injectable({
  providedIn: 'root'
})
export class FaceDetectionService {

  constructor(private http: HttpClient) { }

  reconize(file: File): Observable<FacesRecognized> {
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('image_attributes', 'gender,age');
    
    return this.http.post<FacesRecognized>(URL, formData, {
        params: {
          api_key: API_KEY,
          api_secret: API_SECRET
        }
    })
    
    // .subscribe( res => console.log(res));
  }

}
