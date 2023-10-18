import { CareIcon } from "../../../../../components/Icons/CareIcon";
import { CarIcon } from "../../../../../components/Icons/CarsIcon";
import { HealthIcon } from "../../../../../components/Icons/HealthIcon";
import { PersonIcon } from "../../../../../components/Icons/PersonIcon";

export const useDataKind = () => {
  const dataKind = [
    {
      id: 1,
      icon: <HealthIcon />,
      title: "Responsabilidad Civil Médica",
      description: [
        "Negligencia Médica: Si un profesional de la salud, como un médico, enfermera o cirujano, comete un error o actúa de manera negligente durante tu tratamiento como paciente, y esto resulta en lesiones, tienes derecho a reclamar.",
        "Errores Quirúrgicos: Si durante tu cirugía se cometieron errores durante el procedimiento, como operar el área equivocada del cuerpo o dejar objetos quirúrgicos dentro, tienes derecho a reclamar.",
        "Diagnóstico Erróneo o Tardío: Si un médico no te realiza un diagnóstico preciso o retrasa tu diagnóstico de una enfermedad o afección, lo que conduce a un empeoramiento de tu salud, tienes derecho a reclamar.",
        "Medicación Incorrecta: Si has recibido una medicación incorrecta o se administra en la dosis incorrecta, y esto causa una lesión, tienes derecho a reclamar.",
        "Incumplimiento del Consentimiento Informado: Si como paciente no firmaste un consentimiento informado adecuadamente para un procedimiento médico y sufres una lesión como resultado de esto, tienes derecho a reclamar.",
      ],
    },
    {
      id: 2,
      icon: <PersonIcon />,
      title: "Responsabilidad Civil Patronal",
      description: [
        "Accidentes Laborales: Si padeciste una lesión o un familiar tuyo perdió la vida en el lugar de trabajo debido a condiciones peligrosas, falta de equipo de seguridad o negligencia por parte del empleador, tienes derecho a reclamar.",
      ],
    },
    {
      id: 3,
      icon: <CarIcon />,
      title: "Responsabilidad Civil en Accidentes de Tránsito",
      description: [
        "Accidentes de tránsito: Si te viste involucrado en un accidente de tránsito, y sufriste lesiones o un familiar tuyo perdió la vida, en el que un tercero es responsable, tienes derecho a reclamar incluir gastos médicos y hospitalarios de las personas lesionadas, así como una indemnización en caso de fallecimiento y lesiones.",
      ],
    },
    {
      id: 4,
      icon: <CareIcon />,
      title: "Responsabilidad Civil General",
      description: [
        "Si has sufrido una lesión estando en un establecimiento publico (Centros comerciales, restaurantes, gimnasios, centros religiosos, zonas comunes residenciales, etc.), tienes derecho a reclamar.",
      ],
    },
  ];

  return { dataKind };
};
