import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const source = value as string;
    if (!source) return '';

    const defaultLimit = 20;
    const limitArg = args[0] as string;
    const limit = limitArg ? parseInt(limitArg) : defaultLimit;

    if (source.length <= limit) return source;

    const defaultTrail = '...';
    const trailArg = args[1];
    const trail = trailArg || defaultTrail;
    const truncated = source.substring(0, limit) + trail;

    return truncated;
  }
}

// use in Card.template
// <div *ngIf="!!card.description" class="content">
// {{ card.description | truncate:50 }}
// </div>
