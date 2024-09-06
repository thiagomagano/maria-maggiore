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

import topgardem2 from "@assets/fotos/interior/interior_garden_201.webp";
import topgardem1 from "@assets/fotos/interior/interior_Garden_201_203.webp";

import cobertura1 from "@assets/fotos/interior/interior_801_803_cob_1.webp";
import cobertura2 from "@assets/fotos/interior/interior_801_803_cob_2.webp";
import cobertura3 from "@assets/fotos/interior/interior_801_803_cob_3.webp";
import cobertura4 from "@assets/fotos/interior/interior_801_803_cob_4.webp";
import cobertura5 from "@assets/fotos/interior/interior_801_803_cob_5.webp";

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
    titulo: "Top Gardens ",
    descricao: "(Gardens Elevados) 201, 202 e 203",
    metragem: "118,12 a 140,62 m² privativos",
    plantaImg: gardens20x,
    images: [topgardem1, topgardem2],
    colums: 3,
  },

  {
    titulo: "Apartamentos tipo 3 dormitóros",
    descricao: "Finais 1 e 2",
    metragem: "95,28 m² privativos",
    plantaImg: tipo3dorm,
    images: [foto3Dorm1, foto3Dorm2],
    colums: 3,
  },
  {
    titulo: "Apartamentos tipo 2 dormitóros",
    descricao: "final 2",
    metragem: "66,94 m² privativos",
    plantaImg: tipo2dorm,
    images: [foto2Dorm],
    colums: 2,
  },

  {
    titulo: "Apartamentos Cobertura",
    descricao: "801 e 803",
    metragem: "175,03 m² privativos",
    plantaImg: coberturas80x_1,
    images: [
      coberturas80x_2,
      cobertura1,
      cobertura2,
      cobertura3,
      cobertura5,
      cobertura4,
    ],
    colums: 3,
  },
];

export default apartamentos;
