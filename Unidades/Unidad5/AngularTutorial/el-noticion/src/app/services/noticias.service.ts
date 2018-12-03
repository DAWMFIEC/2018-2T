import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias:Noticia[] = [
  	{
  		"titulo": "Clientes madrugaron para comprar con descuentos",
  		"fecha": "18 de Nov., 2018",
      "autor": "Ángel Aguirre",
  		"foto": "https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2018/11/mall_final.jpg?itok=g1a7lz8i",
  		"descripcion":"Largas filas de clientes se observaron desde antes de las 07:00 de este domingo en las inmediaciones del centro comercial Mall del Sol, en el norte de Guayaquil. Desde esa hora hasta las 13:00 las diferentes tiendas y almacenes ofrecerán al público mercadería con descuentos de entre el 15% y el 70%, como parte de una campaña denominada 'El madrugón', evento previo al Black Friday local."
  	},
  	{
  		"titulo": "Las alertas en Coca Codo se activaron antes de inaugurarla",
  		"fecha": "18 de Nov., 2018",
      "autor": "Archivo",
  		"foto": "https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2018/11/15050638.jpg?itok=NG5audE2",
  		"descripcion": "Las fisuras en los distribuidores de agua que alimentan a las turbinas de la central hidroeléctrica Coca Codo Sinclair amenazan con paralizar, en cualquier momento, las ocho unidades de generación de energía eléctrica. “Las consecuencias son impredecibles”, advirtieron por escrito en el 2015 –más de un año antes de la inauguración oficial– los técnicos de la obra a los gerentes de turno. Los reportes sobre el aparecimiento de grietas, filtraciones y soldaduras mal hechas se multiplicaron desde el 2013 y se extendieron como un asunto de todos los días en la hidroeléctrica, calificada por el expresidente Rafael Correa como la obra de infraestructura más grande en la historia del país."
  	},
  	{
  		"titulo":"Ecuatoriano Marlon 'Chito' Vera sorprendió en la UFC",
  		"fecha": "17 de Nov., 2018",
      "autor": "Deportes",
  		"foto": "https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2018/11/-_pelea_ufs_de_arte_marciales_27560990.jpg?itok=qmNheFJJ",
  		"descripcion": "El ecuatoriano Marlon Chito Vera venció en la noche de ese sábado al argentino Guido Ninja Cannetti, en el combate de artes marciales por el peso gallo de la UFC, que se disputó en la Arena Parque Roca, de Buenos Aires, Argentina. La decisión fue victoria por sumisión, luego que Vera sometiera al argentino en el segundo asalto, por lo que el árbitro tuvo que detener la pelea para que sea atendido Cannetti por los médicos y su equipo de asistencia. En el primer round, Vera intentó entrar con alguno que otro golpe sobre el cuerpo del argentino, pero sus llegadas no tuvieron mayor impacto en Cannetti, por lo que el peleador local pudo tomar el control y dominar al ecuatoriano en estos primeros 5 minutos de combate."
  	}
  ]

  constructor() {
  }

  getNoticias():any[] {
  	return this.noticias;
  }

  getNoticia(idx:number):Noticia {
    return this.noticias[idx];
  }
}

export interface Noticia {
	titulo:string,
	fecha:string,
  autor:string,
	foto:string,
	descripcion:string  	
}