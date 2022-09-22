import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserService } from '../users/user.service';

@Directive({
  selector: '[appIsAdmin]',
})
export class IsAdminDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.userService.loggedUser.isAdmin) {
      // this.hasView = true
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // this.viewContainer.clear();
    }
  }
}
