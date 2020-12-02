import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarios: any[] = [];
  private pagina = 1;

  constructor(private service: UserService) {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.service.buscar(this.pagina).subscribe(
      (dados: any) => {
        console.log(dados);
        this.usuarios = dados.data;
      }
    );
  }
}
