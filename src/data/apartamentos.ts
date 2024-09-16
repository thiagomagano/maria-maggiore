import plantaGardens from "@assets/fotos/plantas/planta_gardens.webp";
import plantaCoberturasPiso1 from "@assets/fotos/plantas/planta_cob_pav_1.webp";
import plantaCoberturasPiso2 from "@assets/fotos/plantas/planta_cob_pav_2.webp";
import plantaTipo3Dorm from "@assets/fotos/plantas/planta_tipo_3_dorm.webp";
import plantaTipo2Dorm from "@assets/fotos/plantas/planta_tipo_2_dorm.webp";

import interiorTipo3Dorm1 from "@assets/fotos/interior/interior_tipo_3dorm.webp";
import interiorTipo3Dorm2 from "@assets/fotos/interior/interior_tipo_3_dorm2.webp";

import interiorTipo2Dorm from "@assets/fotos/interior/interior_tipo_2dorm.webp";

import interiorGarden201 from "@assets/fotos/interior/interior_garden_201.webp";
import interiorGarden201203 from "@assets/fotos/interior/interior_Garden_201_203.webp";

import interiorCobertura801803_1 from "@assets/fotos/interior/interior_801_803_cob_1.webp";
import interiorCobertura801803_2 from "@assets/fotos/interior/interior_801_803_cob_2.webp";
import interiorCobertura801803_3 from "@assets/fotos/interior/interior_801_803_cob_3.webp";
import interiorCobertura801803_4 from "@assets/fotos/interior/interior_801_803_cob_4.webp";
import interiorCobertura801803_5 from "@assets/fotos/interior/interior_801_803_cob_5.webp";

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
    titulo: "Apartamentos Cobertura",
    descricao: "(801 e 803)",
    metragem: "175,03 m² privativos",
    plantaImg: plantaCoberturasPiso1,
    images: [
      plantaCoberturasPiso2,
      interiorCobertura801803_1,
      interiorCobertura801803_2,
      interiorCobertura801803_3,
      interiorCobertura801803_5,
      interiorCobertura801803_4,
    ],
    colums: 4,
  },
  
  {
    titulo: "Top Gardens ",
    descricao: "Gardens Elevados (201, 202 e 203)",
    metragem: "118,12 a 140,62 m² privativos",
    plantaImg: plantaGardens,
    images: [interiorGarden201203, interiorGarden201],
    colums: 3,
  },

  {
    titulo: "Apartamentos Tipo 3 dormitórios",
    descricao: "(Finais 01 e 02)",
    metragem: "95,28 m² privativos",
    plantaImg: plantaTipo3Dorm,
    images: [interiorTipo3Dorm1, interiorTipo3Dorm2],
    colums: 3,
  },
  {
    titulo: "Apartamentos Tipo 2 dormitórios",
    descricao: "(Final 02)",
    metragem: "66,94 m² privativos",
    plantaImg: plantaTipo2Dorm,
    images: [interiorTipo2Dorm],
    colums: 2,
  },

  
];

export default apartamentos;
