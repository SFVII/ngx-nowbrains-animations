import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AnimationsService {
    constructor() {
        this.status = true;
    }
    FadeSlideInOut(ttx, offset_percent, value = true, instant = false) {
        const status = value ? ':enter' : ':leave';
        if (status === ':leave') {
            return {
                value: status,
                params: {
                    ttx: 0,
                    percent_start: 0,
                    percent_start_1: 0,
                    percent_start_2: 0
                }
            };
        }
        else
            return {
                value: status,
                params: {
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6)
                }
            };
    }
    FadeSlideInOutKonverso(ttx, offset_percent, value = true, instant = false) {
        const status = value ? ':enter' : ':leave';
        if (status === ':leave') {
            return {
                value: status,
                params: {
                    ttx: 0,
                    percent_start: 0,
                    percent_start_1: 0,
                    percent_start_2: 0
                }
            };
        }
        else
            return {
                value: status,
                params: {
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6)
                }
            };
    }
    FadeSlideInOutCasesFeedHome(ttx, offset_percent, value = true, instant = false) {
        const status = value ? ':enter' : ':leave';
        if (status === ':leave') {
            return {
                value: status,
                params: {
                    ttx: ttx,
                    percent_start: 0,
                    percent_start_1: 0,
                    percent_start_2: 0
                }
            };
        }
        else
            return {
                value: status,
                params: {
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6)
                }
            };
    }
    FadeSlideInOutStagger(ttx, offset_percent, value = true, stagger = 10) {
        const status = value ? ':enter' : ':leave';
        if (status === ':leave') {
            return {
                value: status,
                params: {
                    ttx: ttx / 2,
                    percent_start: offset_percent - (offset_percent * 0.6),
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent,
                    stagger: 10
                }
            };
        }
        else
            return {
                value: status,
                params: {
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6),
                    stagger
                }
            };
    }
}
AnimationsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: AnimationsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AnimationsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: AnimationsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: AnimationsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW5vd2JyYWlucy1hbmltYXRpb25zL3NyYy9saWIvYW5pbWF0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7UUFEUSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBRXRCLENBQUM7SUFHRCxjQUFjLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQW1CLEtBQUs7UUFFakcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLENBQUM7b0JBQ04sYUFBYSxFQUFFLENBQUM7b0JBQ2hCLGVBQWUsRUFBRSxDQUFDO29CQUNsQixlQUFlLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFBO1NBQ0Y7O1lBQU0sT0FBTztnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRztvQkFDSCxhQUFhLEVBQUUsY0FBYztvQkFDN0IsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2lCQUN6RDthQUNGLENBQUE7SUFHSCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQW1CLEtBQUs7UUFFekcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLENBQUM7b0JBQ04sYUFBYSxFQUFFLENBQUM7b0JBQ2hCLGVBQWUsRUFBRSxDQUFDO29CQUNsQixlQUFlLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFBO1NBQ0Y7O1lBQU0sT0FBTztnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRztvQkFDSCxhQUFhLEVBQUUsY0FBYztvQkFDN0IsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2lCQUN6RDthQUNGLENBQUE7SUFFSCxDQUFDO0lBRUQsMkJBQTJCLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQW1CLEtBQUs7UUFFOUcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEdBQUc7b0JBQ1IsYUFBYSxFQUFFLENBQUM7b0JBQ2hCLGVBQWUsRUFBRSxDQUFDO29CQUNsQixlQUFlLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFBO1NBQ0Y7O1lBQU0sT0FBTztnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRztvQkFDSCxhQUFhLEVBQUUsY0FBYztvQkFDN0IsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2lCQUN6RDthQUNGLENBQUE7SUFFSCxDQUFDO0lBR0QscUJBQXFCLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQWtCLEVBQUU7UUFDcEcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFFdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO29CQUNaLGFBQWEsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO29CQUN0RCxlQUFlLEVBQUUsY0FBYyxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztvQkFDeEQsZUFBZSxFQUFFLGNBQWM7b0JBQy9CLE9BQU8sRUFBRyxFQUFFO2lCQUNiO2FBQ0YsQ0FBQTtTQUNGOztZQUFNLE9BQU87Z0JBQ1osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFO29CQUNOLEdBQUc7b0JBQ0gsYUFBYSxFQUFFLGNBQWM7b0JBQzdCLGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO29CQUN4RCxlQUFlLEVBQUUsY0FBYyxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztvQkFDeEQsT0FBTztpQkFDUjthQUNGLENBQUE7SUFDSCxDQUFDOzs4R0E1R1UsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTsyRkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3RhdHVzID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIEZhZGVTbGlkZUluT3V0KHR0eDogbnVtYmVyLCBvZmZzZXRfcGVyY2VudDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbiA9IHRydWUsIGluc3RhbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXG4gICAgY29uc3Qgc3RhdHVzID0gdmFsdWUgPyAnOmVudGVyJyA6ICc6bGVhdmUnXG4gICAgaWYgKHN0YXR1cyA9PT0gJzpsZWF2ZScpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBzdGF0dXMsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR0eDogMCxcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0OiAwLFxuICAgICAgICAgIHBlcmNlbnRfc3RhcnRfMTogMCxcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0XzI6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4ge1xuICAgICAgdmFsdWU6IHN0YXR1cyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0dHgsXG4gICAgICAgIHBlcmNlbnRfc3RhcnQ6IG9mZnNldF9wZXJjZW50LFxuICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IG9mZnNldF9wZXJjZW50IC0gKG9mZnNldF9wZXJjZW50ICogMC4zKSxcbiAgICAgICAgcGVyY2VudF9zdGFydF8yOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuNilcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cbiAgRmFkZVNsaWRlSW5PdXRLb252ZXJzbyh0dHg6IG51bWJlciwgb2Zmc2V0X3BlcmNlbnQ6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlLCBpbnN0YW50OiBib29sZWFuID0gZmFsc2UpIHtcblxuICAgIGNvbnN0IHN0YXR1cyA9IHZhbHVlID8gJzplbnRlcicgOiAnOmxlYXZlJ1xuICAgIGlmIChzdGF0dXMgPT09ICc6bGVhdmUnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogc3RhdHVzLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0dHg6IDAsXG4gICAgICAgICAgcGVyY2VudF9zdGFydDogMCxcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IDAsXG4gICAgICAgICAgcGVyY2VudF9zdGFydF8yOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBzdGF0dXMsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdHR4LFxuICAgICAgICBwZXJjZW50X3N0YXJ0OiBvZmZzZXRfcGVyY2VudCxcbiAgICAgICAgcGVyY2VudF9zdGFydF8xOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuMyksXG4gICAgICAgIHBlcmNlbnRfc3RhcnRfMjogb2Zmc2V0X3BlcmNlbnQgLSAob2Zmc2V0X3BlcmNlbnQgKiAwLjYpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBGYWRlU2xpZGVJbk91dENhc2VzRmVlZEhvbWUodHR4OiBudW1iZXIsIG9mZnNldF9wZXJjZW50OiBudW1iZXIsIHZhbHVlOiBib29sZWFuID0gdHJ1ZSwgaW5zdGFudDogYm9vbGVhbiA9IGZhbHNlKSB7XG5cbiAgICBjb25zdCBzdGF0dXMgPSB2YWx1ZSA/ICc6ZW50ZXInIDogJzpsZWF2ZSdcbiAgICBpZiAoc3RhdHVzID09PSAnOmxlYXZlJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHN0YXR1cyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHR4OiB0dHgsXG4gICAgICAgICAgcGVyY2VudF9zdGFydDogMCxcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IDAsXG4gICAgICAgICAgcGVyY2VudF9zdGFydF8yOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBzdGF0dXMsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdHR4LFxuICAgICAgICBwZXJjZW50X3N0YXJ0OiBvZmZzZXRfcGVyY2VudCxcbiAgICAgICAgcGVyY2VudF9zdGFydF8xOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuMyksXG4gICAgICAgIHBlcmNlbnRfc3RhcnRfMjogb2Zmc2V0X3BlcmNlbnQgLSAob2Zmc2V0X3BlcmNlbnQgKiAwLjYpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIEZhZGVTbGlkZUluT3V0U3RhZ2dlcih0dHg6IG51bWJlciwgb2Zmc2V0X3BlcmNlbnQ6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlLCBzdGFnZ2VyOiBudW1iZXIgPSAxMCkge1xuICAgIGNvbnN0IHN0YXR1cyA9IHZhbHVlID8gJzplbnRlcicgOiAnOmxlYXZlJ1xuICAgIGlmIChzdGF0dXMgPT09ICc6bGVhdmUnKSB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBzdGF0dXMsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR0eDogdHR4IC8gMixcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0OiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuNiksXG4gICAgICAgICAgcGVyY2VudF9zdGFydF8xOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuMyksXG4gICAgICAgICAgcGVyY2VudF9zdGFydF8yOiBvZmZzZXRfcGVyY2VudCxcbiAgICAgICAgICBzdGFnZ2VyIDogMTBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4ge1xuICAgICAgdmFsdWU6IHN0YXR1cyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0dHgsXG4gICAgICAgIHBlcmNlbnRfc3RhcnQ6IG9mZnNldF9wZXJjZW50LFxuICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IG9mZnNldF9wZXJjZW50IC0gKG9mZnNldF9wZXJjZW50ICogMC4zKSxcbiAgICAgICAgcGVyY2VudF9zdGFydF8yOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuNiksXG4gICAgICAgIHN0YWdnZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19