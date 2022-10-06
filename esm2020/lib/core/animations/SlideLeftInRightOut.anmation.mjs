import { animate, style, transition, trigger } from "@angular/animations";
/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 05/08/2022
 **  @Description
 ***********************************************************/
export const slideInOut = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVMZWZ0SW5SaWdodE91dC5hbm1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ub3dicmFpbnMtYW5pbWF0aW9ucy9zcmMvbGliL2NvcmUvYW5pbWF0aW9ucy9TbGlkZUxlZnRJblJpZ2h0T3V0LmFubWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RTs7Ozs7OzZEQU02RDtBQUM3RCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQ3JCLE9BQU8sQ0FBQyxZQUFZLEVBQUU7SUFDcEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztLQUNoRSxDQUFDO0lBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBQyxDQUFDLENBQUM7S0FDbEUsQ0FBQztDQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICoqICBAcHJvamVjdFxuICoqICBAZmlsZVxuICoqICBAYXV0aG9yIEJyaWNlIERhdXBpYXJkIDxicmljZS5kYXVwaWFyZEBub3dicmFpbnMuY29tPlxuICoqICBARGF0ZSAwNS8wOC8yMDIyXG4gKiogIEBEZXNjcmlwdGlvblxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGNvbnN0IHNsaWRlSW5PdXQgPVxuICB0cmlnZ2VyKCdzbGlkZUluT3V0JywgW1xuICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKSd9KSxcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0Jywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJ30pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknfSkpXG4gICAgXSlcbiAgXSlcbiJdfQ==