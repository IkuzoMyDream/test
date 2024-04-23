import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { map, catchError } from 'rxjs';

@Injectable()
export class PsuApiService {
  constructor(private http: HttpService) { }

  async getSubjectOffer(eduTerm: string, eduYear: string) {
    return this.http.get(`https://api-gateway.psu.ac.th/Test/regist/SubjectOfferCampus/01/${eduTerm}/${eduYear}?limit=1000`, {
      headers: {
        credential: "api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT",
      },
    })
      .pipe(
        map((res) => res.data)
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        })
      );
  }

  async getRegistData(token: string, eduTerm: string, eduYear: string) {
    return this.http.get(`https://api-gateway.psu.ac.th/Test/regist/level2/RegistDataCampus/01/token?eduTerm=*&eduYear=*&limit=1000`, {
      headers: {
        credential: "api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT",
        token: token
      },
    })
      .pipe(
        map((res) => res.data)
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        })
      );
  }

  async getStudentDetail(token: string) {
    return this.http.get(`https://api-gateway.psu.ac.th/Test/regist/level2/StudentDetailCampus/01/token`, {
      headers: {
        credential: "api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT",
        token: token
      },
    })
      .pipe(
        map((res) => res.data)
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        })
      );
  }

}



