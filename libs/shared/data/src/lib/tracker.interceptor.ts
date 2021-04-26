import { TrackerEntry, TrackerStoreService } from '@ab/global';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class TrackerInterceptor implements HttpInterceptor {
  constructor(private tracker: TrackerStoreService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const startTimestamp = this.trackCallStart(request);
    return next.handle(request).pipe(
      tap((res) => {
        if (this.isCorsPreFlight(res)) return;
        this.trackCallEnd(startTimestamp, request);
      }),
      catchError((error: HttpErrorResponse) => {
        this.trackCallError(error);
        return throwError(error);
      })
    );
  }

  private trackCallStart(request: HttpRequest<unknown>): number {
    const startTimestamp = new Date().getTime();
    this.tracker.trackEntry({
      category: 'SYSTEM',
      event: 'CALL_START',
      label: request.method + ' @ ' + request.url,
      value: startTimestamp,
    });
    return startTimestamp;
  }

  private trackCallEnd(startTimestamp: number, request: HttpRequest<unknown>) {
    const endTimestamp: number = new Date().getTime();
    const responseTime = endTimestamp - startTimestamp;
    this.tracker.trackEntry({
      category: 'SYSTEM',
      event: 'CALL_END',
      label: request.method + ' @ ' + request.url,
      value: responseTime,
    });
  }

  private trackCallError(error: HttpErrorResponse) {
    const errorEntry: TrackerEntry = {
      category: 'ERROR',
      event: 'CODE_FAULT',
    };
    if (error.error instanceof ErrorEvent) {
      const codeError = error.error;
      errorEntry.label = codeError.message + ' @ ' + codeError.filename;
      errorEntry.value = codeError.lineno;
    } else {
      errorEntry.event = 'CALLER_FAULT';
      if (error.status >= 500) {
        errorEntry.event = 'SERVER_FAULT';
      } else if ([401, 403].includes(error.status)) {
        errorEntry.event = 'AUTH_FAULT';
      }
      if (error.url) errorEntry.label = error.url;
      errorEntry.value = error.status;
    }
    this.tracker.trackEntry(errorEntry);
  }

  private isCorsPreFlight(res: HttpEvent<any>) {
    return res.type === 0;
  }
}
