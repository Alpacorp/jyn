import { AdvisoryIcon } from "../../../../../components/Icons/AdvisoryIcon";
import { FeeIcon } from "../../../../../components/Icons/FeeIcon";
import { GearIcon } from "../../../../../components/Icons/GearIcon";
import { HandsIcon } from "../../../../../components/Icons/HandsIcon";
import { MapIcon } from "../../../../../components/Icons/MapIcon";
import { TimeIcon } from "../../../../../components/Icons/TimeIcon";

export const useDataTrustUs = () => {
  const dataTrustUs = [
    {
      id: 1,
      icon: <AdvisoryIcon />,
      title: "Asesoría Jurídica Gratuita",
      description:
        "Ofrecemos asesoría jurídica sin costo, permitiendo a los clientes comprender sus derechos y opciones antes de tomar decisiones importantes.",
    },
    {
      id: 2,
      icon: <MapIcon />,
      title: "Cobertura Nacional",
      description:
        "Brindamos servicios legales en todo el territorio colombiano, asegurando que las víctimas de accidentes de tránsito tengan acceso a representación de alta calidad en cualquier lugar del país.",
    },
    {
      id: 3,
      icon: <GearIcon />,
      title: "Servicio Personalizado",
      description:
        "Garantizamos un enfoque individualizado para cada cliente, reconociendo que cada caso es único y adaptando las estrategias legales en consecuencia.",
    },
    {
      id: 4,
      icon: <TimeIcon />,
      title: "Transparencia y Comunicación",
      description:
        "Mantenemos una comunicación clara y abierta con los clientes, proporcionándoles información actualizada sobre el progreso de sus casos y los pasos a seguir.",
    },
    {
      id: 5,
      shadow: true,
      icon: <HandsIcon />,
      title: "Resultados Justos y Máxima Compensación",
      description:
        "J&N Abogados se enfoca en aplicar nuestros recursos y experiencia para asegurar compensaciones justas y máximas en casos de Responsabilidad Civil Extracontractual. Buscamos brindar apoyo y alivio a las víctimas, haciendo realidad el principio de justicia que perseguimos incansablemente.",
    },
    {
      id: 6,
      icon: <FeeIcon />,
      title: "Honorarios",
      description:
        "Nuestros honorarios legales están sujetos al éxito del caso, lo que significa que solo se cobran si logramos obtener una compensación para nuestros clientes, alineando nuestros intereses con los de ellos.",
    },
  ];

  return { dataTrustUs };
};
