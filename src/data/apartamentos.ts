import gardens20x from "@assets/fotos/planta/Slide 12 - PB GARDENS 201 202 E 203.jpg";
import coberturas80x_1 from "@assets/fotos/planta/Slide 15 - PB COBERTURAS 801 E 803 (1PAV).jpg";
import coberturas80x_2 from "@assets/fotos/planta/Slide 15 - PB COBERTURAS 801 E 803 (2PAV).jpg";
import tipo3dorm from "@assets/fotos/planta/Slide 13 - PB TIPO 3 dorm.jpg";
import tipo2dorm from "@assets/fotos/planta/Slide 14 - PB TIPO 2dorm.jpg";
import implantacaoSS from "@assets/fotos/planta/Slide 18 - implantacao SS.jpg";
import implantacaoT from "@assets/fotos/planta/Slide 19 - implantacao T.jpg";

import foto3Dorm1 from "@assets/fotos/interior/interior_tipo_3dorm.webp";
import foto3Dorm2 from "@assets/fotos/interior/interior_tipo_3_dorm2.webp";

import foto2Dorm from "@assets/fotos/interior/interior_tipo_2dorm.webp";

interface apartamentos {
  titulo: string;
  descricao: string;
  metragem: string;
  plantaImg: ImageMetadata;
  images: ImageMetadata[];
  colums: number;
}

const apartamentos: apartamentos[] = [
  {
    titulo: "Apartamentos tipo 3 dormitóros",
    descricao: "finais 01 e 03",
    metragem: "95,28 m² privativos",
    plantaImg: tipo3dorm,
    images: [foto3Dorm1, foto3Dorm2],
    colums: 2,
  },
  {
    titulo: "Apartamentos tipo 2 dormitóros",
    descricao: "final 2",
    metragem: "66,94 m² privativos",
    plantaImg: tipo2dorm,
    images: [foto2Dorm],
    colums: 2,
  },
];

export default apartamentos;
