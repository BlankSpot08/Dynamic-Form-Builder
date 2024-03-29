import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  forms: any

  constructor(
    private configService: ConfigService, 
    private http: HttpClient
  ) {}

  createForm(fields: string[]) {
    const createFormRequest = this.http.post(this.configService.getBaseURL() + '/form/create', fields)
    .subscribe(
      data => {
        
      }
    )
  }

  createSubmission(title: string, answers: string[]) {
    const createSubmissionFormRequest = this.http.post(this.configService.getBaseURL() + '/submission/create?title=' + title, {
      answers: answers
    })
    .subscribe(
      data => {
        
      }
    )
  }

  async getAllForms() {
    const getAllFormRequest = this.http.get(this.configService.getBaseURL() + '/form/get-all')
    
  }

  getFormByTitle(title: string) {
    const getFormByTitleRequest = this.http.get(this.configService.getBaseURL() + '/form/get ')
  }
}
