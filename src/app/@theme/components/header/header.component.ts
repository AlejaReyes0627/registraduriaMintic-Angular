import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarService} from '@nebular/theme';
import { Router } from "@angular/router"; 
import { LayoutService } from '../../../@core/utils';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor(private sidebarService: NbSidebarService,
              private layoutService: LayoutService,
              private router: Router) {
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {

  }
  
  cerrarSesion()
  {
    localStorage.removeItem("sesion");
    this.router.navigate(["pages/seguridad/login"]);
  }



  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
}
